import React from "react";
import { PromptType } from "../type";
import { RequestType } from "../type";
import { getImageByID } from "../../services/image";
import { FormDataType } from "@ailiyah-ui/prompt";
import { TailwindComponentProps } from "@ailiyah-ui/factory";
import {
  BaseStateBoxContextValue,
  createBox,
  createStateBox,
  createStateBoxChildren,
} from "@ailiyah-ui/box";
import * as Button from "@ailiyah-ui/button";
import { PromptDialog } from "../prompt";
import { Form, useSubmit } from "react-router-dom";
import { DisplayPromptForm } from "../prompt/form";

const [Content, useContentContext] = createStateBox("Content", undefined, {
  twPosition: "relative",
});

const ShowResultButton: React.FC<{ projectId: string; requestId: string }> =
  React.memo(({ projectId, requestId }) => {
    return (
      <form method="GET" action={`/project/${projectId}/${requestId}`}>
        <Button.RightButton tooltipContent="Show Result" />
      </form>
    );
  });

const DeleteRequestButton: React.FC<{ requestId: string }> = React.memo(
  ({ requestId }) => {
    const submit = useSubmit();
    return (
      <Form method="DELETE">
        <Button.DeleteAlertButton
          dialogTitle="Delete Request"
          dialogDescription="This action is PERMANENT. Are you sure you want to continue?"
          dialogCancelButtonName="Cancel"
          dialogSubmitButtonName="Confirm"
          dialogOnCancel={(e) => {}}
          dialogOnSubmit={(e) => {
            e.preventDefault();
            submit(
              { requestId: requestId },
              {
                method: "DELETE",
              }
            );
          }}
          tooltipContent="Delete"
        />
      </Form>
    );
  }
);

const Component = createStateBoxChildren<"div", BaseStateBoxContextValue>(
  "div",
  "Component",
  useContentContext,
  { twPosition: "absolute" }
);

interface DisplayRootProps extends TailwindComponentProps<"div"> {
  requestData: RequestType;
  project_id: string;
}

const _Root = createBox("_Root");

const Root = React.memo(
  React.forwardRef<HTMLDivElement, DisplayRootProps>((props, ref) => {
    const { children, project_id, requestData, ...rest } = props;
    const prompts = requestData.prompts;
    const [initialFormData, setInitialFormData] =
      React.useState<FormDataType>();

    React.useEffect(() => {
      let ignore = false;
      console.log("Fetch data for id: " + requestData.id);
      const fetchImage = async (prompts: PromptType[]) => {
        let fdata: FormDataType = {};
        for (const prompt of prompts) {
          let imageBlob = prompt.image
            ? await getImageByID(prompt.image)
            : null;
          fdata[prompt.id] = {
            thumbnail: imageBlob
              ? new File([imageBlob], prompt.image!)
              : undefined,
            prompt: prompt.text,
          };
        }
        if (!ignore) {
          setInitialFormData(fdata);
        }
      };
      fetchImage(prompts);
      return () => {
        ignore = true;
      };
    }, [JSON.stringify(prompts)]);

    return (
      <_Root {...rest} ref={ref} themeName="HistoryRoot">
        <Content initialState={false}>
          {initialFormData !== undefined && (
            <DisplayPromptForm initialFormData={initialFormData} />
          )}
          <Component themeName="HistoryComponent">
            <PromptDialog
              requestId={requestData.id}
              initialFormData={initialFormData}
              method="PUT"
            />
            <DeleteRequestButton requestId={prompts[0].request_id} />
            <ShowResultButton
              requestId={prompts[0].request_id}
              projectId={project_id}
            />
          </Component>
        </Content>
      </_Root>
    );
  })
);

export { Root };
