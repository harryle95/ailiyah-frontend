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

  return (
    <styled.form onSubmit={onSubmit} themeName="PromptForm">
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
