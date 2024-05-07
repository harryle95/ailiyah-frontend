import * as NavBar from "../components/navbar/NavBar";
import { Outlet } from "react-router-dom";
import React from "react";

export function Root() {
  return (
    <div className="flex">
      <NavBar.Root />
      <Outlet />
    </div>
  );
}
