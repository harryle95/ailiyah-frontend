import React from "react";
import { FormDataType } from "@ailiyah-ui/prompt";
import { styled } from "@ailiyah-ui/factory";
import { Prompt } from "@ailiyah-ui/prompt";
import { Form as _Form, useSubmit } from "react-router-dom";
import { submitForm } from "./helpers";

const Form = styled(_Form);

const DisplayPromptForm: React.FC<{
  initialFormData: FormDataType;
}> = ({ initialFormData }) => {
  return (
    <styled.div themeName="PromptForm">
      <Prompt.Root
        formData={initialFormData}
        setFormData={() => {}}
        editing={false}
      ></Prompt.Root>
    </styled.div>
  );
};

const PromptForm: React.FC<{
  initialFormData?: FormDataType;
  setOpen?: Function;
  method?: "POST" | "post" | "PUT" | "put";
  requestId?: string;
}> = ({
  initialFormData = undefined,
  setOpen = undefined,
  method = "POST",
  requestId = undefined,
}) => {
  const submit = useSubmit();
  const [formData, setFormData] = React.useState<FormDataType>(
    initialFormData ? initialFormData : {}
  );

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (setOpen) {
      setOpen(false);
    }
    submitForm(submit, formData, initialFormData, method, requestId);
  };

  return (
    <Form onSubmit={onSubmitHandler} themeName="PromptForm">
      <Prompt.Root formData={formData} setFormData={setFormData}>
        <Prompt.ButtonGroup>
          <Prompt.AddButton>Add Element</Prompt.AddButton>
          <Prompt.Button type="submit">Submit</Prompt.Button>
        </Prompt.ButtonGroup>
      </Prompt.Root>
    </Form>
  );
};

export { PromptForm, DisplayPromptForm };
