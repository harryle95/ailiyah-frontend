import * as React from "react";
import { ITailwindTheme } from "../context/types";
import {
  TrashIcon,
  Pencil1Icon,
  UploadIcon as _UploadIcon,
  DownloadIcon as _DownloadIcon,
  ThickArrowUpIcon,
  PlusIcon,
  DotsHorizontalIcon as _DotsHorizontalIcon,
  DotsVerticalIcon as _DotsVerticalIcon,
} from "@radix-ui/react-icons";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import { styled } from "../context/factory";
import { Popover } from "@radix-ui/themes";
import { Tooltip } from "./Tooltip";
import {
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";


type ButtonProps = React.ComponentPropsWithoutRef<"button">;

type TailwindButtonProps = ButtonProps & ITailwindTheme;

export interface TooltipProps {
  tooltipContent?: string;
}

export interface TooltipTailwindButtonProps
  extends TailwindButtonProps,
    TooltipProps {}

interface DeleteAlertProps extends TooltipTailwindButtonProps {
  dialogTitle: string;
  dialogDescription: string;
  dialogCancelButtonName: string;
  dialogSubmitButtonName: string;
  dialogOnCancel: (event: React.MouseEvent<HTMLButtonElement>) => void;
  dialogOnSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const DeleteIcon = styled(TrashIcon);

const DeleteAlertButton = React.forwardRef<HTMLButtonElement, DeleteAlertProps>(
  (props, ref) => {
    const {
      tooltipContent = "Delete",
      dialogTitle,
      dialogDescription,
      dialogCancelButtonName = "Cancel",
      dialogSubmitButtonName = "OK",
      dialogOnCancel,
      dialogOnSubmit,
      ...rest
    } = props;

    return (
      <AlertDialog.Root>
        <Tooltip tooltipContent={tooltipContent}>
          <AlertDialog.Trigger>
            <styled.button {...rest} ref={ref}>
              <DeleteIcon themeName="Icons" />
            </styled.button>
          </AlertDialog.Trigger>
        </Tooltip>

        <AlertDialog.Content maxWidth="450px">
          <AlertDialog.Title>{dialogTitle}</AlertDialog.Title>
          <AlertDialog.Description size="2">
            {dialogDescription}
          </AlertDialog.Description>

          <Flex gap="3" mt="4" justify="end">
            <AlertDialog.Cancel>
              <Button variant="soft" color="gray" onClick={dialogOnCancel}>
                {dialogCancelButtonName}
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button variant="solid" color="red" onClick={dialogOnSubmit}>
                {dialogSubmitButtonName}
              </Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
    );
  }
);

DeleteAlertButton.displayName = "DeleteAlertButton";

const createButton = (buttonName: string, icon: React.JSX.Element) => {
  const ButtonComponent = React.forwardRef<
    HTMLButtonElement,
    TooltipTailwindButtonProps
  >((props, ref) => {
    const { tooltipContent, ...rest } = props;
    const rendered = tooltipContent ? (
      <Tooltip tooltipContent={tooltipContent}>
        <styled.button ref={ref} {...rest}>
          {icon}
        </styled.button>
      </Tooltip>
    ) : (
      <styled.button ref={ref} {...rest}>
        {icon}
      </styled.button>
    );
    return rendered;
  });
  ButtonComponent.displayName = buttonName;
  return ButtonComponent;
};

const EditIcon = styled(Pencil1Icon);
const AddIcon = styled(PlusIcon);
const UploadIcon = styled(_UploadIcon);
const DownloadIcon = styled(_DownloadIcon);
const SubmitIcon = styled(ThickArrowUpIcon);
const DotsHorizontalIcon = styled(_DotsHorizontalIcon);
const DotsVerticalIcon = styled(_DotsVerticalIcon);

const EditButton = createButton("EditButton", <EditIcon themeName="Icons" />);
const AddButton = createButton("AddButton", <AddIcon themeName="Icons" />);
const UploadButton = createButton(
  "UploadButton",
  <UploadIcon themeName="Icons" />
);
const DownloadButton = createButton(
  "DownloadButton",
  <DownloadIcon themeName="Icons" />
);
const SubmitButton = createButton(
  "SubmitButton",
  <SubmitIcon themeName="Icons" />
);
const DeleteButton = createButton(
  "DeleteButton",
  <DeleteIcon themeName="Icons" />
);
const DotsHorizontalButton = createButton(
  "DotsHorizontalButton",
  <DotsHorizontalIcon themeName="Icons" />
);
const DotsVerticalButton = createButton(
  "DotsVerticalButton",
  <DotsVerticalIcon themeName="Icons" />
);

const LeftIcon = styled(DoubleArrowLeftIcon);
const LeftButton = createButton("LeftButton", <LeftIcon themeName="Icons"/>)
const RightIcon = styled(DoubleArrowRightIcon);
const RightButton = createButton("RightButton", <RightIcon themeName="Icons"/>)

interface PopOverButtonContentProps
  extends Omit<Popover.ContentProps, "asChild">,
    ITailwindTheme {
  icon?: React.JSX.Element;
}

const PopOverButtonGroup = React.forwardRef<
  HTMLDivElement,
  PopOverButtonContentProps
>((props, ref) => {
  const { icon = <DotsHorizontalButton />, children, ...rest } = props;
  const Content = styled(Popover.Content);
  return (
    <Popover.Root>
      <Popover.Trigger>{icon}</Popover.Trigger>
      <Content {...rest} ref={ref}>
        {children}
      </Content>
    </Popover.Root>
  );
});

type DivProps = React.ComponentPropsWithoutRef<"div">;

interface InvisibleButtonGroupProps extends DivProps, ITailwindTheme {
  visibleState?: boolean;
  defaultState?: boolean;
}

const InvisibleButtonGroup = React.forwardRef<
  HTMLDivElement,
  InvisibleButtonGroupProps
>((props, ref) => {
  const {
    visibleState = null,
    defaultState = true,
    children,
    style,
    ...rest
  } = props;
  const displayState = visibleState !== null ? visibleState : defaultState;
  const displayStyle = displayState ? style : { ...style, display: "none" };
  return (
    <styled.div ref={ref} {...rest} style={displayStyle}>
      {children}
    </styled.div>
  );
});

InvisibleButtonGroup.displayName = "InvisibleButtonGroup";



export {
  AddButton,
  DeleteButton,
  EditButton,
  UploadButton,
  DownloadButton,
  SubmitButton,
  DeleteAlertButton,
  DotsHorizontalButton,
  DotsVerticalButton,
  PopOverButtonGroup,
  InvisibleButtonGroup,
  AddIcon,
  DeleteIcon,
  EditIcon,
  UploadIcon,
  DownloadIcon,
  SubmitIcon,
  DotsHorizontalIcon,
  DotsVerticalIcon,
  LeftIcon,
  LeftButton,
  RightIcon,
  RightButton,
  createButton
};
