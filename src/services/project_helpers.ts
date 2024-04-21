import { getProjectByID, getProjects, ProjectDTO, createProject, updateProject, deleteProject } from "./project";
import { redirect } from "react-router-dom";

type ProjectParam = {
    projectId: string 
}

export async function loaderProject(): Promise<Array<ProjectDTO>> {
    const projects = await getProjects();
    return projects;
}

export async function loaderProjectId({ params }): Promise<ProjectDTO> {
    const project = await getProjectByID(params.projectId);
    return project;
}

async function actionCreateProject({data}: {data: ProjectDTO}) { 
    if (data.name == null){
        data.name = "New Project"
    }
    const ret_result = await createProject(data);
    return redirect(`/project/${ret_result.id}`);
}

async function actionUpdateProject({data}: {data: ProjectDTO}){
    await updateProject(data.id, data);
    return redirect(`/project/${data.id}`)
}

async function actionDeleteProject({data}: {data: ProjectDTO}){
    await deleteProject(data.id)
    return redirect("/");
}

export async function actionProject({request}: {request: Request}){
    const formData = await request.formData();
    const data = Object.fromEntries(formData) as unknown as ProjectDTO;
    switch (request.method){
        case "PUT":
            return await actionUpdateProject({data})
        case "POST":
            return await actionCreateProject({data})
        case "DELETE":
            return await actionDeleteProject({data})
    }

}   