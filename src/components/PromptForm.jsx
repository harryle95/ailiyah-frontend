import { Form, useSubmit } from "react-router-dom";
import { useState } from "react";
import uploadIcon from "../resources/upload.png"
import submitIcon from "../resources/submit.png"


// eslint-disable-next-line react/prop-types
export default function PromptForm({ initImage, initPrompt, projectId }) {
    const [thumbnail, setThumbnail] = useState(initImage);
    const [formData, setFormData] = useState({ project_id: projectId, prompt: initPrompt, file: null });
    const submit = useSubmit()

    // Handler 
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
        document.getElementById("file-upload").value = null // clear file-upload files for onChange behavior
    }


    return (
        <Form
            className="flex flex-col gap-y-4 px-4 max-h-[300px]"
            method="POST"
            onSubmit={onSubmitHandler}
        >
            <input type="text" className="hidden" name="project_id" value={projectId} readOnly />
            {/* Thumbnail */}
            {thumbnail ?
                <div
                    className="max-h-36 max-w-36"
                >
                    <img src={thumbnail} />
                </div> : <></>
            }

            {/* Prompt */}
            <div className="relative">
                <textarea
                    name="prompt"
                    className="text-black px-4 w-full bg-transparent py-2 border border-black rounded-lg max-h-52 resize-none"
                    value={formData.prompt}
                    onChange={e => setFormData({ ...formData, prompt: e.target.value })}
                />
                <div className="flex absolute bottom-2 right-2">
                    <div className="w-7">
                        <label htmlFor="file-upload">
                            <img src={uploadIcon} alt="" />
                        </label>

                    </div>
                    {formData.prompt === "" ?
                        <div className="w-7">
                            <button type="submit" disabled>
                                <img src={submitIcon} alt="" />
                            </button>
                        </div> :
                        <div className="w-7">
                            <button type="submit">
                                <img src={submitIcon} alt="" />
                            </button>
                        </div>
                    }
                </div>
            </div>

            <input
                className="hidden"
                type="file"
                id="file-upload"
                accept="image/*"
                name="input_image"
                onChange={(e) => {
                    setFormData({ ...formData, file: e.target.files[0] })
                    setThumbnail(URL.createObjectURL(e.target.files[0]))
                }
                }
            />
        </Form >
    )
}