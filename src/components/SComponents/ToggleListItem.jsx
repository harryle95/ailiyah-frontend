import { forwardRef } from "react";
import SButton from "./SButton";

const ToggleButton = forwardRef(
  ({ state, className, onImg, offImg, buttonProps, ...rest }, ref) => {
    // Button when state is on
    const onButton = <SButton ref={ref} imgSrc={onImg} {...buttonProps} />;

    // Button when state is off
    const offButton = <SButton ref={ref} imgSrc={offImg} {...buttonProps} />;
    let classNameValue = className
      ? `c-toggle-button ${className}`
      : "c-toggle-button";
    return (
      <div className={classNameValue} {...rest}>
        {state ? onButton : offButton}
      </div>
    );
  }
);

ToggleButton.displayName = "ToggleButton";
export default ToggleButton;
