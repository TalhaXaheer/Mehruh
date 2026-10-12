import { requireAdmin } from "@/auth/session";

export async function verifyAdminAccess() {
  return await requireAdmin();
}
