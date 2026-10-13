import fs from 'node:fs';
import path from 'node:path';

function isValidDate(dateStr) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) return false;
  const [y, m, d] = dateStr.split('-').map(Number);
  const date = new Date(Date.UTC(y, m - 1, d));
  return (
    date.getUTCFullYear() === y &&
    date.getUTCMonth() === m - 1 &&
    date.getUTCDate() === d
  );
}

const progressFilePath = process.env.PROGRESS_FILE
  ? path.resolve(process.cwd(), process.env.PROGRESS_FILE)
  : path.resolve(process.cwd(), 'docs/PROGRESS.md');

if (!fs.existsSync(progressFilePath)) {
  console.error(`ERROR: File not found: ${progressFilePath}`);
  process.exit(1);
}

const content = fs.readFileSync(progressFilePath, 'utf8');
const errors = [];

// 1. Header parsing
const currentPhaseMatch = content.match(/\*\*Current phase:\*\*\s*([^\r\n]+)/i);
if (!currentPhaseMatch) {
  errors.push('Header line "**Current phase:**" not found.');
}

const lastUpdatedMatch = content.match(/\*\*Last updated:\*\*\s*([^\r\n]+)/i);
let headerLastUpdated = '';
if (!lastUpdatedMatch) {
  errors.push('Header line "**Last updated:**" not found.');
} else {
  headerLastUpdated = lastUpdatedMatch[1].trim();
  if (!isValidDate(headerLastUpdated)) {
    errors.push(`Header "Last updated" ('${headerLastUpdated}') is not a valid YYYY-MM-DD date.`);
  }
}

const doneMatch = content.match(/\*\*Done:\*\*\s*(\d+)\s*\/\s*(\d+)/i);
let headerDone = null;
let headerTotal = null;
if (!doneMatch) {
  errors.push('Header line "**Done:** n / total" not found.');
} else {
  headerDone = parseInt(doneMatch[1], 10);
  headerTotal = parseInt(doneMatch[2], 10);
}

const nextTaskMatch = content.match(/\*\*Next task:\*\*\s*([^\r\n]+)/i);
let headerNextTask = '';
if (!nextTaskMatch) {
  errors.push('Header line "**Next task:**" not found.');
} else {
  headerNextTask = nextTaskMatch[1].trim();
}

// 2. Parse Tasks table
const tasksSectionMatch = content.match(/## Tasks\s*([\s\S]*?)(?=\n## |\s*$)/);
if (!tasksSectionMatch) {
  errors.push('Section "## Tasks" not found in progress file.');
}

const tasks = [];
const idRegex = /^(I0|T\d+|A\d+|\d+\.\d+)$/;

if (tasksSectionMatch) {
  const lines = tasksSectionMatch[1].split(/\r?\n/);
  let rowIndex = 0;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed.startsWith('|')) continue;

    let raw = trimmed;
    if (raw.startsWith('|')) raw = raw.slice(1);
    if (raw.endsWith('|')) raw = raw.slice(0, -1);

    const cols = raw.split('|').map(c => c.trim());
    if (cols.length === 0) continue;

    const firstCell = cols[0];
    if (firstCell.toLowerCase() === 'id' || firstCell.startsWith('---')) {
      continue;
    }

    if (!idRegex.test(firstCell)) {
      continue;
    }

    if (cols.length !== 11) {
      errors.push(`Task row "${firstCell}" has ${cols.length} columns (expected 11).`);
    }

    const task = {
      index: rowIndex++,
      id: cols[0],
      phase: cols[1] || '',
      task: cols[2] || '',
      gate: cols[3] || '',
      depends: cols[4] || '',
      status: cols[5] || '',
      updated: cols[6] || '',
      commitMsg: cols[7] || '',
      hash: cols[8] || '',
      verify: cols[9] || '',
      notes: cols[10] || '',
    };
    tasks.push(task);
  }
}

// 3. Validate task IDs and uniqueness
const VALID_STATUSES = new Set(['TODO', 'IN PROGRESS', 'REVIEW', 'DONE', 'BLOCKED', 'SKIPPED']);
const taskMap = new Map();

for (const task of tasks) {
  if (taskMap.has(task.id)) {
    errors.push(`Duplicate task ID "${task.id}".`);
  } else {
    taskMap.set(task.id, task);
  }

  if (!VALID_STATUSES.has(task.status)) {
    errors.push(`Task ${task.id} has invalid status "${task.status}". Expected one of: ${[...VALID_STATUSES].join(', ')}.`);
  }
}

