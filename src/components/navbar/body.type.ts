import React from "react"

interface TextInputUpdateFormProps
  extends React.ComponentPropsWithoutRef<"form"> {
  id: string;
  projectName: string;
  setProjectName: Function;
  setEditingState: Function;
}

export type {
    TextInputUpdateFormProps
}