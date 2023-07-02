type Status = "IN_PROGRESS" | "DONE";

interface BaseStatusResponse {
  status: Status;
}

interface InProgressStatusResponse extends BaseStatusResponse {
  status: "IN_PROGRESS";
  done_at: string;
  id: string;
}

interface DoneStatusResponse extends BaseStatusResponse {
  status: "DONE";
  id?: string;
}

type StatusResponse = DoneStatusResponse | InProgressStatusResponse;
