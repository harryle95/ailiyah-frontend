import React from "react";
import { styled } from "@ailiyah-ui/factory";
import { RequestType, ProjectType } from "../type";
import { Outlet, useLoaderData } from "react-router-dom";
import { IMAGE_URL } from "../../services/image";

const Root = styled("div", { themeName: "PanelRoot" });

const Title = styled("h1", { themeName: "PanelTitle" });

const Content = styled("div", { themeName: "PanelContent" });

import { Root as PromptHistory } from "./display";
import { PromptTextArea } from "../prompt";

const PromptPanel: React.FC<{ requestData: Array<RequestType> }> = ({
  requestData,
}) => {
  return (
    <Root themeName="PromptPanelRoot">
      <Title themeName="PromptPanelTitle">Prompt</Title>
      <Content themeName="PromptPanelContent">
        {requestData &&
          requestData.map((requestItem) => (
            <PromptHistory
              project_id={requestItem.project_id}
              requestData={requestItem}
              key={requestItem.id}
            />
          ))}
      </Content>
      <PromptTextArea themeName="PromptPanelTextArea" />
    </Root>
  );
};

const ResultPanel: React.FC<{}> = ({}) => {
  const requestData: RequestType = useLoaderData() as RequestType;

  return (
    <Root themeName="ResultPanelRoot">
      <Title themeName="ResultPanelTitle">Output</Title>
      <Content themeName="ResultPanelContent">
        {requestData.output_image && (
          <img
            className="rounded-md"
            src={`${IMAGE_URL}/${requestData.output_image}`}
            alt="output"
          />
        )}
      </Content>
    </Root>
  );
};

const ContentPanel: React.FC<{}> = () => {
  const projectData = useLoaderData() as unknown as ProjectType;
  return (
    <Root themeName="ContentPanelRoot">
      <Title themeName="ContentPanelTitle">{projectData.name}</Title>
      <Content themeName="ContentPanelContent">
        <PromptPanel requestData={projectData.requests} />
        <Outlet />
      </Content>
    </Root>
  );
};

export { Root, Title, Content, PromptPanel, ResultPanel, ContentPanel };
