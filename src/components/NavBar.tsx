import * as React from "react";
import * as Text from "./primitives/TextBox";
import * as Button from "./built/Buttons";
import * as Form from "./primitives/Form";
import {
  useLocation,
  Link,
  useSubmit,
  useLoaderData,
  Form as RouterForm,
} from "react-router-dom";
import { ProjectDTO } from "../services/project";
import { styled } from "./context/factory";
// @ts-ignore
import logo from "../resources/logo.png";
import * as NavBar from "./built/NavBar";

const IconPanel: React.FC<{}> = () => {
  return (
    <div className="flex items-center gap-4">
      <img className="w-14 h-14" src={logo} alt="logo" />
      <div className="font-sans font-bold text-xl">AILYAH</div>
    </div>
  );
};

const ProfileButton: React.FC<{}> = () => {
  return (
    <styled.div themeName="NavBarButtons">
      <a href="#" className="flex flex-row gap-2">
        <div>My Profile</div>
      </a>
    </styled.div>
  );
};

const NewProjectButton: React.FC<{}> = () => {
  return (
    <styled.div themeName="NavBarButtons">
      <Form.Root method="POST">
        <button type="submit">
          <div className="flex flex-row gap-2">
            <div>New Project</div>
          </div>
        </button>
      </Form.Root>
    </styled.div>
  );
};

const Root: React.FC<{}> = () => {
  const projects = useLoaderData() as unknown as Array<ProjectDTO>;
  return (
    <NavBar.Root>
      <NavBar.Trigger />
      <NavBar.Content>
        <NavBar.Header>
          <IconPanel />
        </NavBar.Header>
        <NavBar.Body twOther="scrollbar-thin">
          {projects ? (
            projects.map(({ id, name }) => (
              <TextBoxItem key={id} id={id} name={name} />
            ))
          ) : (
            <></>
          )}
        </NavBar.Body>
        <NavBar.Footer twPadding="py-3" twFlex="flex flex-col" twGap="gap-y-3">
          <NewProjectButton />
          <ProfileButton />
        </NavBar.Footer>
      </NavBar.Content>
    </NavBar.Root>
  );
};

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
  const submit = useSubmit();

  const onSubmit = (e) => {
    e.preventDefault();
    setEditingState(false);
    if (name !== projectName) {
      setProjectName(name);
      submit(e.currentTarget.form, { method: "PUT" });
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

const TextBoxItem: React.FC<ProjectDTO> = (props) => {
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
      activeState={activeState || editingState}
      hoverSetActive={true}
      {...rest}
    >
      <styled.div twPosition="relative" twWidth="w-full" twHeight="h-full">
        <RouterForm method="DELETE" id={`delete-${id}`}>
          <input name="id" value={id} className="hidden" readOnly />
        </RouterForm>
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
                <Button.DeleteButton
                  form={`delete-${id}`}
                  tooltipContent="Delete"
                />
              </Button.InvisibleButtonGroup>
            </Text.Component>
          </>
        ) : (
          <TextBoxUpdateForm
            id={id}
            projectName={projectName}
            setProjectName={setName}
            setEditingState={setEditingState}
          />
        )}
      </styled.div>
    </Text.Root>
  );
};

export { Root };
