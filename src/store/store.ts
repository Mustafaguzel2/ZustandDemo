import { create } from "zustand";
import { createUserSlice } from "./userSlice";
import type { Store } from "@/types/store";
import { immer } from "zustand/middleware/immer";
import { createCartSlice } from "./cardSlice";
import { devtools } from "zustand/middleware";
import { persist, createJSONStorage } from "zustand/middleware";
export const useStore = create<Store>()(
  devtools(
    persist(
      immer((...a) => ({
        ...createUserSlice(...a),
        ...createCartSlice(...a),
      })),
      {
        name: "cart-storage",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);
