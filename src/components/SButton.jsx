/* eslint-disable react/prop-types */

import { useState } from "react";

export default function SButton({
    autoFocus=false,
    disabled=false,
    form,
    name,
    type,
    onClick,
    imageClass,
    normalIcon,
    hoverIcon,
}) {
    const [isHovered, setIsHovered] = useState(false);
    const enterHandler = () => setIsHovered(true);
    const leaveHandler = () => setIsHovered(false);

    return (
        <button
            autoFocus={autoFocus}
            disabled={disabled}
            name={name}
            form={form}
            type={type}
            onClick={onClick}
            onMouseEnter={enterHandler}
            onMouseLeave={leaveHandler}
        >
            {isHovered ?
                <img className={imageClass} src={hoverIcon} />
                :
                <img className={imageClass} src={normalIcon} />
            }
        </button>
    )
}