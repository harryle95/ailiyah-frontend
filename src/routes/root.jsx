import { SideBar } from "../components/SideBar";
import { Outlet } from "react-router-dom";


export default function Root() {
    return (
        <div className="flex">
            <SideBar />
            <div className="flex-grow-1 w-full relative">
                <Outlet />
            </div>

        </div>
    );
}