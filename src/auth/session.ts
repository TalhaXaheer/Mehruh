import { UserRole } from "@/types/auth";

export interface CurrentUser {
  id: string;
  email: string;
  name: string | null;
  role: UserRole;
}

/**
 * Server-side session verification helper stub.
 */
export async function getCurrentUser(): Promise<CurrentUser | null> {
  // Configured for session retrieval once auth provider is connected
  return null;
}

export async function requireAdmin(): Promise<CurrentUser> {
  const user = await getCurrentUser();
  if (!user || user.role !== "ADMIN") {
    throw new Error("Unauthorized: Admin credentials required");
  }
  return user;
}
