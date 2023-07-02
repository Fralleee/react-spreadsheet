import { faTimesCircle, faSpinner, faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMutation, useQuery } from "@tanstack/react-query";
import { postSave, getStatus } from "api/spreadsheet";
import { extractDelayFromDateAndNow } from "components/utils/dateUtils";
import { useDataStore } from "hooks/useDataStore";
import { useStatusStore } from "hooks/useStatusStore";
import { useEffect, useState } from "react";

function SaveButton() {
  const { setStatus } = useStatusStore();
  const { clearDirty } = useDataStore();
  const [statusId, setStatusId] = useState<string | null>(null);
  const [isOperationLoading, setIsOperationLoading] = useState(false);

  const saveMutation = useMutation({
    mutationFn: postSave,
    onSuccess: data => {
      if (data.status === "DONE") return;
      if (data.done_at) {
        const delay = extractDelayFromDateAndNow(new Date(data.done_at));
        setIsOperationLoading(true);
        setTimeout(
          () => {
            setStatusId(data.id!);
            setIsOperationLoading(false);
          },
          delay > 0 ? delay : 0
        );
      }
    },
  });

  const { data, isError: statusError } = useQuery({
    queryKey: ["status", statusId],
    queryFn: () => getStatus(statusId as string),
    refetchInterval: data => (data?.status === "DONE" ? false : 1000),
    enabled: !!statusId,
  });

  const isError = saveMutation.isError || statusError;
  useEffect(() => {
    const status = data?.status || saveMutation.data?.status;
    if (status === "DONE") {
      clearDirty();
      setStatus("Save successfull.", "success", true);
    } else if (status === "IN_PROGRESS") {
      setStatus("Save in progress...", "info", false);
    } else if (isError) {
      setStatus("Error while saving. Please try again.", "error", true);
    }
  }, [data, saveMutation.data, isError, setStatus, clearDirty]);

  const handleSave = async () => {
    setStatus("Save in progress...", "info", false);
    saveMutation.mutate();
  };

  const isLoading = isOperationLoading || saveMutation.isLoading || data?.status === "IN_PROGRESS";

  return (
    <button
      onClick={handleSave}
      disabled={isLoading}
      className={`relative flex w-32 items-center justify-center rounded px-4 py-2 font-medium ${isError ? "bg-error-border text-white" : "bg-cell-edit"}`}>
      {isLoading ? "Saving" : "Save"}
      {isLoading ? (
        <FontAwesomeIcon icon={faSpinner} className="ml-3 animate-spin" />
      ) : isError ? (
        <FontAwesomeIcon icon={faTimesCircle} className="ml-3" />
      ) : (
        <FontAwesomeIcon icon={faSave} className="ml-3" />
      )}
    </button>
  );
}

export default SaveButton;
