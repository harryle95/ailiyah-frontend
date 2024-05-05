import React from "react";
import { FormDataType, StateType } from "@ailiyah-ui/prompt";
import { styled } from "@ailiyah-ui/factory";
import { Prompt } from "@ailiyah-ui/prompt";

const PromptForm: React.FC<{
  initialFormData?: FormDataType;
  editing: boolean;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
}> = ({
  initialFormData = undefined,
  editing = true,
  onSubmit = (e) => {
    e.preventDefault();
    alert("Submitting Form");
  },
}) => {
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

  const onSubmitHandler = (e) => {
    e.preventDefault();
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
    console.log(submitFormData)
    for (const pair of submitFormData.entries()) {
      console.log(pair[0]+ ', ' + pair[1]); 
  }
    alert("Submit Form");
  };

  return (
    <styled.form onSubmit={onSubmitHandler} themeName="PromptForm">
      <Prompt.Root
        editingStates={editingStates}
        setEditingStates={setEditingStates}
        formData={formData}
        setFormData={setFormData}
      >
        <Prompt.ButtonGroup />
      </Prompt.Root>
    </styled.form>
  );
};

export { PromptForm };
