import { forwardRef, useRef } from "react";
import upIcon from "../assets/up.svg";
import downIcon from "../assets/down.svg";
import ToggleButton from "./ToggleButton";

const ToggleListTitle = forwardRef(
  (
    {
      isVisible,
      setVisible,
      data,
      className = "flex items-center justify-between",
      ...rest
    },
    ref
  ) => {
    const onClick = () => setVisible(!isVisible);
    const title = isVisible ? "Collapse" : "Expand";
    let buttonRef = useRef(null);

    const ExpandCollapseButton = (
      <ToggleButton
        ref={buttonRef}
        state={isVisible}
        onImg={upIcon}
        offImg={downIcon}
        buttonProps={{
          className: "w-5 h-5",
          title: title,
          onClick: onClick,
        }}
        className="c-toggle-list-button"
      />
    );

    return (
      <div className={"c-toggle-list-title " + className} ref={ref} {...rest}>
        <p
          className="text-xl font-medium"
          onClick={() => buttonRef.current?.click()}
          style={{ cursor: "pointer" }}
        >
          {data}
        </p>
        {ExpandCollapseButton}
      </div>
    );
  }
);

ToggleListTitle.displayName = "ToggleListTitle";
export default ToggleListTitle;
