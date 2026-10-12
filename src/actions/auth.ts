"use server";

import { z } from "zod";

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export async function signInAction(formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  const validated = signInSchema.safeParse({ email, password });
  if (!validated.success) {
    return { success: false, error: "Invalid credentials" };
  }

  return { success: true };
}
