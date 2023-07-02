import { useEffect } from "react";

export function useStartAutosaveTimer(isDirty: boolean, isLoading: boolean, start: () => void) {
  useEffect(() => {
    if (isDirty && !isLoading) {
      start();
    }
  }, [isDirty, isLoading, start]);
}

export function useAutosaveOnTimerZero(
  timer: number,
  isLoading: boolean,
  handleSave: () => void,
  clearDirty: () => void,
  stop: () => void,
  setStatusType: (status: StatusType) => void
) {
  useEffect(() => {
    if (timer === 0 && !isLoading) {
      setStatusType("loading");
      handleSave();
      clearDirty();
      stop();
    }
  }, [clearDirty, handleSave, isLoading, stop, timer, setStatusType]);
}

export function useWarnBeforeUnload(isDirty: boolean) {
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (isDirty) {
        event.preventDefault();
        event.returnValue = "You have unsaved changes, are you sure you want to leave?";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isDirty]);
}
