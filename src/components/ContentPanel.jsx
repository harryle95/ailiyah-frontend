import { PromptPanel } from "./PromptPanel";
import { useLoaderData, Outlet } from "react-router-dom";

export default function ContentPanel() {
  const data = useLoaderData();

  return (
    <div className="w-full bg-[#323536] text-white h-screen overflow-hidden">
      <div className="p-4 h-full">
        <div className="flex flex-col h-full">
          <div className="text-lg font-medium m-3 mt-0">{data.name}</div>

          <div className="flex overflow-auto h-full">
            <PromptPanel data={data} />
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
