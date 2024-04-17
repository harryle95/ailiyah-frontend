import * as React from "react";
import { ITailwindTheme, isTailwindKey } from "./types";

interface PresetTheme {
  [key: string]: ITailwindTheme;
}

type keys = keyof ITailwindTheme;

const defaultTheme: PresetTheme = {
  toggleButton: {
    twWidth: "w-10",
    twHeight: "h-10"
  },

  icons: {
    twWidth: "w-full",
    twHeight: "h-full",
    twPadding: "p-2",
  },
};

export const ThemeContext = React.createContext<PresetTheme | undefined>(
  undefined
);

export const useThemeContext = () => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a Provider");
  }
  return context;
};

export const ThemeProvider: React.FC<{
  value?: PresetTheme;
  children: React.ReactNode;
}> = ({ value, children }) => {
  return (
    <ThemeContext.Provider value={value ? value : defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export class Theme {
  static extract(values: ITailwindTheme): {
    tailwindTheme: ITailwindTheme;
    rest: Record<string, any>;
  } {
    let tailwindTheme: ITailwindTheme = {};
    const rest: Record<string, any> = {};

    Object.keys(values).forEach((key) => {
      if (isTailwindKey(key)) {
        tailwindTheme[key] = values[key];
      } else {
        rest[key] = values[key];
      }
    });
    return { tailwindTheme, rest };
  }

  static toString(value: ITailwindTheme): string {
    const { themeName = "", ...values } = value;
    const valueString = Object.values(values).join(" ");
    return themeName ? themeName + " " + valueString : valueString;
  }

  static getClassName(
    props: ITailwindTheme,
    theme: PresetTheme
  ): { className: string; rest: Record<string, any> } {
    const { tailwindTheme, rest } = Theme.extract(props);
    const className = rest.className
      ? rest.className
      : tailwindTheme.themeName
      ? Theme.toString(theme[tailwindTheme.themeName])
      : Theme.toString(tailwindTheme);
    return { className: className, rest: rest };
  }
}
