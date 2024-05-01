import { Meta, StoryObj } from "@storybook/react";
import { styled } from "@ailiyah-ui/factory";
import { ThemeProvider } from "@ailiyah-ui/context";
import { theme } from "./theme";
import React from "react";
import { PromptTextArea } from "./textarea";

const meta: Meta<typeof PromptTextArea> = {
  title: "TextAreToPromptDialog",
  component: PromptTextArea,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <styled.div twWidth="w-[600px]" twHeight="h-[600px]">
        <ThemeProvider value={theme}>
          <Story />
        </ThemeProvider>
      </styled.div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof PromptTextArea>;

export const Default: Story = {};
