import { redirect} from "react-router-dom"
import { createRequest, deleteRequest, getRequestByID } from "./request"

export async function actionMakeRequest({request, params}){
    const data = await request.formData()
    console.log(Object.fromEntries(data))
    const result = await createRequest(data)
    console.log({request})
    return null
}

export async function actionLogRequest({request, params}){
    const data = await request.formData()
    console.log(Object.fromEntries(data))
    return null
}

export async function actionHandleRequest({request, params}){
    await deleteRequest(params.requestId)
    return redirect(`/project/${params.projectId}`)
}

export async function loaderRequestID({request, params}){
    console.log("Get output image of request")
    return await getRequestByID(params.requestId)
}