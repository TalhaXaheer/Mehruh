"use server";

import { z } from "zod";

const newsletterSchema = z.object({
  email: z.string().email("Please provide a valid email address"),
});

export type NewsletterState = {
  success?: boolean;
  message?: string;
  error?: string;
};

export async function subscribeNewsletter(
  _prevState: NewsletterState,
  formData: FormData
): Promise<NewsletterState> {
  const email = formData.get("email");

  const validated = newsletterSchema.safeParse({ email });
  if (!validated.success) {
    return {
      success: false,
      error: validated.error.issues[0]?.message ?? "Invalid email format",
    };
  }

  try {
    // In production, save to Prisma / database
    // await prisma.newsletterSubscriber.upsert(...)
    return {
      success: true,
      message: "You have been welcomed to the private circle of MEHRUH.",
    };
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return {
      success: false,
      error: "Unable to complete subscription. Please try again.",
    };
  }
}
