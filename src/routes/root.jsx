import { useState } from "react";
import { SideBar } from "../components/SideBar";
import { Outlet } from "react-router-dom";
import SButton from "../components/SComponents/SButton";
import editIcon from "../resources/edit.png";
import editHoveredIcon from "../resources/edit_hover.png";

export default function Root() {
    const [isVisible, setVisible] = useState(true)
    return (
        <div className="flex">
            <SideBar isVisible={isVisible} />
            <div className="flex-grow-1 w-full relative">
                <SButton
                    className="absolute left-0 top-1/2 z-40"
                    imageClass="w-10"
                    onClick={()=>setVisible(!isVisible)}
                    normalIcon={editIcon}
                    hoverIcon={editHoveredIcon}
                />
                <Outlet />
            </div>

        </div>
    );
}