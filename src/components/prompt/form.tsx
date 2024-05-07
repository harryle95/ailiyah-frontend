import React from "react";
import { FormDataType, StateType } from "@ailiyah-ui/prompt";
import { styled } from "@ailiyah-ui/factory";
import { Prompt } from "@ailiyah-ui/prompt";
import { Form as _Form, useSubmit } from "react-router-dom";
import { submitForm } from "./helpers";

const Form = styled(_Form);

const PromptForm: React.FC<{
  initialFormData?: FormDataType;
  editing: boolean;
  setOpen?: Function;
}> = ({ setOpen, initialFormData = undefined, editing = true }) => {
  const submit = useSubmit();
  const initState = initialFormData
    ? React.useCallback(() => {
        return Object.keys(initialFormData).reduce(
          (acc: StateType, curr: string) => {
            acc[curr] =
              editing !== undefined && editing !== null ? editing : true;
            return acc;
          },
          {}
        );
      }, [Object.keys(initialFormData)])
    : () => {
        return {};
      };

  const [editingStates, setEditingStates] =
    React.useState<StateType>(initState);

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
        editingStates={editingStates}
        setEditingStates={setEditingStates}
        formData={formData}
        setFormData={setFormData}
      >
        <Prompt.ButtonGroup />
      </Prompt.Root>
    </Form>
  );
};

export { PromptForm };
