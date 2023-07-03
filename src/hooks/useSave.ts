import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { postSave, getStatus } from "api/spreadsheet";
import { extractDelayFromDateAndNow } from "components/utils/dateUtils";
import { useCallback, useState } from "react";
import { useDataStore } from "./useDataStore";
import { exportAsCsv } from "components/utils/spreadsheetUtils";

export function useSave() {
  const { grid } = useDataStore();
  const queryClient = useQueryClient();
  const [statusId, setStatusId] = useState<string | null>(null);
  const [isOperationLoading, setIsOperationLoading] = useState(false);

  const saveMutation = useMutation({
    mutationFn: () => postSave(exportAsCsv(grid)),
    onSuccess: data => {
      if (data.status === "DONE") {
        return;
      }
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
  const isLoading = isOperationLoading || saveMutation.isLoading || data?.status === "IN_PROGRESS";
  const isSuccessful = !isLoading && !isError && (saveMutation.data?.status === "DONE" || data?.status === "DONE");

  const handleSave = useCallback(() => {
    saveMutation.mutate();
    queryClient.resetQueries();
  }, [queryClient, saveMutation]);

  return { handleSave, isError, isLoading, isSuccessful };
}
