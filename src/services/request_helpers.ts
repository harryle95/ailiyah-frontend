import { createRequest } from "./request"

export async function actionMakeRequest({request, params}){
    const data = await request.formData()

    return await createRequest(data)
}