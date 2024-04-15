import { forwardRef, useState } from "react";
import expandIcon from "../assets/expand.svg";
import collapseIcon from "../assets/collapse.svg";
import ToggleButton from "./ToggleButton";

const NavBar = forwardRef(({ children, ...rest }, ref) => {
  const [isVisible, setIsVisibe] = useState(true);
  const [width, setWidth] = useState("260px");
  const title = isVisible ? "Collapse" : "Expand";

  const onClick = () => {
    isVisible ? setWidth("0px") : setWidth("260px");
    setIsVisibe(!isVisible);
  };

  // Expand and Collapse Button
  const ExpandCollapseButton = (
    <ToggleButton
      className="w-fit h-fit absolute left-0 top-1/2"
      state={isVisible}
      buttonProps={{
        className: "w-4 h-4",
        onClick: onClick,
        title: title,
      }}
      onImg={collapseIcon}
      offImg={expandIcon}
    />
  );

  return (
    <div {...rest} ref={ref}>
      <div
        className="c-nav-bar-content h-full overflow-auto bg-gray-200"
        style={{ width: width }}
      >
        {children}
      </div>
      <div className="c-nav-bar-button h-full w-5 relative bg-gray-100 rounded-r-md">
        {ExpandCollapseButton}
      </div>
    </div>
  );
});

NavBar.displayName = "NavBar";

export default NavBar;
