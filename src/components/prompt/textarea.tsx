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
    <Form
      method="POST"
      encType="multipart/form-data"
      onSubmit={(e) => {
        e.preventDefault();
        submitPrompt(submit, prompt);
      }}
    >
      <TextArea.Root themeName="TextAreaRoot">
        <TextArea.Content themeName="TextAreaContent">
          <TextArea.TextArea
            name="text"
            placeholder={prompt}
            value={prompt}
            onChange={(e) => setPrompt(e.currentTarget.value)}
            themeName="TextAreaTextArea"
            required={true}
          />
          <TextArea.Component twTopRightBottomLeft="bottom-1 right-4">
            <PromptDialog />
            <Button.SubmitButton
              type="submit"
              themeName="TextAreaSubmitButton"
            />
          </TextArea.Component>
        </TextArea.Content>
      </TextArea.Root>
    </Form>
  );
};

export { PromptTextArea };
