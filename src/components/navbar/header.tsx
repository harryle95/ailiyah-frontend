import React from "react";
import logo from "../../resources/logo.png";

const IconPanel: React.FC<{}> = () => {
  return (
    <div className="flex items-center gap-4">
      <img className="w-14 h-14" src={logo} alt="logo" />
      <div className="font-sans font-bold text-xl">AILYAH</div>
    </div>
  );
};

export { IconPanel };
