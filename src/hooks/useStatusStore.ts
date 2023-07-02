import { create } from "zustand";

type StatusType = "success" | "error" | "info" | "idle";

interface Status {
  message: string;
  type: StatusType;
  clearable: boolean;
}

interface StatusState {
  status: Status;
  setStatus: (message: string, type: StatusType, clearable: boolean) => void;
  clearStatus: () => void;
}

const defaultStatus: Status = { message: "Nothing going on", type: "idle", clearable: false };
export const useStatusStore = create<StatusState>(set => ({
  status: defaultStatus,
  setStatus: (message, type, clearable) => set({ status: { message, type, clearable } }),
  clearStatus: () => set({ status: defaultStatus }),
}));
