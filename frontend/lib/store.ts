import { Product } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartState {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  getCartTotal: () => number;
}

export const useCartStore = create(
  persist<CartState>(
    (set, get) => ({
      cart: [],
      addToCart: (product) =>
        set((state) => ({ cart: [...state.cart, product] })),
      removeFromCart: (productId) =>
        set((state) => ({
          cart: state.cart.filter((product) => product.id !== productId),
        })),
      getCartTotal: () =>
        get().cart.reduce((acc, product) => acc + product.price, 0),
    }),
    { name: "cart-storage" }
  )
);
