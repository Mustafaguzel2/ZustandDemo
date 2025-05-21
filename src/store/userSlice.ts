import { type StateCreator } from "zustand";
import type { Store } from "@/types/store";

export type UserState = {
  userName: string;
  fullName: string;
  age: number;
  address: string;
};

export type UserActions = {
  setAddress: (address: string) => void;
  fetchUser: () => Promise<void>;
};

export type UserSlice = UserState & UserActions;

export const createUserSlice: StateCreator<
  Store,
  [["zustand/immer", never]],
  [],
  UserSlice
> = (set) => ({
  userName: "",
  fullName: "",
  age: 0,
  address: "",
  setAddress: (address: string) =>
    set((state) => {
      state.address = address;
    }),
  fetchUser: async () => {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    set((state) => {
      state.userName = data.results[0].name.first;
      state.fullName = data.results[0].name.first + " " + data.results[0].name.last;
      state.age = data.results[0].dob.age;
      state.address = data.results[0].location.street.name + " " + data.results[0].location.street.number;
    });
  },
});
