import * as _Tooltip from "@radix-ui/react-tooltip";
import * as React from "react";
import "./Tooltip.css";
import { styled } from "../context/factory";

interface TooltipProps{
    tooltipContent: string 
    children: React.ReactNode
}

export const Tooltip: React.FC<TooltipProps> = (props) => {
    const {children, tooltipContent} = props 
    const Content = styled(_Tooltip.Content);
    const Arrow = styled(_Tooltip.Arrow);

  return (
    <_Tooltip.Provider>
      <_Tooltip.Root>
        <_Tooltip.Trigger asChild>
            {children}
        </_Tooltip.Trigger>
        <_Tooltip.Portal>
          <Content className="TooltipContent" themeName="TooltipPopoverContent" sideOffset={5}>
            {tooltipContent}
            <Arrow className="TooltipArrow" themeName="TooltipPopoverArrow"/>
          </Content>
        </_Tooltip.Portal>
      </_Tooltip.Root>
    </_Tooltip.Provider>
  );
}

