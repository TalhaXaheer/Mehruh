import { CartItem } from "@/types/cart";

export function calculateSubtotal(items: CartItem[]): number {
  return items.reduce(
    (sum, item) => sum + item.selectedOption.price * item.quantity,
    0
  );
}

export function calculateTotalQuantity(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.quantity, 0);
}
