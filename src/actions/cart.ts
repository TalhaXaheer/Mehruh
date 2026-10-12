"use server";

import { z } from "zod";

const addToCartSchema = z.object({
  fragranceId: z.string(),
  variantId: z.string(),
  quantity: z.number().int().positive().default(1),
});

export async function addToCartAction(data: z.infer<typeof addToCartSchema>) {
  const result = addToCartSchema.safeParse(data);
  if (!result.success) {
    return { success: false, error: "Invalid product specifications" };
  }

  // Ready for Prisma / session cart synchronization
  return { success: true, message: "Added to your flacon collection" };
}
