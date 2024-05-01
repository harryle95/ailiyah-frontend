import { PresetTheme } from "@ailiyah-ui/utils";

export const theme: PresetTheme = {
  NavBarRoot: {
    twHeight: "h-screen",
    twWidth: "w-fit",
    twFlex: "flex",
    // Padding set to 0 when collapsed (inactive)
    twPadding:
      "pl-4 py-4 data-[state=inactive]:pl-0 data-[state=inactive]:py-0",
    twFlexDirection: "flex-row-reverse",
    twBackgroundColor: "bg-neutral-100 dark:bg-neutral-900",
    // Different text color for active/inactive and light/dark modes
    twTextColor:
      "text-neutral-700 data-[state=active]:text-neutral-500 dark:text-neutral-400 dark:data-[state=active]:text-neutral-300",
  },
  NavBarTrigger: {
    twHeight: "h-full",
    twWidth: "w-fit",
    twPadding: "px-1",
    twFlex: "flex",
    twAlignItems: "items-center",
  },
  NavBarContent: {
    twWidth: "w-[260px]",
    twHeight: "h-full",
    twOverflow: "overflow-auto",
    twFlex: "flex flex-col",
    twGap: "gap-y-5",
  },
  NavBarContentHeader: {
    twFlexShrink: "flex-shrink-0",
    twOrder: "order-1",
  },
  NavBarContentBody: {
    twFlexGrow: "flex-grow",
    twOrder: "order-2",
    twOverflow: "overflow-auto",
    twFlex: "flex flex-col",
    twGap: "gap-y-4",
  },
  NavBarContentFooter: {
    twFlexShrink: "flex-shrink-0",
    twOrder: "order-3",
  },
  NavBarIcons: {
    twWidth: "w-full",
    twHeight: "h-full",
    twOpacity: "opacity-100 hover:opacity-50",
    twStroke: "stroke-neutral-500 dark:stroke-neutral-100", // stroke color based on dark or light mode
  },
  Icons: {
    twWidth: "w-full",
    twHeight: "h-full",
    twOpacity: "opacity-100 hover:opacity-50",
  },
  TooltipPopoverContent: {
    twTextColor: "text-neutral-100 dark:text-neutral-800",
    twBackgroundColor: "bg-gray-900 dark:bg-gray-50",
    twBoxShadow: "shadow-md",
    twBoxShadowColor: "shadow-gray-100 dark:shadow-gray-900",
  },
  TooltipPopoverArrow: {
    twFill: "fill-gray-900 dark:fill-gray-50",
  },
  TextBoxRoot: {
    // Different bg color for active/inactive and light/dark modes
    twBackgroundColor:
      "data-[state=active]:bg-neutral-300 dark:data-[state=active]:bg-neutral-700",
    twBorderRadius: "rounded-md",
    twPadding: "p-2",
  },
  TextBoxMask: {
    // twPosition: "absolute",
    twHeight: "h-full",
    // twTopRightBottomLeft: "top-0 bottom-0 right-0", // Placed at the end of the text box on the right
    twWidth: "w-8 data-[state=active]:w-20", // Larger width when active to hold text box buttons
    // Gradient starting color must match bg. Different active/non-active and light modes
    twGradientColorStops:
      "from-neutral-100 data-[state=active]:from-neutral-300 from-60% dark:from-neutral-900 dark:data-[state=active]:from-neutral-700",
    twBackgroundColor: "bg-gradient-to-l",
  },
  TextBoxButtons: {
    twDisplay: "hidden data-[state=active]:flex", // Hidden by default, shown when active
  },
  TextBoxInput: {
    twWidth: "w-full",
    twHeight: "h-full",
    twBackgroundColor: "bg-transparent",
    twBorderWidth: "border-none",
    twOutlineColor: "outline-none",
  },
  NavBarButtons: {
    twWidth: "w-5/6",
    twHeight: "h-fit",
    twMargin: "mx-auto",
    twFlex: "flex",
    twPadding: "py-1",
    twAlignItems: "item-center",
    twJustifyContent: "justify-center",
    twBorderWidth: "border-2",
    twBorderRadius: "rounded-md",
    twBorderStyle: "border-solid",
    twBackgroundColor:
      "bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-600",
  },
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
  PromptButtonGroupNewButton: {
    twBackgroundColor:
      "bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-600",
    twPadding: "py-2 px-3",
    twBorderWidth: "border-2",
    twBorderRadius: "rounded-lg",
    twWidth: "w-[120px]",
  },
  PromptButtonGroupSubmitButton: {
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
