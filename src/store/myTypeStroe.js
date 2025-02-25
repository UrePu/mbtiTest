import { create } from "zustand";

export const useMyTypeStore = create((set) => ({
  myType: "test",
  setMyType: (myType) => set({ myType }),
}));
