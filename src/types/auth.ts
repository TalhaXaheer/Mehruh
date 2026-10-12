export type UserRole = "CUSTOMER" | "ADMIN" | "VIP";

export interface User {
  id: string;
  name: string | null;
  email: string;
  role: UserRole;
  image?: string | null;
  createdAt: Date;
}

export interface Session {
  user: User;
  expires: string;
}
