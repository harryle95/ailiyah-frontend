import { getProjectByID, getProjects, ProjectDTO, ProjectLiteDTO, createProject, updateProject, deleteProject } from "./project";
import { redirect } from "react-router-dom";

type ProjectParam = {
    projectId: string 
}

export async function loaderProject(): Promise<Array<ProjectLiteDTO>> {
    const projects = await getProjects();
    return projects;
}

export async function loaderProjectId({ params }): Promise<ProjectDTO> {
    const project = await getProjectByID(params.projectId);
    return project;
}

async function actionCreateProject({data}: {data: ProjectLiteDTO}) { 
    if (data.name == null){
        data.name = "New Project"
    }
    const ret_result = await createProject(data);
    return redirect(`/project/${ret_result.id}`);
}

async function actionUpdateProject({data}: {data: ProjectLiteDTO}){
    await updateProject(data.id, data);
    return redirect(`/project/${data.id}`)
}

async function actionDeleteProject({data}: {data: ProjectLiteDTO}){
    await deleteProject(data.id)
    return redirect("/");
}

export async function actionProject({request}: {request: Request}){
    const formData = await request.formData();
    const data = Object.fromEntries(formData) as unknown as ProjectLiteDTO;
    switch (request.method){
        case "PUT":
            return await actionUpdateProject({data})
        case "POST":
            return await actionCreateProject({data})
        case "DELETE":
            return await actionDeleteProject({data})
    }

}   