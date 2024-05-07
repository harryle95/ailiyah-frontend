import React from "react";
import { TextArea } from "@ailiyah-ui/text";
import { PromptDialog } from "./dialog";
import * as Button from "@ailiyah-ui/button";
import { Form, useSubmit } from "react-router-dom";
import { submitPrompt } from "./helpers";

const PromptTextArea: React.FC<{}> = () => {
  const submit = useSubmit();
  const [prompt, setPrompt] = React.useState<string>("");
  return (
    <TextArea.Root themeName="TextAreaRoot">
      <TextArea.Content themeName="TextAreaContent">
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
        <TextArea.Component twTopRightBottomLeft="bottom-1 right-4">
          <PromptDialog />
          <Button.SubmitButton
            form="promptForm"
            type="submit"
            themeName="TextAreaSubmitButton"
          />
        </TextArea.Component>
      </TextArea.Content>
    </TextArea.Root>
  );
};

export { PromptTextArea };
