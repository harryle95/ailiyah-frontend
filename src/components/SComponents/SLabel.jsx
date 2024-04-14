import { forwardRef, useState } from "react";

const SLabel = forwardRef(({imageClass, normalIcon, hoverIcon, ...rest}, ref) => {
    const [isHovered, setIsHovered] = useState(false);
    const enterHandler = () => setIsHovered(true);
    const leaveHandler = () => setIsHovered(false);
    let labelProps = { ...rest, onMouseOver: enterHandler, onMouseLeave: leaveHandler }
    return (
        <label {...labelProps} ref={ref}
        >
            {isHovered ?
                <img className={imageClass} src={hoverIcon} />
                :
                <img className={imageClass} src={normalIcon} />
            }
        </label>
    )
});

SLabel.displayName = "SLabel"

export default SLabel;