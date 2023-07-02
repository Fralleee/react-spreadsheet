import { faTimesCircle, faSpinner, faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMutation, useQuery } from "@tanstack/react-query";
import { postSave, getStatus } from "api/spreadsheet";
import { useDataStore } from "hooks/useDataStore";
import { useStatusStore } from "hooks/useStatusStore";
import { useEffect } from "react";

function SaveButton() {
  const { setStatus } = useStatusStore();
  const { clearDirty } = useDataStore();
  const saveMutation = useMutation({ mutationFn: postSave });

  const { data, isError: statusError } = useQuery({
    queryKey: ["status", saveMutation.data?.id],
    queryFn: () => getStatus(saveMutation.data?.id as string),
    refetchInterval: data => (data?.status === "DONE" ? false : 5000),
    enabled: !!saveMutation.data?.id,
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

  const isLoading = saveMutation.isLoading || data?.status === "IN_PROGRESS";

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
