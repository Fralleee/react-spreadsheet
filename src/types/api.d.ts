type Status = "IN_PROGRESS" | "DONE";

type StatusResponse = {
  status: Status;
  done_at?: string;
  id?: string;
};
