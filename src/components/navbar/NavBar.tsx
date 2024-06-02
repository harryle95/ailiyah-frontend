import * as React from "react";

import { useLoaderData } from "react-router-dom";

import { Themed as NavBar } from "@ailiyah-ui/navbar";
import { IconPanel } from "./header";
import { NewProjectButton, ProfileButton } from "./footer";
import { TextInputItem } from "./body";
import { ProjectDTO } from "../../services/project";

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
              <TextInputItem key={id} id={id} name={name} />
            ))
          ) : (
            <></>
          )}
        </NavBar.Body>
        <NavBar.Footer twPadding="py-3" twFlex="flex flex-col" twGap="gap-y-3">
          <NewProjectButton />
          {/* <ProfileButton /> */}
        </NavBar.Footer>
      </NavBar.Content>
    </NavBar.Root>
  );
};

export { Root };
