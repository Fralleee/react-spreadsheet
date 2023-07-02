import { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

type StatusType = "idle" | "loading" | "error" | "success";

interface StatusbarProps {
  statusType: StatusType;
  timer: number;
  isRunning: boolean;
}

const statusColorMap: { [key in StatusType]: string } = {
  success: "bg-success",
  error: "bg-error",
  loading: "bg-cell-edit",
  idle: "bg-header",
};

const statusMessageMap: { [key in StatusType]: string | ReactNode } = {
  success: "Save successful",
  error: "Error while saving",
  loading: (
    <>
      Saving data, please wait <FontAwesomeIcon icon={faSpinner} className="ml-3 animate-spin" />
    </>
  ),
  idle: "",
};

function Statusbar({ statusType, timer, isRunning }: StatusbarProps) {
  const bgColor = statusColorMap[statusType];
  return (
    <aside role="status" className={`fixed bottom-0 left-0 flex h-12 w-full items-center justify-center px-6 ${bgColor}`}>
      {statusMessageMap[statusType]}
      {isRunning && <div className="absolute right-3 top-4 text-xs">Auto-saving data in {timer} s.</div>}
    </aside>
  );
}

export default Statusbar;
