import { Form, useSubmit } from "react-router-dom";
import { useState, useRef } from "react";
import deleteIcon from "../resources/trash.svg";
import editIcon from "../resources/pencil-square.svg";
import SButton from "./SComponents/SButton";

import uploadIcon from "../resources/plus.svg";
import submitIcon from "../resources/arrow-up.svg";
import SButtonGroup from "./SComponents/SButtonGroup";
import PreviewThumbnail from "./PreviewThumbnail";


export default function PromptForm({ initImage, initPrompt, projectId }) {
    const [thumbnail, setThumbnail] = useState(initImage);
    const [formData, setFormData] = useState({ project_id: projectId, prompt: initPrompt, file: null });
    const submit = useSubmit()
    const fileUploadRef = useRef(null);

    // Handler 
    const onFileUploadHandler = (e) => {
        setFormData({ ...formData, file: e.target.files[0] })
        setThumbnail(URL.createObjectURL(e.target.files[0]))
    }

    const onPromptChangeHandler = e => setFormData({ ...formData, prompt: e.target.value })

    const onSubmitHandler = (e) => {
        // Need to prevent default here - i.e. submit the form snce button is inside the form 
        e.preventDefault();
        let submitFormData = new FormData();
        for (const key in formData) {
            submitFormData.append(key, formData[key])
        }
        submit(submitFormData, { encType: "multipart/form-data", method: "POST", action: `/project/${projectId}/create` })
    }

    const onRemoveHandler = () => {
        setThumbnail(null);
        setFormData({ ...formData, file: null })
        fileUploadRef.current.value = null // clear file-upload files for onChange behavior
    }

    // Upload/Submit Buttons
    const UploadButton = <SButton
        buttonElement="label"
        className="w-5"
        htmlFor="file-upload"
        title="Upload Input Image"
        imgSrc={uploadIcon}
    />
    let buttonProps = {
        className: "w-5",
        type: "submit",
        title: "Submit Request",
        imgSrc: submitIcon
    }

    const SubmitButton = formData.prompt === "" ?
        <SButton {...buttonProps} disabled /> :
        <SButton {...buttonProps} />

    const UploadSubmitButtonGroup = (
        <SButtonGroup className="flex absolute bottom-3 right-2 items-center justify-between w-12">
            {UploadButton}
            {SubmitButton}
        </SButtonGroup>
    )

    // Thumbnail edit/remove buttons
    const EditImageButton = <SButton
        type="button"
        className="w-5"
        imgSrc={editIcon}
        title="Upload Input Image"
        onClick={e => { e.preventDefault; console.log("Clicking on edit image button") }}
    />

    const RemoveImageButton = <SButton
        type="button"
        className="w-5"
        imgSrc={deleteIcon}
        title="Remove Input Image"
        onClick={onRemoveHandler}
    />

    const ThumbnailButtonGroup = <SButtonGroup
        className="hidden group-hover:flex absolute top-2 right-2 items-center gap-y-4">
        {EditImageButton}
        {RemoveImageButton}
    </SButtonGroup>

    const Thumbnail = <PreviewThumbnail className="group w-fit h-fit" isEditing={true} thumbnail={thumbnail}>{ThumbnailButtonGroup}</PreviewThumbnail>


    // Prompt area
    const PromptArea = <div className="relative">
        <textarea
            name="prompt"
            className="text-black px-4 w-full bg-transparent py-2 border border-black rounded-lg max-h-52 resize-none"
            value={formData.prompt}
            onChange={onPromptChangeHandler}
        />
        {UploadSubmitButtonGroup}
    </div>



    return (
        <Form
            className="flex flex-col gap-y-4 px-4 max-h-[300px] overflow-auto"
            method="POST"
            onSubmit={onSubmitHandler}
        >
            {Thumbnail}
            {PromptArea}
            {/* Hidden file upload */}
            <input
                className="hidden"
                type="file"
                ref={fileUploadRef}
                id="file-upload"
                accept="image/*"
                name="input_image"
                onChange={onFileUploadHandler}
            />
        </Form >
    )
}