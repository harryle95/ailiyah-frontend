import * as React from "react";
import { styled } from "../context/factory";
import { ITailwindTheme } from "../context/types";
import { TooltipTailwindButtonProps, TooltipProps } from "../built/Buttons";
import { Tooltip } from "../built/Tooltip";

/**
 * ------------------------------------------------------------------------------------------------
 * Upload
 * ------------------------------------------------------------------------------------------------
 */

interface IUploadContext {
  /** input component id -> for upload button */
  id?: string;
  /**
   * Handler for when file is uploaded. Use-case: showing thumbnail when a file is uploaded
   */
  onFileUploaded?: React.ChangeEventHandler<HTMLInputElement>;
  /**
   * Handler for when file is removed. Use-case: clicking x button to remove thumbnail
   */
  onFileRemoved: React.MouseEventHandler<HTMLButtonElement>;
}

const UploadContext = React.createContext<IUploadContext | undefined>(
  undefined
);

const useUploadContext: () => IUploadContext = () => {
  const content = React.useContext(UploadContext);
  if (!content) {
    console.log("Must call useUploadContext inside an Upload component");
    return { onFileRemoved: () => {} };
  }
  return content;
};

interface UploadRootProps
  extends Omit<React.ComponentPropsWithoutRef<"input">, "type" | "children">,
    IUploadContext {
  children: React.ReactNode | ((context: IUploadContext) => React.ReactNode);
}

/**
 * Renders an <input type="file"> element that also provides context for its children.
 * For Upload children inside of Root, users can call `useUploadContext` hook to get
 * the `id` of the input element, and the two handlers `onFileUploaded` and `onFileRemoved`
 *
 * @param explicit id - if you want the trigger label to be placed outside of Root
 * @param onFileUploaded - hook called when input value is changed
 * @param onFileRemoved - hook called to reset file input value
 * @param children - can be a React.ReactNode or a callback that renders a ReactNode based
 * on (id, onFileUploaded, onFileRemoved)
 *
 * Note: `onFileRemoved` returned in `useUploadContext` also clears the files property of
 * the input element. Equivalent to calling `document.getElementById(id).value=""`. Hence
 * when providing `onFileRemoved` hander, users don't need to manually clear to `files` property
 */
const Root = React.forwardRef<HTMLInputElement, UploadRootProps>(
  (props, ref) => {
    const { onFileUploaded, onFileRemoved, id, children, ...rest } = props;
    const inputId = id ? id : "file-upload" + React.useId();
    const internalRef = React.useRef(null);
    ref = internalRef;
    const uploadFile = onFileUploaded;
    const removeFile = (e) => {
      onFileRemoved(e);
      if (internalRef) {
        // @ts-ignore
        internalRef.current.value = "";
      }
    };
    const contextValue = React.useMemo(
      () => ({
        id: inputId,
        onFileUploaded: uploadFile,
        onFileRemoved: removeFile,
      }),
      [inputId, uploadFile, removeFile]
    );
    return (
      <UploadContext.Provider value={contextValue as unknown as IUploadContext}>
        <styled.input
          type="file"
          id={inputId}
          style={{ display: "none" }}
          ref={internalRef}
          {...rest}
          onChange={onFileUploaded}
        />
        {typeof children === "function"
          ? children(contextValue as unknown as IUploadContext)
          : children}
      </UploadContext.Provider>
    );
  }
);
Root.displayName = "Root";

interface UploadTriggerProps
  extends React.ComponentPropsWithoutRef<"label">,
    TooltipProps,
    ITailwindTheme {}

/**
 * Renders an HTML `label` element with an internal `htmlFor` prop linked
 * to input<type="file"> that is rendered by Upload.Root. To specify
 * which input element that it refers to, either wrap it under an
 * `Upload.Root`, or provide an explicit `htmlFor` prop.
 *
 * @param htmlFor - id of input that this is linked to
 * @param tooltipContent - tooltip of the element that appears on hover
 *
 * Note: don't use a button as children of trigger
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label#accessibility_concerns
 *
 *
 * Example: using with implicit htmlFor
 *
 * ```
 * <Upload.Root><Upload.Trigger>Upload</Upload.Trigger></Upload.Root>
 * ```
 *
 * Using with explicit htmlFor
 * ```
 * <div>
 *  <input type="file" id="file-upload">
 *  <Upload.Trigger htmlFor="file-upload">Upload<Upload.Trigger>
 * </div>
 * ```
 */
const Trigger = React.forwardRef<HTMLLabelElement, UploadTriggerProps>(
  (props, ref) => {
    const { htmlFor, children, tooltipContent = "", ...rest } = props;
    const { id } = useUploadContext();
    const _htmlFor = htmlFor ? htmlFor : id;

    return tooltipContent ? (
      <Tooltip tooltipContent={tooltipContent}>
        <styled.label htmlFor={_htmlFor} {...rest} ref={ref}>
          {children}
        </styled.label>
      </Tooltip>
    ) : (
      <styled.label htmlFor={_htmlFor} {...rest} ref={ref}>
        {children}
      </styled.label>
    );
  }
);
Trigger.displayName = "Trigger";

/**
 * Renders an HTML button element to remove image using `useUploadContext` hook.
 *
 * @param tooltipContent - tooltip of the element that appears on hover
 * @param onClick - button click handler - if provided, will be invoked before `onFileRemoved`
 * function from `useUploadContext` is invoked.
 */
const Cancel = React.forwardRef<HTMLButtonElement, TooltipTailwindButtonProps>(
  (props, ref) => {
    const { children, tooltipContent = "", onClick, ...rest } = props;
    const { onFileRemoved } = useUploadContext();
    const removeFile = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (onClick) {
        onClick(e);
      }
      onFileRemoved(e);
    };

    return tooltipContent ? (
      <Tooltip tooltipContent={tooltipContent}>
        <styled.button {...rest} ref={ref} onClick={removeFile}>
          {children}
        </styled.button>
      </Tooltip>
    ) : (
      <styled.button {...rest} ref={ref} onClick={removeFile}>
        {children}
      </styled.button>
    );
  }
);

export { Root, Trigger, Cancel };