// Validate Depends references
for (const task of tasks) {
  if (task.depends && task.depends !== '-' && task.depends !== 'none') {
    const depIds = task.depends.split(/[,;\s]+/).map(s => s.trim()).filter(Boolean);
    for (const depId of depIds) {
      if (!taskMap.has(depId)) {
        errors.push(`Task ${task.id} depends on non-existent task ID "${depId}".`);
      }
    }
  }
}

// 4. At most one task IN PROGRESS
const inProgressTasks = tasks.filter(t => t.status === 'IN PROGRESS');
if (inProgressTasks.length > 1) {
  errors.push(`Multiple tasks are IN PROGRESS (${inProgressTasks.map(t => t.id).join(', ')}). At most one task may be IN PROGRESS.`);
}

// 5. DONE or REVIEW row requirements
for (const task of tasks) {
  if (task.status === 'DONE' || task.status === 'REVIEW') {
    if (!task.updated || task.updated.trim() === '' || task.updated.trim() === '-') {
      errors.push(`Task ${task.id} has status ${task.status} but an empty Updated cell.`);
    }
    if (!task.commitMsg || task.commitMsg.trim() === '' || task.commitMsg.trim() === '-') {
      errors.push(`Task ${task.id} has status ${task.status} but an empty Commit message cell.`);
    }
    if (!task.verify || task.verify.trim() === '') {
      errors.push(`Task ${task.id} has status ${task.status} but an empty Verify cell.`);
    }
  }
}

// 6. DONE hash validation (empty hash allowed ONLY on the most recently updated DONE row)
const doneTasks = tasks.filter(t => t.status === 'DONE');
let mostRecentDoneTask = null;
for (const task of doneTasks) {
  if (!mostRecentDoneTask) {
    mostRecentDoneTask = task;
  } else {
    if (task.updated > mostRecentDoneTask.updated) {
      mostRecentDoneTask = task;
    } else if (task.updated === mostRecentDoneTask.updated && task.index > mostRecentDoneTask.index) {
      mostRecentDoneTask = task;
    }
  }
}

for (const task of doneTasks) {
  const isHashEmpty = !task.hash || task.hash.trim() === '' || task.hash.trim() === '-';
  if (isHashEmpty) {
    if (!mostRecentDoneTask || task.id !== mostRecentDoneTask.id) {
      errors.push(`Task ${task.id} is DONE with an empty Hash cell and is not the most recently updated DONE task (${mostRecentDoneTask?.id}).`);
    }
  }
}

// 7. DONE task dependency validation (must be DONE or SKIPPED)
for (const task of doneTasks) {
  if (task.depends && task.depends !== '-' && task.depends !== 'none') {
    const depIds = task.depends.split(/[,;\s]+/).map(s => s.trim()).filter(Boolean);
    for (const depId of depIds) {
      const depTask = taskMap.get(depId);
      if (depTask && depTask.status !== 'DONE' && depTask.status !== 'SKIPPED') {
        errors.push(`Task ${task.id} is DONE, but dependency ${depId} has status "${depTask.status}" (must be DONE or SKIPPED).`);
      }
    }
  }
}

// 8. Header Done count matches table
if (headerDone !== null && headerTotal !== null) {
  const tableDone = doneTasks.length;
  const tableTotal = tasks.length;
  if (headerDone !== tableDone || headerTotal !== tableTotal) {
    errors.push(`Header "Done: ${headerDone} / ${headerTotal}" does not match table (${tableDone} / ${tableTotal}).`);
  }
}

// 9. Next task header validation
let expectedNextTask = 'none';
for (const task of tasks) {
  if (task.status === 'TODO') {
    let depsSatisfied = true;
    if (task.depends && task.depends !== '-' && task.depends !== 'none') {
      const depIds = task.depends.split(/[,;\s]+/).map(s => s.trim()).filter(Boolean);
      for (const depId of depIds) {
        const depTask = taskMap.get(depId);
        if (!depTask || (depTask.status !== 'DONE' && depTask.status !== 'SKIPPED')) {
          depsSatisfied = false;
          break;
        }
      }
    }
    if (depsSatisfied) {
      expectedNextTask = task.id;
      break;
    }
  }
}

if (headerNextTask && headerNextTask !== expectedNextTask) {
  errors.push(`Header "Next task" is "${headerNextTask}", expected "${expectedNextTask}".`);
}

// Report and exit
if (errors.length > 0) {
  console.error(`progress check FAILED (${errors.length} error${errors.length === 1 ? '' : 's'}):`);
  for (const err of errors) {
    console.error(`  - ${err}`);
  }
  process.exit(1);
}

const tableDone = doneTasks.length;
const tableTotal = tasks.length;
console.log(`progress OK: ${tableDone}/${tableTotal} done, next task ${headerNextTask}`);
process.exit(0);
