import React from "react";
import { styled } from "@ailiyah-ui/factory";
import { Form } from "react-router-dom";

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
      <Form method="POST">
        <button type="submit">
          <div className="flex flex-row gap-2">
            <div>New Project</div>
          </div>
        </button>
      </Form>
    </styled.div>
  );
};

export { ProfileButton, NewProjectButton };
