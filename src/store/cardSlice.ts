import type { Product } from "@/types/product";
import type { CartProduct } from "@/types/cartProduct";
import { type StateCreator } from "zustand";
import type { Store } from "@/types/store";

export type CartState = {
  products: CartProduct[];
  total: number;
};

export type CartActions = {
  addProduct: (product: Product) => void;
  removeProduct: (productId: string) => void;
  incrementQuantity: (productId: string) => void;
  decrementQuantity: (productId: string) => void;
  getProductById: (productId: string) => CartProduct | undefined;
  setTotal: (total: number) => void;
  clearCart: () => void;
};

export type CartSlice = CartState & CartActions;

const initialState: CartState = {
  products: [],
  total: 0,
};

export const createCartSlice: StateCreator<
  Store,
  [["zustand/immer", never]],
  [],
  CartSlice
> = (set, get) => ({
  ...initialState,
  incrementQuantity: (productId: string) =>
    set((state) => {
      const productIndex = state.products.findIndex((p) => p.id === productId);
      if (productIndex !== -1) state.products[productIndex].quantity += 1;
    }),
  decrementQuantity: (productId: string) =>
    set((state) => {
      const productInCart = state.products.findIndex((p) => p.id === productId);
      if (productInCart !== -1) {
        if (state.products[productInCart].quantity === 1) {
          state.products.splice(productInCart, 1);
        } else {
          state.products[productInCart].quantity--;
        }
      }
    }),
  addProduct: (product: Product) =>
    set((state) => {
      const productInCart = state.products.find((p) => p.id === product.id);
      if (productInCart) productInCart.quantity++;
      else state.products.push({ ...product, quantity: 1 });
    }),
  removeProduct: (productId: string) =>
    set((state) => {
      state.products = state.products.filter((p) => p.id !== productId);
    }),
  getProductById: (productId: string) =>
    get().products.find((p) => p.id === productId),
  setTotal: (total: number) =>
    set((state) => {
      state.total = total;
    }),
  clearCart: () => set(() => ({ ...initialState })),
});
