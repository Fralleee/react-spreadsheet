import { useQuery } from "@tanstack/react-query";
import { getStatus } from "api/spreadsheet";

export function useSpreadsheetStatus(id: string) {
  return useQuery<StatusResponse, Error>({ queryKey: ["status", id], queryFn: () => getStatus(id) });
}
