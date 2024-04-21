import * as React from "react";
import { ITailwindTheme } from "../context/types";
import { styled } from "../context/factory";
import { Form as _Form, FormProps as _FormProps } from "react-router-dom";
import * as Upload from "./Upload";

/**
 * ------------------------------------------------------------------------------------------------
 * Input
 * ------------------------------------------------------------------------------------------------
 */

type InputProps = React.ComponentPropsWithoutRef<"input">;

interface InteractiveInputProps extends InputProps, ITailwindTheme {
  /**
   * Handler called when esc key is pressed. To prevent default behaviour,
   * set to (e)=>e.preventDefault().
   *
   * @param event - Keyboard event type for input element
   * @returns
   */
  onEscDown?: React.KeyboardEventHandler<HTMLInputElement>;

  /**
   * Handler called when enter key is pressed. To prevent default behaviour,
   * set to (e)=>e.preventDefault()
   *
   * @param event - Keyboard event type for input element
   * @returns
   */
  onEnterDown?: React.KeyboardEventHandler<HTMLInputElement>;
}

/**
 * Generic input - does not use Form hooks internally
 *
 * @param onEscDown - handler when ESC key is pressed
 * @param onEnterDown - handler when ENTER key is pressed
 */
const Input = React.forwardRef<HTMLInputElement, InteractiveInputProps>(
  (props, ref) => {
    const {
      onKeyDown = () => {},
      onEscDown = () => {},
      onEnterDown = () => {},
      ...rest
    } = props;

    const keyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
      const key = e.key;
      switch (key) {
        case "Escape":
          e.preventDefault();
          onEscDown(e);
          return;
        case "Enter":
          e.preventDefault();
          onEnterDown(e);
          return;
        default:
          onKeyDown(e);
          return;
      }
    };

    return <styled.input onKeyDown={keyDownHandler} {...rest} ref={ref} />;
  }
);

Input.displayName = "Input";

/**
 * ------------------------------------------------------------------------------------------------
 * Form
 * ------------------------------------------------------------------------------------------------
 */

interface IFormContext {
  submitForm?:
    | React.FormEvent<HTMLFormElement>
    | React.MouseEventHandler<HTMLButtonElement>
    | React.KeyboardEventHandler<HTMLInputElement>;
}

interface FormProps extends Omit<_FormProps, "children" | "onSubmit"> {
  children: React.ReactNode | ((formContext: IFormContext) => React.ReactNode);
  onSubmit?:
    | React.FormEvent<HTMLFormElement>
    | React.MouseEventHandler<HTMLButtonElement>
    | React.KeyboardEventHandler<HTMLInputElement>
    | React.FocusEventHandler<HTMLInputElement>;
}

const FormContext = React.createContext<IFormContext | undefined>(undefined);

const useFormContext: () => IFormContext = () => {
  const context = React.useContext(FormContext);
  if (!context) {
    console.error("useFormContext must be used within a Form");
    return {};
  }
  return context;
};

/**
 * Wrapper of Remix/React-Router-Dom's `Form` component, which provides an accompanying
 * `useFormContext` hook to access`submitForm`
 *
 * Parameters:
 *
 *
 * Use case:
 * children of Root can call `useFormContext` to get `submitForm`, which is a reference to
 * the parent form's `onSubmit` handler. This allows for submitting the form using handlers
 * of components not necessarily buttons. For instance, consider an input text field that
 * can submit form once it goes out of focus.
 *
 * Example: Submit with a text input once out of focus.
 *
 * ```
      <Form.Root
        onSubmit={(e) => {
          e.preventDefault;
          console.log("Submit Form");
        }}
      >
        {({ submitForm }) => (
          <input
            type="text"
            autoFocus
            onBlur={
              submitForm as unknown as React.FocusEventHandler<HTMLInputElement>
            }
          />
        )}
      </Form.Root>
 * ```
 *
 * Example: submitting with a regular button
 *
 * ```
 * <Root method="POST" onSubmit={(e)=>{console.log("Submit Form"); e.preventDefault()}}>
 *  <button>Submit</button>
 * </Root>
 * ```
 *
 */
const Root = React.forwardRef<HTMLFormElement, FormProps>((props, ref) => {
  const { children, onSubmit, ...rest } = props;
  const contextValue = React.useMemo(
    () => ({
      submitForm: onSubmit,
    }),
    [onSubmit]
  );
  return (
    <FormContext.Provider value={contextValue as unknown as IFormContext}>
      <_Form
        ref={ref}
        {...rest}
        onSubmit={
          onSubmit as unknown as React.FormEventHandler<HTMLFormElement>
        }
      >
        {typeof children === "function"
          ? children(contextValue as unknown as IFormContext)
          : children}
      </_Form>
    </FormContext.Provider>
  );
});

Root.displayName = "FormRoot";

export { Root, Input, Upload, useFormContext };
