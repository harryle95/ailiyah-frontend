import { Params, redirect} from "react-router-dom"
import { createRequest, deleteRequest, getRequestByID } from "./request"

export async function actionMakeRequest({request, params}:{request: Request, params: Params}){
    const data = await request.formData()
    console.log(Object.fromEntries(data))
    const result = await createRequest(data)
    console.log({request})
    return null
}

export async function actionLogRequest({request, params}:{request: Request, params: Params}){
    const data = await request.formData()
    data.append("project_id", params.projectId!)
    console.log(Object.fromEntries(data))
    const result = await createRequest(data)
    console.log(result)
    return redirect(`/project/${params.projectId}`)
}

export async function actionHandleRequest({request, params}:{request: Request, params: Params}){
    await deleteRequest(params.requestId!)
    return redirect(`/project/${params.projectId}`)
}

export async function loaderRequestID({request, params}:{request: Request, params: Params}){
    console.log("Get output image of request")
    return await getRequestByID(params.requestId!)
}