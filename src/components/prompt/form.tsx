import React from "react";
import { FormDataType, StateType } from "@ailiyah-ui/prompt";
import { styled } from "@ailiyah-ui/factory";
import { Prompt } from "@ailiyah-ui/prompt";
import { Form as _Form, useSubmit } from "react-router-dom";

const Form = styled(_Form)

const PromptForm: React.FC<{
  initialFormData?: FormDataType;
  editing: boolean;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
  setOpen?:Function;
}> = ({
  setOpen,
  initialFormData = undefined,
  editing = true,
  onSubmit = (e) => {
    e.preventDefault();
    alert("Submitting Form");
  },
}) => {
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
    const text = new Array();
    const images = new Array();
    const id = new Array();

    for (const pair of Object.entries(formData)){
      let [key, {prompt, thumbnail}] = pair;
      text.push(prompt);
      if (thumbnail){
        images.push(thumbnail)
      }else{
        images.push(new File([""], "empty.jpeg", {type: "image/jpeg"}))
      }
      if (!editing){
        id.push(key)
      }else{
        id.push(null)
      }
    }
    const submitFormData = new FormData();
    submitFormData.append("id", JSON.stringify(id))
    submitFormData.append("text", JSON.stringify(text))
    images.forEach(item => submitFormData.append("images", item))
    submit(submitFormData, {method: "POST", encType: "multipart/form-data", navigate: true} )
    if (setOpen){
      setOpen(false);
    }
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
