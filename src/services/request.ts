export const REQUEST_URL = "http://127.0.0.1:8000/request";

export interface RequestDTO {
  id: string;
  name: string;
  output_image: string;
}

export async function createRequest(data: FormData) {
  const coroutine = await fetch(REQUEST_URL, {
    method: "POST",
    body: data,
  });
  const result = await coroutine.json();
  return result;
}

export async function updateRequest(data: FormData, id: string) {
  const coroutine = await fetch(`${REQUEST_URL}/${id}`, {
    method: "PUT",
    body: data,
  });
  const result = await coroutine.json();
  return result;
}

export async function deleteRequest(id: string) {
  const coroutine = await fetch(`${REQUEST_URL}/${id}`, { method: "DELETE" });
  console.log(coroutine.status);
}

export async function getRequestByID(id: string): Promise<RequestDTO> {
  const coroutine = await fetch(`${REQUEST_URL}/${id}`);
  const result = await coroutine.json();
  return result;
}
