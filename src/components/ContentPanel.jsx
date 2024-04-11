import { PromptPanel } from "./PromptPanel";
import { useLoaderData, Outlet} from "react-router-dom";

export default function ContentPanel() {
    const data = useLoaderData();
    const history = data.requests;
    return (
        <div className="w-full bg-[#323536] p-5 text-white max-h-full">
            <div className="flex flex-col h-full my-4 gap-y-4">
                <div className="px-10 text-2xl font-medium">
                    {data.name}
                </div>

                <div className="flex h-full my-3 m-4 gap-x-4">
                    <PromptPanel history={history}/>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    )
}