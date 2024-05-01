import React from "react";
import { TextArea } from "@ailiyah-ui/text";
import { PromptDialog } from "./dialog";
import * as Button from "@ailiyah-ui/button";

const PromptTextArea: React.FC<{
  initPrompt: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}> = ({ initPrompt, onClick = () => {} }) => {
  const [prompt, setPrompt] = React.useState<string>(() => initPrompt);
  const isDisabled = prompt === "" || prompt === initPrompt;
  return (
    <TextArea.Root themeName="TextAreaRoot">
      <TextArea.Content themeName="TextAreaContent">
        <TextArea.TextArea
          name="prompt"
          placeholder={prompt}
          value={prompt}
          onChange={(e) => setPrompt(e.currentTarget.value)}
          themeName="TextAreaTextArea"
        />
        <TextArea.Component twTopRightBottomLeft="bottom-1 right-4">
          <PromptDialog />
          <Button.SubmitButton
            disabled={isDisabled}
            onClick={onClick}
            themeName="TextAreaSubmitButton"
          />
        </TextArea.Component>
      </TextArea.Content>
    </TextArea.Root>
  );
};

export { PromptTextArea };
