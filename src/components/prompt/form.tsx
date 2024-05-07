import React from "react";
import { FormDataType } from "@ailiyah-ui/prompt";
import { styled } from "@ailiyah-ui/factory";
import { Prompt } from "@ailiyah-ui/prompt";
import { Form as _Form, useSubmit } from "react-router-dom";
import { submitForm } from "./helpers";

const Form = styled(_Form);

const PromptForm: React.FC<{
  initialFormData?: FormDataType;
  editing: boolean;
  setOpen?: Function;
}> = ({ setOpen = undefined, initialFormData = undefined, editing = true }) => {
  const submit = useSubmit();

  const [formData, setFormData] = React.useState<FormDataType>(() => {
    return initialFormData ? initialFormData : {};
  });

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (setOpen) {
      setOpen(false);
    }
    submitForm(submit, formData, initialFormData);
  };

  return (
    <Form onSubmit={onSubmitHandler} themeName="PromptForm">
      <Prompt.Root
        editing={editing}
        formData={formData}
        setFormData={setFormData}
      >
        {editing && (
          <Prompt.ButtonGroup>
            <Prompt.AddButton>Add Element</Prompt.AddButton>
            <Prompt.Button type="submit">Submit</Prompt.Button>
          </Prompt.ButtonGroup>
        )}
      </Prompt.Root>
    </Form>
  );
};

export { PromptForm };
