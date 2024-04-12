import { createRequest, deleteRequest } from "./request"

export async function actionMakeRequest({request, params}){
    const data = await request.formData()
    return await createRequest(data)
}

export async function actionHandleRequest({request, params}){
    await deleteRequest(params.requestId)
    return null
}