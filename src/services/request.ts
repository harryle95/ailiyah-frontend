


const REQUEST_URL = "http://127.0.0.1:8000/request";

export async function createRequest(data: FormData){
    console.log(data, data.get("file"), typeof data.get("file"))
    const coroutine = await fetch(REQUEST_URL, {
        method: "POST",
        body: data,
    });
    const result = await coroutine.json();
    return result;
}