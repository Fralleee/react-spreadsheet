import { useDataStore } from "hooks/useDataStore";
import { useStatusStore } from "hooks/useStatusStore";
import { useEffect } from "react";

const statusColorMap = {
  success: "bg-success",
  error: "bg-error",
  info: "bg-cell-edit",
  idle: "bg-header",
};

function Statusbar() {
  const { isDirty } = useDataStore();
  const { status, clearStatus } = useStatusStore();

  useEffect(() => {
    if (status) {
      let timeoutId: NodeJS.Timeout;
      if (status.clearable) {
        timeoutId = setTimeout(() => {
          clearStatus();
        }, 10000);
      }

      return () => clearTimeout(timeoutId);
    }
  }, [status, clearStatus]);

  const bgColor = statusColorMap[status.type];
  return (
    <aside role="status" className={`fixed bottom-0 left-0 flex h-12 w-full items-center justify-center px-6 ${bgColor}`}>
      {status.message}
      <div className="absolute right-3 top-4 text-xs">{isDirty ? "* Unsaved changes" : ""}</div>
    </aside>
  );
}

export default Statusbar;
