import { PresetTheme } from "@ailiyah-ui/utils";

const promptTheme: PresetTheme = {
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
  },
  PromptButtonGroupButton: {
    twFlex: "flex",
    twPadding: "px-3 py-1",
    twAlignItems: "item-center",
    twJustifyContent: "justify-center",
    twBorderWidth: "border-2",
    twBorderRadius: "rounded-md",
    twBorderStyle: "border-solid",
    twTextColor:
      "text-neutral-700 data-[state=active]:text-neutral-500 dark:text-neutral-400 dark:data-[state=active]:text-neutral-300",
    twBackgroundColor:
      "bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-600",
  },
};

const promptElementTheme: PresetTheme = {
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
};

const uploadThumbnailTheme: PresetTheme = {
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
};

const dialogTheme: PresetTheme = {
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
  DialogTitle: {
    twFontSize: "text-3xl",
    twFontWeight: "font-bold",
  },
};

const textareaTheme: PresetTheme = {
  TextAreaTextArea: {
    twWidth: "w-full",
    twHeight: "h-full",
    twBorderWidth: "border-2",
    twBorderRadius: "rounded-md",
    twPadding: "py-4 pl-4 pr-9",
    twResize: "resize-none",
    twOther: "scrollbar-thin",
    twBorderColor: "focus:outline-neutral-600",
  },
  TextAreaComponent: {
    twTopRightBottomLeft: "bottom-1 right-4",
  },
};

const promptFormTheme: PresetTheme = {
  PromptForm: {
    twFlexGrow: "flex-grow",
    twOverflow: "overflow-y-auto",
  },
};

export const theme: PresetTheme = {
  ...promptTheme,
  ...promptElementTheme,
  ...uploadThumbnailTheme,
  ...dialogTheme,
  ...textareaTheme,
  ...promptFormTheme,
};
