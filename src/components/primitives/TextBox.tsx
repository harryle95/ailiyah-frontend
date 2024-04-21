import * as React from "react";
import { styled } from "../context/factory";
import { ITailwindTheme } from "../context/types";

type DivProps = React.ComponentPropsWithoutRef<"div">;

interface TextBoxOwnProps {
  activeState: boolean;
  hoverSetActive: boolean;
  children: React.ReactNode | ((internalActive: boolean) => React.ReactNode);
}

interface TextBoxProps
  extends TextBoxOwnProps,
    ITailwindTheme,
    Omit<DivProps, "children"> {}

interface ITextBoxContext {
  activeState: "active" | "inactive";
}

const TextBoxContext = React.createContext<ITextBoxContext | undefined>(
  undefined
);

const useTextBoxContext: () => ITextBoxContext = () => {
  const context = React.useContext(TextBoxContext);
  if (!context) {
    console.error("useTextBoxContext must be used within a Form");
    return { activeState: "active" };
  }
  return context;
};

/**
 * Text box represent a text area that can optionally has side components -i.e
 * buttons.
 *
 * Root is the container of textbox. This renders a div and provides an active
 * context.
 *
 * @param activeState - state variable represent active
 * @param hoverSetActive - whether state becomes active on hover
 * 
 * Default behavior: 
 * @param twWidth - w-full: fill width of parent container 
 * @param twFlex - flex: is a flex div
 * @param twAlignItems - items-center: align all children centerly 
 * 
 * Attribute
 * data-state: "active" | "inactive" depending on current internal state 
 * 
 * Note: 
 * Styling active/inactive state can be done by providing a `data-[state=active]:` modifier.
 * Children can also be a callback that takes internalActive param and returns a ReactNode.
 * Child components inside of root can also use a `useTextBoxContext` to get internalState
 * 
 * Example: textbox with right button 
 * ```
 *    <Text.Root
        activeState={true}
        hoverSetActive={true}
        twBorderWidth="border-2"
        twBackgroundColor="bg-white"
        twBorderRadius="rounded-md"
      >
        <Text.Content twPadding="px-2">
          Long Text that will not be fully displayed and will be clipped
        </Text.Content>
        <Text.Component compLocation="right" twBorderWidth="border-l-2">
          <DeleteIcon themeName="Icons" />
        </Text.Component>
      </Text.Root>
 * ```

      
 * Example: white text box that gets highlighted when hover
 * ```
 *    <Text.Root
        activeState={false}
        hoverSetActive={true}
        twBorderWidth="border-2"
        twBackgroundColor="data-[state=inactive]:bg-slate-50 data-[state=active]:bg-slate-300"
        twBorderRadius="rounded-md"
      >
        <Text.Content twPadding="pl-2">
          Long Text that will not be fully displayed and will be clipped
        </Text.Content>
        <Text.Component compLocation="right" twBorderWidth="border-l-2">
          <DeleteIcon themeName="Icons" />
        </Text.Component>
      </Text.Root>
    ```
 */
const Root = React.forwardRef<HTMLDivElement, TextBoxProps>((props, ref) => {
  const {
    activeState,
    hoverSetActive,
    children,
    twWidth = "w-full",
    twFlex = "flex",
    twAlignItems = "items-center",
    onMouseEnter,
    onMouseLeave,
    ...rest
  } = props;
  const [internalActive, setInternalActive] = React.useState(false);
  const hoverOn = (e: React.MouseEvent<HTMLDivElement>) => {
    onMouseEnter && onMouseEnter(e);
    if (hoverSetActive) {
      setInternalActive(true);
    }
  };
  const hoverOff = (e: React.MouseEvent<HTMLDivElement>) => {
    onMouseLeave && onMouseLeave(e);
    if (hoverSetActive) {
      setInternalActive(false);
    }
  };

  const dataState = activeState || internalActive ? "active" : "inactive";
  return (
    <TextBoxContext.Provider value={{ activeState: dataState }}>
      <styled.div
        twWidth={twWidth}
        twFlex={twFlex}
        twAlignItems={twAlignItems}
        onMouseEnter={hoverOn}
        onMouseLeave={hoverOff}
        {...rest}
        ref={ref}
        data-state={dataState}
      >
        {typeof children === "function" ? children(internalActive) : children}
      </styled.div>
    </TextBoxContext.Provider>
  );
});

/**
 * Content is the container of the main content of TextBox.
 *
 * Default behavior:
 * @param twWhitespace - whitespace-nowrap - does not wrap to next line
 * @param twOverflow - overflow-clip - clip overflow content
 * @param twWidth - w-full: grows full width
 * @param twOrder - order-2 - in the middle relative to left (order-1) and right (order-3) components
 *
 * Styling active/inactive state can be done by providing a `data-[state=active]:` modifier.
 */
const Content = React.forwardRef<HTMLDivElement, DivProps & ITailwindTheme>(
  (props, ref) => {
    const {
      twWhitespace = "whitespace-nowrap",
      twOverflow = "overflow-clip",
      twWidth = "w-full",
      children,
      ...rest
    } = props;

    const { activeState } = useTextBoxContext();
    return (
      <styled.div
        twOverflow={twOverflow}
        twWhitespace={twWhitespace}
        twOrder="order-2"
        twWidth={twWidth}
        {...rest}
        ref={ref}
        data-state={activeState}
      >
        {children}
      </styled.div>
    );
  }
);

interface LocationProps {
  compLocation: "left" | "right";
}

/**
 * Component is a div containign the auxiliary components of the text box - i.e. buttons group.
 *
 * Default behavior:
 * @param compLocation - whether to place the component on the left or right of content
 * @param twOrder - order-1 if compLocation is left, else order-3
 *
 * Styling active/inactive state can be done by providing a `data-[state=active]:` modifier.
 */
const Component = React.forwardRef<
  HTMLDivElement,
  DivProps & ITailwindTheme & LocationProps
>((props, ref) => {
  const { compLocation, children, ...rest } = props;
  const order = compLocation === "left" ? "order-1" : "order-3";
  const { activeState } = useTextBoxContext();
  return (
    <styled.div twOrder={order} {...rest} data-state={activeState} ref={ref}>
      {children}
    </styled.div>
  );
});

export { Root, Content, Component };
