import { PresetTheme } from "@ailiyah-ui/utils";
import { defaultTheme } from "@ailiyah-ui/utils";
import { theme as promptTheme } from "./components/prompt/theme";
import { theme as navbarTheme } from "./components/navbar/theme";
import { theme as panelTheme } from "./components/panel/theme";

export const theme: PresetTheme = {
  ...defaultTheme,
  ...promptTheme,
  ...navbarTheme,
  ...panelTheme,
  Icons: {
    twWidth: "w-5",
    twHeight: "h-5",
  },
};
