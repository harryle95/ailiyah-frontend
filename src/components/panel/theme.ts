import { PresetTheme } from "@ailiyah-ui/utils";

const historyTheme: PresetTheme = {
  HistoryRoot: {
    twBorderRadius: "rounded-md",
    twBorderWidth: "border-2",
    twPadding: "pb-2 pr-2",
    twBorderColor: "hover:border-neutral-600",
  },
  HistoryComponent: {
    twDisplay: "hidden data-[state=active]:flex",
    twJustifyContent: "justify-center",
    twGap: "gap-x-1",
    twAlignItems: "items-center",
    twTopRightBottomLeft: "bottom-0 right-0",
  },
};

const panelTheme: PresetTheme = {
  PanelRoot: {
    twWidth: "w-1/2",
    twHeight: "h-full",
    twBorderRadius: "rounded-md",
    twFlex: "flex",
    twFlexDirection: "flex-col",
    twGap: "gap-y-4",
    twPadding: "p-4",
  },
  PanelTitle: {
    twFontSize: "text-2xl",
    twFontWeight: "font-semibold",
    twFontFamily: "font-sans",
    twTextAlign: "text-center",
    twFlexShrink: "flex-shrink-0",
  },
  PanelContent: {
    twFlex: "flex",
    twFlexDirection: "flex-col",
    twFlexGrow: "flex-grow",
    twOverflow: "overflow-y-auto",
    twOther: "scrollbar-thin",
  },
};

const contentPanelTheme: PresetTheme = {
  ContentPanelRoot: {
    twFlex: "flex",
    twFlexDirection: "flex-col",
    twFlexGrow: "flex-grow",
    twHeight: "h-screen",
    twBackgroundColor: "bg-[#323536]",
    twPadding: "p-4",
  },
  ContentPanelContent: {
    twFlex: "flex",
    twFlexGrow: "flex-grow",
    twMinHeight: "min-h-0",
  },
  ContentPanelTitle: {
    twFontSize: "text-2xl",
    twFontWeight: "font-semibold",
    twFontFamily: "font-sans",
    twTextColor: "text-neutral-300",
    twPadding: "pl-2 pb-2",
  },
};

const promptPanelTheme: PresetTheme = {
  PromptPanelRoot: {
    ...panelTheme.PanelRoot,
    twBackgroundColor: "bg-neutral-100",
    twTextColor: "text-neutral-700 dark:text-neutral-600",
  },
  PromptPanelTitle: {
    ...panelTheme.PanelTitle,
    twTextColor: "text-neutral-800",
  },
  PromptPanelContent: {
    ...panelTheme.PanelContent,
    twGap: "gap-y-4",
  },
  PromptPanelTextArea: {
    twFlexShrink: "flex-shrink-0",
  },
};

const resultPanelTheme: PresetTheme = {
  ResultPanelRoot: {
    ...panelTheme.PanelRoot,
    twBackgroundColor: "bg-neutral-600",
  },
  ResultPanelTitle: {
    ...panelTheme.PanelTitle,
    twTextColor: "text-neutral-300",
  },
  ResultPanelContent: {
    ...panelTheme.PanelContent,
    twJustifyContent: "justify-center",
    twAlignItems: "items-center",
  },
};

const theme: PresetTheme = {
  ...promptPanelTheme,
  ...resultPanelTheme,
  ...contentPanelTheme,
  ...historyTheme,
};

export { theme };
