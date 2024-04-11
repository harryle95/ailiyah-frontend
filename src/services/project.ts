
export interface RequestDTO{
    id: string 
    prompt: string 
}

export interface ProjectDTO{
    id: string
    name: string
    requests: Array<RequestDTO>
}

export interface ProjectLiteDTO{
    id: string 
    name: string 
}

const PROJECT_URL = "http://127.0.0.1:8000/project";

export async function getProjects(): Promise<Array<ProjectDTO>>{
    const coroutine = await fetch(PROJECT_URL)
    const result = await coroutine.json();
    return result;
}

export async function getProjectByID(id: string): Promise<ProjectDTO> {
    const coroutine = await fetch(`${PROJECT_URL}/${id}`)
    const result = await coroutine.json();
    return result
}

export async function createProject(data: ProjectLiteDTO): Promise<ProjectDTO> {
    const coroutine = await fetch(PROJECT_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const result = await coroutine.json();
    return result;
}

export async function updateProject(id: string, data: ProjectLiteDTO): Promise<ProjectDTO>{
    const coroutine = await fetch(`${PROJECT_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const result = await coroutine.json();
    return result;
}

export async function deleteProject(id: string){
    await fetch(`${PROJECT_URL}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });
}