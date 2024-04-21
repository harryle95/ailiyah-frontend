import * as React from "react";
import * as Text from "./primitives/TextBox";
import * as Button from "./built/Buttons";
import * as Form from "./primitives/Form";
import { useLocation, Link } from "react-router-dom";
import { ProjectDTO } from "../services/project";
import { styled } from "./context/factory";

interface TextBoxUpdateFormProps
  extends React.ComponentPropsWithoutRef<"form"> {
  id: string;
  projectName: string;
  setProjectName: Function;
  setEditingState: Function;
}

const TextBoxUpdateForm: React.FC<TextBoxUpdateFormProps> = (props) => {
  const { projectName, setProjectName, id, setEditingState } = props;
  const [name, setName] = React.useState(projectName);
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting Form Event received");
    setEditingState(false);
    if (name === projectName) {
      console.log("Name was not changed");
    } else {
      console.log("Name was changed -> Submit");
      setProjectName(name);
    }
  };

  return (
    <Form.Root onSubmit={onSubmit}>
      <input name="id" value={id} className="hidden" readOnly />
      <Form.Input
        themeName="NavBarFormInput"
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
    </Form.Root>
  );
};

export const NavBarTextBoxItem: React.FC<ProjectDTO> = (props) => {
  console.log(props);
  const { id, name, ...rest } = props;
  const projectURL = `/project/${id}`;
  // States
  const [projectName, setName] = React.useState(name);
  const [editingState, setEditingState] = React.useState(false);

  // Chek if current link is active and set button to appear/disappear
  let location = useLocation();
  let activeState = location.pathname === projectURL;

  return (
    <Text.Root
      themeName="NavBarTextBoxRoot"
      //   activeState={true}
      activeState={activeState || editingState}
      hoverSetActive={true}
      {...rest}
    >
      <styled.div twPosition="relative" twWidth="w-full" twHeight="h-full">
        {!editingState ? (
          <>
            <Text.Content>
              <Link to={projectURL}>{projectName}</Link>
            </Text.Content>

            <Text.Component
              compLocation="right"
              themeName="NavBarTextBoxMask"
            ></Text.Component>

            <Text.Component
              compLocation="right"
              themeName="NavBarInvisibleTextBoxButtons"
            >
              <Button.InvisibleButtonGroup themeName="InvisibleButtonsLayout">
                <Button.EditButton
                  tooltipContent="Edit"
                  onClick={() => setEditingState(!editingState)}
                />
                <Button.DeleteButton tooltipContent="Delete" />
              </Button.InvisibleButtonGroup>
            </Text.Component>
          </>
        ) : (
          <TextBoxUpdateForm
            id="#"
            projectName={projectName}
            setProjectName={setName}
            setEditingState={setEditingState}
          />
        )}
      </styled.div>
    </Text.Root>
  );
};
