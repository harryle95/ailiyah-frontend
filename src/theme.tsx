import { PresetTheme } from "@ailiyah-ui/utils";
import { defaultTheme } from "@ailiyah-ui/utils";
import { theme as promptTheme } from "./components/prompt/theme";
import { theme as navbarTheme } from "./components/navbar/theme";

export const theme: PresetTheme = {
  ...defaultTheme,
  ...promptTheme,
  ...navbarTheme,
};
