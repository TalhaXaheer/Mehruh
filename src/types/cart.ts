import { FragranceProduct, FlaconOption } from "./product";

export interface CartItem {
  id: string;
  productId: string;
  product: FragranceProduct;
  selectedOption: FlaconOption;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  subtotal: number;
  totalQuantity: number;
  isOpen: boolean;
}
