/* eslint-disable react/prop-types */
import { Form } from "react-router-dom"
import PromptForm from "./PromptForm";
import { IMAGE_URL } from "../services/image";

export function PromptPanel({ data }) {
    const history = data.requests
    return (
        // TODO: fix delete button hover
        <div
            id="prompt-panel"
            className="w-1/2 bg-[#e4e4e4] rounded-md p-4 h-full flex flex-col justify-between gap-y-4"
        >
            {/* Prompt title */}
            <div className="font-sans font-medium text-center text-xl leading-8 text-[#5E5E5E]">
                Prompt
            </div>

            {/* Previous Prompts */}
            <div className="flex flex-col overflow-auto gap-y-4">
                {
                    history && history.map((item) => (
                        <div key={item.id}>
                            {item.input_image ?
                                <div
                                    className="max-h-36 max-w-36"
                                >
                                    <img src={`${IMAGE_URL}/${item.input_image}`} />
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
            <div>
                <PromptForm initPrompt={""} projectId={data.id} key={data.id} />
            </div>

        </div>
    )
}