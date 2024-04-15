import { forwardRef } from "react";
import ToggleListItem from "./ToggleListItem";

const ToggleListItemGroup = forwardRef(
  (
    {
      data,
      isVisible,
      className = "pl-3 flex flex-col my-3",
      toggleItemProps,
      ...rest
    },
    ref
  ) => {
    const renderedGroup = (
      <div className={"c-toggle-list-group " + className} {...rest} ref={ref}>
        {data ? (
          Object.entries(data).map(([linkName, to]) => (
            <ToggleListItem
              key={to}
              linkName={linkName}
              to={to}
              {...toggleItemProps}
            />
          ))
        ) : (
          <></>
        )}
      </div>
    );

    return isVisible ? renderedGroup : <></>;
  }
);

ToggleListItemGroup.displayName = "ToggleListItemGroup";
export default ToggleListItemGroup;
