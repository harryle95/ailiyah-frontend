
export async function actionMakeRequest({request, params}){
    const data = await request.formData()
    console.log("request: ", Object.fromEntries(data) )
    console.log("params: ", params)
    return data
}