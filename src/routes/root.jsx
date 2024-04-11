import { SideBar } from "../components/SideBar";
import {Outlet} from "react-router-dom";


export default function Root() {
    return (
        <div className="flex">
            <SideBar/>
            <Outlet></Outlet>
        </div>
    );
}