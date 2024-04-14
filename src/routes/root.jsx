import { useState } from "react";
import { SideBar } from "../components/SideBar";
import { Outlet } from "react-router-dom";


export default function Root() {
    const [isVisible, setVisible] = useState(true)
    return (
        <div className="flex">
            <SideBar isVisible={isVisible} />
            <div className="flex-grow-1 w-full relative">
                <div className="absolute left-0 top-1/2" onClick={()=>setVisible(!isVisible)}>
                    Shrink
                </div>
                <Outlet />
            </div>

        </div>
    );
}