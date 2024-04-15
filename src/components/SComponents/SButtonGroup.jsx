import { forwardRef } from "react";

const SButtonGroup = forwardRef(
  ({ children, className = "flex items-center gap-y-4", ...rest }, ref) => {
    let classNameValue = `c-button-group ${className}`;
    return (
      <div className={classNameValue} ref={ref} {...rest}>
        {children}
      </div>
    );
  }
);

SButtonGroup.displayName = "SButtonGroup";
export default SButtonGroup;
