import { Product } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ProductWithUID extends Product {
  UID: number;
}

interface CartState {
  cart: ProductWithUID[];
  addToCart: (product: ProductWithUID) => void;
  removeFromCart: (productId: number) => void;
  getCartTotal: () => number;
}

export const useCartStore = create(
  persist<CartState>(
    (set, get) => ({
      cart: [],
      addToCart: (product) =>
        set((state) => ({ cart: [...state.cart, product] })),
      removeFromCart: (productUID) =>
        set((state) => ({
          cart: state.cart.filter((product) => product.UID !== productUID),
        })),
      getCartTotal: () =>
        get().cart.reduce((acc, product) => acc + product.price, 0),
    }),
    { name: "cart-storage" }
  )
);
