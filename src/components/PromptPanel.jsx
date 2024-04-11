/* eslint-disable react/prop-types */
import { useState } from "react"
import { Form } from "react-router-dom";


export function PromptPanel({ history }) {
    const [image, setImage] = useState();
    return (
        <div
            id="prompt-panel"
            className="w-1/2 bg-[#e4e4e4] rounded-md p-4 flex flex-col gap-y-4 overflow-auto max-h-screen"
        >
            <div className="font-sans font-medium text-center text-xl leading-8 text-[#5E5E5E]">
                Prompt
            </div>


            {/* Previous Prompts */}
            {
                history && history.map((item) => (
                    <div key={item.id}>
                        {item.input_image ? <div className="max-h-[256] overflow-auto"><img src={item.input_image} className="w-full" /></div> : <></>}
                        <p className="text-black px-4 w-full bg-transparent py-2" >
                            {item.prompt}
                        </p>
                    </div>
                ))
            }


            {/* Prompt and input image  */}
            <Form
                method="POST"
                action="generate"
                className="flex flex-col gap-y-4 px-4 overflow-auto max-h-[300px]"
                id="prompt_input"
            >
                {image ? <div className="max-h-[256] overflow-auto"><img src={image} className="w-full" /></div> : <></>}
                <textarea name="prompt" className="text-black px-4 w-full bg-transparent py-2 border border-black rounded"></textarea>
                <input
                    className="hidden"
                    type="file"
                    id="file-upload"
                    accept="image/*"
                    name="input_image"
                    onChange={(e) => { setImage(URL.createObjectURL(e.target.files[0])) }}
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
                            // Remove Preview image and set files to null
                            onClick={() => {
                                setImage(null);
                                document.getElementById("file-upload").value = ''
                            }}
                        >Remove Image</button>
                    </div>

                    {/* Generate Button */}
                    <div className="w-1/3 h-12 mx-auto min-h-12 flex justify-center items-center rounded-lg border-solid border-2 bg-slate-500 hover:bg-slate-600">
                        <button type="submit">Generate</button>
                    </div>
                </div>
            </Form>

        </div>
    )
}