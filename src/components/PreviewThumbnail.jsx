import { forwardRef } from "react"

const PreviewThumbnail = forwardRef(({ isEditing = true, thumbnail, children, ...rest }, ref) => {
    let result = thumbnail ?
        <div className={rest.className} ref={ref} >
            <div className="relative">
                <img src={thumbnail} alt="thumbnail" />
                {isEditing ? children : <></>}
            </div>
        </div > :
        <></>
    return result
});

PreviewThumbnail.displayName = "PreviewThumbnail"

export default PreviewThumbnail