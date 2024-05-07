
export const IMAGE_URL = "http://127.0.0.1:8000/image";

export async function getImageByID(id: string){
    const coroutine = await fetch(`${IMAGE_URL}/${id}`)
    const result = await coroutine.blob()
    return result
}