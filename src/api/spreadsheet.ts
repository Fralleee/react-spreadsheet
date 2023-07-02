const API_URL = process.env.REACT_APP_API_URL;

export async function postSave(): Promise<StatusResponse> {
  // httpStatus: 200, body: { "status": "DONE" }
  // httpStatus: 200, body: { "id": "randomID", "status": "IN_PROGRESS", "done_at": "timestamp in RFC3339 format" }
  // httpStatus: 500, body: empty
  const response = await fetch(`${API_URL}/save`, { method: "POST" });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}

export async function getStatus(id: string): Promise<StatusResponse> {
  // httpStatus: 200, body: { "status": "DONE" }
  // httpStatus: 200, body: { "id": "randomID", "status": "IN_PROGRESS", "done_at": "timestamp in RFC3339 format" }
  const response = await fetch(`${API_URL}/get-status?` + new URLSearchParams({ id }));
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}
