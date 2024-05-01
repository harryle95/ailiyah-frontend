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
};
