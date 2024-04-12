/* eslint-disable react/prop-types */
import {Form} from "react-router-dom"
import PromptForm from "./PromptForm";


export function PromptPanel({ data }) {
    const history = data.requests
    return (
        <div
            id="prompt-panel"
            className="w-1/2 bg-[#e4e4e4] rounded-md p-4 overflow-auto max-h-screen flex flex-col justify-between"
        >
            {/* Title and history log containers */}
            <div>
                <div className="font-sans font-medium text-center text-xl leading-8 text-[#5E5E5E]">
                    Prompt
                </div>

                {/* Previous Prompts */}
                {
                    history && history.map((item) => (
                        <div key={item.id}>
                            {item.input_image ?
                                <div
                                    className="max-h-36 max-w-36"
                                >
                                    <img src={item.input_image} />
                                </div>
                                :
                                <></>
                            }
                            <div>
                                <p className="text-black px-4 bg-transparent py-2" >
                                    {item.prompt}
                                </p>
                                <Form method="delete" action={`${item.id}`}>
                                    <button type="submit">Delete</button>
                                </Form>
                            </div>
                        </div>
                    ))
                }

                
            </div>
            {/* Prompt Form */}
            <PromptForm initPrompt={""} projectId={data.id}/>
        </div>
    )
}