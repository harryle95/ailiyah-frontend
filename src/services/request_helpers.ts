import { Params, redirect } from "react-router-dom";
import {
  createRequest,
  deleteRequest,
  getRequestByID,
  updateRequest,
} from "./request";
import { IMAGE_URL, getImageByID } from "./image";

export async function actionMakeRequest({
  request,
  params,
}: {
  request: Request;
  params: Params;
}) {
  const data = await request.formData();
  console.log(Object.fromEntries(data));
  const result = await createRequest(data);
  console.log({ request });
  return null;
}

async function actionCreateRequest({
  request,
  params,
}: {
  request: Request;
  params: Params;
}) {
  console.log("Create action");
  const data = await request.formData();
  data.append("project_id", params.projectId!);
  const result = await createRequest(data);
  return redirect(`/project/${params.projectId}/${result.id}`);
}

async function actionUpdateRequest({
  request,
  params,
}: {
  request: Request;
  params: Params;
}) {
  console.log("Update action");
  const data = await request.formData();
  data.append("project_id", params.projectId!);
  const request_id = data.get("request_id");
  data.delete("request_id");
  const result = await updateRequest(data, request_id as string);
  return redirect(`/project/${params.projectId}/${result.id}`);
}

async function actionDeleteRequest({
  request,
  params,
}: {
  request: Request;
  params: Params;
}) {
  console.log("Delete action");
  const data = await request.formData();
  await deleteRequest(data.get("requestId") as string);
  return redirect(`/project/${params.projectId}`);
}

export async function actionHandleRequest({
  request,
  params,
}: {
  request: Request;
  params: Params;
}) {
  switch (request.method.toUpperCase()) {
    case "PUT":
      return await actionUpdateRequest({ request, params });
    case "POST":
      return await actionCreateRequest({ request, params });
    case "DELETE":
      return await actionDeleteRequest({ request, params });
  }
}

export async function loaderRequestID({
  request,
  params,
}: {
  request: Request;
  params: Params;
}) {
  const result = await getRequestByID(params.requestId!);
  return result;
}
