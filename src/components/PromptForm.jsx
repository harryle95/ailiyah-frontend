import { Form, useSubmit } from "react-router-dom";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function PromptForm({ initImage}){ //, initPrompt, projectId }) {
    const [thumbnail, setThumbnail] = useState(initImage);
    const [formData, setFormData] = useState({file:null}) // project_id: projectId, prompt: initPrompt, file: null});
    const submit = useSubmit()

    return (
        <Form
            className="flex flex-col gap-y-4 px-4 overflow-auto max-h-[300px]"
        >
            {/* Thumbnail */}
            {thumbnail ?
                <div
                    className="max-h-36 max-w-36"
                >
                    <img src={thumbnail} />
                </div> : <></>
            }

            {/* Prompt */}
            <textarea
                name="prompt"
                className="text-black px-4 w-full bg-transparent py-2 border border-black rounded"
                value={formData.prompt}
                // onChange={e => setFormData({ ...formData, prompt: e.target.value })}
            />
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

            <div className="flex items-center px-4">
                {/* Upload Button */}
                <label
                    className="w-1/3 h-12 mx-auto min-h-12 flex justify-center items-center rounded-lg border-solid border-2 bg-slate-500 hover:bg-slate-600"
                    htmlFor="file-upload">
                    Upload Image
                </label>

                {/* Remove Image Button */}
                <div className="w-1/3 h-12 mx-auto min-h-12 flex justify-center items-center rounded-lg border-solid border-2 bg-slate-500 hover:bg-slate-600">
                    <button
                        type="button"
                        // Remove Preview image and set files to null
                        onClick={() => {
                            setThumbnail(null);
                            setFormData({ ...formData, file: null })
                        }}
                    >Remove Image</button>
                </div>

                {/* Generate Button */}
                <div className="w-1/3 h-12 mx-auto min-h-12 flex justify-center items-center rounded-lg border-solid border-2 bg-slate-500 hover:bg-slate-600">
                    <button
                        type="submit"
                        onClick={() => {
                            let submitFormData = new FormData();
                            for (const key in formData) {
                                submitFormData.append(key, formData[key])
                            }

                            console.log(typeof submitFormData.get("file"))
                            submit(submitFormData, {
                                method: "POST",
                                action: "generate",
                                encType: "multipart/form-data"
                            })
                        }
                        }
                    >
                        Generate
                    </button>
                </div>
            </div>
        </Form>
    )
}