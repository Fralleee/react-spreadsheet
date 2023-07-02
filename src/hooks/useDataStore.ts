import { create } from "zustand";

type State = {
  isDirty: boolean;
  setDirty: () => void;
  clearDirty: () => void;
};

export const useDataStore = create<State>(set => ({
  isDirty: false,
  setDirty: () => set(() => ({ isDirty: true })),
  clearDirty: () => set(() => ({ isDirty: false })),
}));
