import React from "react";
import * as Button from "@ailiyah-ui/button";
import { createBox, createLocationBox } from "@ailiyah-ui/box";
import * as Dialog from "@ailiyah-ui/dialog";
import { PromptForm } from "./form";
const Container = createBox("Container", { twPosition: "relative" });
const Box = createLocationBox("Box");

function PromptDialog() {
  const [open, setOpen] = React.useState(false);
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button.AddButton tooltipContent="Expand" />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content themeName="DialogContent">
          <Container themeName="DialogContainer">
            <Dialog.Title themeName="DialogTitle">Edit Prompt</Dialog.Title>
            <Dialog.Description themeName="DialogDescription">
              Make your request by submitting image(s) or write prompt(s)
            </Dialog.Description>
            <PromptForm editing={true} setOpen={setOpen} />
            <Box compLocation="top-right" themeName="DialogCloseButton">
              <Dialog.Close asChild>
                <Button.CrossButton tooltipContent="Close" />
              </Dialog.Close>
            </Box>
          </Container>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export { PromptDialog };
