import * as React from "react";
import { ITailwindTheme } from "../context/types";
import { styled, createElement } from "../context/factory";

type DivProps = React.ComponentPropsWithoutRef<"div">;

type DivRef = React.ElementRef<"div"> | null;

interface NavBarProps extends DivProps, ITailwindTheme{};

/**
 * ------------------------------------------------------------------------------------------------
 * NavBar
 * ------------------------------------------------------------------------------------------------
 */

interface NavBarState {
  state: boolean;
  setState: Function;
}

const NavBarContext = React.createContext<NavBarState | undefined>(undefined);

const useNavBarContext = () => {
  const context = React.useContext(NavBarContext);
  if (!context) {
    throw new Error("useNavBarContext must be used within a Provider");
  }
  return context;
};

const NavBar = React.forwardRef<DivRef, NavBarProps>((props, ref) => {
  const { children, ...rest } = props;
  const [visible, setVisible] = React.useState(true);
  const stateName = visible?"active":"inactive"
  return (
    <NavBarContext.Provider value={{ state: visible, setState: setVisible }}>
      <styled.div ref={ref} {...rest} data-state={stateName}>
        {children}
      </styled.div>
    </NavBarContext.Provider>
  );
});

NavBar.displayName = "NavBar";

/**
 * ------------------------------------------------------------------------------------------------
 * NavBarTrigger
 * ------------------------------------------------------------------------------------------------
 */

interface NavBarTriggerProps extends Omit<NavBarProps, "children"> {
  children?: React.ReactNode | ((state: boolean, trigger: React.MouseEventHandler<HTMLButtonElement>) => React.ReactNode);
}

/**
 * Trigger to expand/collapse navigation bar
 */
const NavBarTrigger = React.forwardRef<DivRef, NavBarTriggerProps>(
  (props, ref) => {
    const { children, onClick = (e) => {}, ...rest } = props;
    const { state, setState } = useNavBarContext();
    const onClickHandler = (e) => {
      setState(!state);
      onClick(e);
    };
    return (
      <styled.div {...rest} ref={ref}>
        {typeof children === "function" ? children(state, onClickHandler) : children}
      </styled.div>
    );
  }
);
NavBarTrigger.displayName = "NavBarTrigger";

/**
 * ------------------------------------------------------------------------------------------------
 * NavBarContent
 * ------------------------------------------------------------------------------------------------
 */
const NavBarContent = React.forwardRef<DivRef, NavBarProps>(
  (props, ref) => {
    const { children, ...rest } = props;
    const { state } = useNavBarContext();
    
    return state ? (
      <styled.div ref={ref} {...rest}>
        {children}
      </styled.div>
    ) : (
      <styled.div ref={ref} {...rest} style={{ width: "0px" }}>
        {children}
      </styled.div>
    );
  }
);
NavBarContent.displayName = "NavBarContent";

/**
 * ------------------------------------------------------------------------------------------------
 * NavBarHeader
 * ------------------------------------------------------------------------------------------------
 */
const NavBarHeader = createElement("div", "NavBarContent");

/**
 * ------------------------------------------------------------------------------------------------
 * NavBarFooter
 * ------------------------------------------------------------------------------------------------
 */
const NavBarFooter = createElement("div", "NavBarContent");

/**
 * ------------------------------------------------------------------------------------------------
 * NavBarBody
 * ------------------------------------------------------------------------------------------------
 */
const NavBarBody = createElement("div", "NavBarContent");

/**
 * ------------------------------------------------------------------------------------------------
 * Export
 * ------------------------------------------------------------------------------------------------
 */
const Root = NavBar;
const Trigger = NavBarTrigger;
const Content = NavBarContent;
const Header = NavBarHeader;
const Footer = NavBarFooter;
const Body = NavBarBody;

export {
  NavBar,
  NavBarTrigger,
  NavBarContent,
  NavBarHeader,
  NavBarFooter,
  NavBarBody,
  //
  Root,
  Trigger,
  Content,
  Header,
  Body,
  Footer,
  //
  NavBarProps,
  DivRef
};
