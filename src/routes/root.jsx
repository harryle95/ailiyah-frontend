import * as NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div className="flex">
      <NavBar.Root />
      <div className="flex-grow-1 w-full relative">
        <Outlet />
      </div>
    </div>
  );
}
