import { forwardRef, useState } from "react";

const SButton = forwardRef(({imageClass, normalIcon, hoverIcon, ...rest}, ref) => {
    const [isHovered, setIsHovered] = useState(false);
    const enterHandler = () => setIsHovered(true);
    const leaveHandler = () => setIsHovered(false);
    let buttonProps = { ...rest, onMouseOver: enterHandler, onMouseLeave: leaveHandler }
    return (
        <button {...buttonProps} ref={ref}
        >
            {isHovered ?
                <img className={imageClass} src={hoverIcon} />
                :
                <img className={imageClass} src={normalIcon} />
            }
        </button>
    )
});

SButton.displayName = "SButton"

export default SButton;