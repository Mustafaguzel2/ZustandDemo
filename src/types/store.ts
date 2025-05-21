import type { UserSlice } from "@/store/userSlice";
import type { CartSlice } from "@/store/cardSlice";

export type Store = UserSlice & CartSlice;

