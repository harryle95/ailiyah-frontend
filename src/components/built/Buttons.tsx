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
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import * as Popover from "@radix-ui/react-popover";
import { styled } from "../context/factory";
import { Tooltip } from "./Tooltip";
import {
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import "./Alert.css";
import "./Popover.css";

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
        <AlertDialog.Trigger asChild>
          <DeleteButton {...rest} ref={ref} tooltipContent={tooltipContent} />
        </AlertDialog.Trigger>
        <AlertDialog.Portal>
          <AlertDialog.Overlay className="AlertDialogOverlay" />
          <AlertDialog.Content className="AlertDialogContent">
            <AlertDialog.Title className="AlertDialogTitle">
              {dialogTitle}
            </AlertDialog.Title>
            <AlertDialog.Description className="AlertDialogDescription">
              {dialogDescription}
            </AlertDialog.Description>
            <div
              style={{ display: "flex", gap: 25, justifyContent: "flex-end" }}
            >
              <AlertDialog.Cancel asChild>
                <button className="Button mauve" onClick={dialogOnCancel}>
                  Cancel
                </button>
              </AlertDialog.Cancel>
              <AlertDialog.Action asChild>
                <button className="Button red" onClick={dialogOnSubmit}>
                  Yes, Delete
                </button>
              </AlertDialog.Action>
            </div>
          </AlertDialog.Content>
        </AlertDialog.Portal>
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
const LeftButton = createButton("LeftButton", <LeftIcon themeName="Icons" />);
const RightIcon = styled(DoubleArrowRightIcon);
const RightButton = createButton(
  "RightButton",
  <RightIcon themeName="Icons" />
);

interface PopOverButtonContentProps
  extends Omit<Popover.PopoverContentProps, "asChild">,
    ITailwindTheme {
  icon?: React.JSX.Element;
}

const PopOverButtonGroup = React.forwardRef<
  HTMLDivElement,
  PopOverButtonContentProps
>((props, ref) => {
  const { icon = <DotsHorizontalButton />, children, ...rest } = props;
  const Content = styled(Popover.Content)
  const Arrow = styled(Popover.Arrow)
  return (
    <Popover.Root>
      <Popover.Trigger asChild>{icon}</Popover.Trigger>
      <Popover.Portal>
        <Content className="PopoverContent" themeName="TooltipPopoverContent" sideOffset={5}>
          <styled.div {...rest} ref={ref}>
            {children}
          </styled.div>
          <Arrow className="PopoverArrow" themeName="TooltipPopoverArrow"/>
        </Content>
      </Popover.Portal>
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
  createButton,
};
