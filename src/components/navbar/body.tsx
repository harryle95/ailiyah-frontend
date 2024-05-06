import React from "react";
import { useSubmit, useLocation, Link, Form } from "react-router-dom";
import { ProjectDTO } from "../../services/project";
import { styled } from "@ailiyah-ui/factory";
import { TextBox } from "@ailiyah-ui/text";
import { TextInputUpdateFormProps } from "./body.type";
import { Input } from "@ailiyah-ui/input";
import * as Button from "@ailiyah-ui/button";

const TextInputUpdateForm: React.FC<TextInputUpdateFormProps> = (props) => {
  const { projectName, setProjectName, id, setEditingState } = props;
  const [name, setName] = React.useState(projectName);
  const submit = useSubmit();

  const onSubmit = (
    e:
      | React.KeyboardEvent<HTMLInputElement>
      | React.FocusEvent<HTMLInputElement>
      | React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setEditingState(false);
    if (name !== projectName) {
      setProjectName(name);
      submit(e.currentTarget.form, { method: "PUT" });
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <input name="id" value={id} className="hidden" readOnly />
      <Input
        themeName="TextBoxInput"
        name="name"
        type="text"
        key={id}
        value={name}
        placeholder={name}
        autoFocus
        onEnterDown={onSubmit}
        onChange={(e) => setName(e.currentTarget.value)}
        onEscDown={() => {
          setName(projectName);
          setEditingState(false);
        }}
        onBlur={onSubmit}
      />
    </Form>
  );
};

const TextInputItem: React.FC<ProjectDTO> = (props) => {
  const submit = useSubmit();
  const { id, name, ...rest } = props;
  const projectURL = `/project/${id}`;
  // States
  const [projectName, setName] = React.useState(name);
  const [editingState, setEditingState] = React.useState(false);

  // Chek if current link is active and set button to appear/disappear
  let location = useLocation();
  let activeState = location.pathname.startsWith(projectURL);

  return (
    <TextBox.Root
      themeName="TextBoxRoot"
      initialState={activeState || editingState}
      hoverSetActive={true}
      {...rest}
    >
      <styled.div
        twPosition="relative"
        twWidth="w-full"
        twBorderRadius="rounded-md"
      >
        {!editingState ? (
          <>
            <TextBox.Content>
              <Link to={projectURL}>{projectName}</Link>
            </TextBox.Content>

            <TextBox.Component
              compLocation="right"
              themeName="TextBoxMask"
            ></TextBox.Component>

            <TextBox.Component compLocation="right" themeName="TextBoxButtons">
              <styled.div twFlex="flex" twPadding="py-1" twGap="gap-x-1">
                <Button.EditButton
                  tooltipContent="Edit"
                  onClick={() => setEditingState(!editingState)}
                />
                <Button.DeleteAlertButton
                  tooltipContent="Delete"
                  dialogTitle="Delete Project"
                  dialogDescription="This action is PERMANENT. Are you sure you want to delete this project and all its content?"
                  dialogCancelButtonName="Cancel"
                  dialogSubmitButtonName="Delete"
                  dialogOnCancel={() => {}}
                  dialogOnSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData();
                    formData.append("id", id);
                    submit(formData, { method: "DELETE" });
                  }}
                />
              </styled.div>
            </TextBox.Component>
          </>
        ) : (
          <TextInputUpdateForm
            id={id}
            projectName={projectName}
            setProjectName={setName}
            setEditingState={setEditingState}
          />
        )}
      </styled.div>
    </TextBox.Root>
  );
};

export { TextInputItem };
