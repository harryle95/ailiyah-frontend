import React from "react";
import { TextArea } from "@ailiyah-ui/text";
import { PromptDialog } from "./dialog";
import * as Button from "@ailiyah-ui/button";
import { Form, useSubmit } from "react-router-dom";
import { submitPrompt } from "./helpers";
import { createBox } from "@ailiyah-ui/box";
import { TailwindComponentProps } from "@ailiyah-ui/factory";

const Component = createBox("Component", { twPosition: "absolute" });

const PromptTextArea = React.memo(
  React.forwardRef<HTMLDivElement, TailwindComponentProps<"div">>(
    (props, ref) => {
      const submit = useSubmit();
      const [prompt, setPrompt] = React.useState<string>("");
      return (
        <TextArea.Root {...props} ref={ref}>
          <TextArea.Content>
            <Form
              id="promptForm"
              method="POST"
              encType="multipart/form-data"
              onSubmit={(e) => {
                e.preventDefault();
                submitPrompt(submit, prompt);
              }}
            >
              <TextArea.TextArea
                name="text"
                placeholder={prompt}
                value={prompt}
                onChange={(e) => setPrompt(e.currentTarget.value)}
                themeName="TextAreaTextArea"
                required={true}
              />
            </Form>
            <Component themeName="TextAreaComponent">
              <PromptDialog />
              <Button.SubmitButton
                tooltipContent="Submit"
                form="promptForm"
                type="submit"
              />
            </Component>
          </TextArea.Content>
        </TextArea.Root>
      );
    }
  )
);

export { PromptTextArea };
