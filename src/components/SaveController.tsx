import { useDataStore } from "hooks/useDataStore";
import useTimer from "hooks/useTimer";
import { useSave } from "hooks/useSave";
import { useEffect, useState } from "react";
import Statusbar from "./status/Statusbar";
import { useStartAutosaveTimer, useAutosaveOnTimerZero, useWarnBeforeUnload } from "hooks/saveControllerHooks";

function SaveController() {
  const { isDirty, clearDirty } = useDataStore();
  const { handleSave, isError, isLoading, isSuccessful } = useSave();
  const { timer, isRunning, start, stop } = useTimer(5, false);
  const [statusType, setStatusType] = useState<StatusType>("idle");

  useStartAutosaveTimer(isDirty, isLoading, start);
  useAutosaveOnTimerZero(timer, isLoading, handleSave, clearDirty, stop, setStatusType);
  useWarnBeforeUnload(isDirty);

  useEffect(() => {
    if (isSuccessful) {
      setStatusType("success");
    } else if (isLoading) {
      setStatusType("loading");
    } else if (isError) {
      setStatusType("error");
      start(); // reset timer to retry
    }
  }, [isSuccessful, isError, clearDirty, start, isLoading]);

  return <Statusbar statusType={statusType} timer={timer} isRunning={isRunning} />;
}

export default SaveController;
