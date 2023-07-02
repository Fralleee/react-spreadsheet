const API_URL = process.env.REACT_APP_API_URL;

export async function postSave(): Promise<StatusResponse> {
  const response = await fetch(`${API_URL}/save`, { method: "POST" });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}

export async function getStatus(id: string): Promise<StatusResponse> {
  const response = await fetch(`${API_URL}/get-status?` + new URLSearchParams({ id }));
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}
