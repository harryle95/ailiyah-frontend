import { forwardRef } from "react";

const SButton = forwardRef(
  (
    {
      buttonElement = "button",
      imgSrc,
      imgClassName = "hover:opacity-50",
      ...rest
    },
    ref
  ) => {
    const Element = buttonElement;
    return (
      <Element {...rest} ref={ref}>
        <img src={imgSrc} alt="button" className={imgClassName} />
      </Element>
    );
  }
);

SButton.displayName = "SButton";
export default SButton;
