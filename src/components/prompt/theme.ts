import { PresetTheme } from "@ailiyah-ui/utils";

export const theme: PresetTheme = {
  PromptRoot: {
    twHeight: "h-full",
    twWidth: "w-full",
    twFlex: "flex",
    twFlexDirection: "flex-col",
    twJustifyContent: "justify-between",
    twPadding: "p-4",
    twGap: "gap-y-5",
    twFlexGrow: "flex-grow",
  },
  PromptContent: {
    twFlex: "flex",
    twFlexDirection: "flex-col",
    twGap: "gap-y-4",
    twFlexGrow: "flex-grow",
    twOverflow: "overflow-y-auto",
    twOther: "scrollbar-thin",
    twPadding: "pr-3",
  },
  PromptButtonGroup: {
    twFlexShrink: "flex-shrink-0",
    twGap: "gap-x-3",
    twFlex: "flex",
    twAlignItems: "items-center",
    twJustifyContent: "justify-end",
    twPadding: "pr-3",
    twTextColor:
      "text-neutral-700 hover:text-neutral-500 dark:text-neutral-400 dark:hover:text-neutral-300",
  },
  PromptButtonGroupButton: {
    twBackgroundColor:
      "bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-600",
    twPadding: "py-2 px-3",
    twBorderWidth: "border-2",
    twBorderRadius: "rounded-lg",
    twWidth: "w-[120px]",
  },
  PromptElementRoot: {
    twWidth: "w-full",
    twHeight: "h-fit",
    twPadding: "pb-6",
  },
  PromptElementContent: {
    twFlex: "flex",
    twGap: "gap-x-4",
    twWidth: "w-full",
  },
  PromptElementTextArea: {
    twFlexGrow: "flex-grow",
    twBorderWidth: "border-2",
    twBorderRadius: "rounded-md",
    twPadding: "p-4",
  },
  PromptElementThumbnail: {
    twFlexShrink: "flex-shrink-0",
  },
  PromptElementButtonGroup: {
    twDisplay: "hidden data-[state=active]:flex",
  },
  ThumbnailContent: {
    twPadding: "pb-6",
    twWidth: "w-[200px]",
    twHeight: "h-[200px]",
    twFlex: "flex",
    twAlignItems: "items-center",
    twJustifyContent: "justify-center",
    twBorderWidth: "data-[state=active]:border-2",
  },
  ThumbnailCanvas: {
    twMaxWidth: "max-w-full",
    twMaxHeight: "max-h-full",
    twObjectFit: "object-contain",
    twFontWeight: "font-bold",
    twFontSize: "text-2xl",
  },
  ThumbnailButtonGroup: {
    twDisplay: "hidden data-[state=active]:flex",
    twGap: "gap-x-4",
  },
  DialogContainer: {
    twPadding: "p-4",
    twWidth: "w-full",
    twHeight: "h-full",
    twFlex: "flex",
    twFlexDirection: "flex-col",
    twGap: "gap-y-4",
  },
  DialogContent: {
    twWidth: "w-fit min-w-[550px]",
    twHeight: "h-4/5",
    twPadding: "p-2",
    twBorderRadius: "rounded-md",
    twBackgroundColor: "bg-neutral-50",
  },
  PromptForm: {
    twFlexGrow: "flex-grow",
    twOverflow: "overflow-y-auto",
  },
  DialogTitle: {
    twFontSize: "text-2xl",
    twFontWeight: "font-bold",
  },
  TextAreaRoot: {
    twTextColor: "text-neutral-200 dark:text-neutral-800",
  },
  TextAreaTextArea: {
    twWidth: "w-full",
    twHeight: "h-full",
    twBorderWidth: "border-2",
    twBorderRadius: "rounded-md",
    twPadding: "py-4 pl-4 pr-9",
    twResize: "resize-none",
    twOther: "scrollbar-thin",
  },
};
