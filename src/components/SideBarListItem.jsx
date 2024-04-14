import { Link, Form, useLocation, useSubmit } from "react-router-dom";
import deleteIcon from "../resources/delete.png";
import deleteHoveredIcon from "../resources/delete_hover.png";
import editIcon from "../resources/edit.png";
import editHoveredIcon from "../resources/edit_hover.png";
import { useState } from "react";
import SButton from "./SComponents/SButton";
import SButtonGroup from "./SComponents/SButtonGroup";


function UpdateForm({ id, isEditing, setEditing, projectName, setProjectName, inititalName }) {
  const submit = useSubmit()
  const [projectNameBeforeChange, setProjectNameBeforeChange] = useState(inititalName);

  // Handler
  const submitHandler = (e) => {
    e.preventDefault()
    setEditing(!isEditing)
    if (projectName !== inititalName) {
      setProjectNameBeforeChange(projectName)
      submit(e.currentTarget.form, { method: "PUT" })
    }
  }
  const keyDownHandler = (e) => {
    if (e.keyCode === 27) {
      setProjectName(projectNameBeforeChange)
      setEditing(!isEditing)
    } else if (e.keyCode === 13) {
      submitHandler(e)
    }
  }
  const changeHandler = (e) => setProjectName(e.target.value)
  return (
    <Form method="PUT"
      key={id}
      onSubmit={submitHandler}>
      <input name="id" value={id} className="hidden" readOnly />
      <input
        name="name"
        type="text"
        className='overflow-auto h-full w-full border-none outline-none bg-transparent text-sm'
        placeholder={projectName}
        value={projectName}
        onChange={changeHandler}
        onBlur={submitHandler}
        onKeyDown={keyDownHandler}
        autoFocus
      />
    </Form>
  )
}

function DeleteForm({ id }) {
  return (
    <Form method="DELETE" id={`delete-${id}`}>
      <input name="id" value={id} className="hidden" readOnly />
    </Form>
  )
}

function GradientMaskedLink({ to, className, textClassName, maskClassName, textValue }) {
  return (
    <Link to={to} className={className}>
      <p className={textClassName}>{textValue}</p>
      <div className={maskClassName}></div>
    </Link>
  )
}

export function SideBarListItem({ listItem }) {
  const id = listItem.id

  // States
  const [isEditing, setEditing] = useState(false);
  const [projectName, setProjectName] = useState(listItem.name);

  // Chek if current link is active and set button to appear/disappear
  let location = useLocation();
  let isActive = location.pathname === `/project/${id}`

  // If link is active, but not editing -> show buttons. If editting -> hide buttons. If neither -> hover shows button 
  let buttonClass = isEditing ? "hidden" :
    isActive ? "absolute top-0 bottom-0 right-0" :
      "hidden group-hover:flex absolute top-0 bottom-0 right-0"

  // If link is active -> set bg color. If link is not active, set bg color on hover 
  let containerClass = isActive ? "bg-slate-700 rounded-md my-1" : "hover:bg-slate-700 rounded-md my-1"

  // If link is active -> set gradient from highlight bg color. Otherwise, only set gradient from black 
  let maskClass = isActive ? "absolute top-0 bottom-0 right-0 bg-gradient-to-l to-transparent w-20 from-60% from-slate-700" :
    "absolute top-0 bottom-0 right-0 bg-gradient-to-l to-transparent w-8 group-hover:w-20 group-hover:from-60% from-0% from-black group-hover:from-slate-700"
  const imageClass = "min-w-5 max-w-5";

  // Edit and delete buttons 
  const EditButton = <SButton
    name="edit"
    imageClass={imageClass}
    normalIcon={editIcon}
    hoverIcon={editHoveredIcon}
    onClick={() => {
      setEditing(!isEditing)
    }
    }
    title="Edit Project's Name"
  />

  const DeleteButton = <SButton
    form={`delete-${id}`}
    type="submit"
    name="delete"
    imageClass={imageClass}
    normalIcon={deleteIcon}
    hoverIcon={deleteHoveredIcon}
    title="Delete Project"
  />

  // Update and Delete Forms

  const UpdateFormInstance = <UpdateForm
    id={id}
    isEditing={isEditing}
    setEditing={setEditing}
    projectName={projectName}
    setProjectName={setProjectName}
    inititalName={listItem.name}
  />

  const DeleteFormInstance = <DeleteForm id={id} />

  // Link 
  const LinkInstance = <GradientMaskedLink
    to={`/project/${id}`}
    className={"relative w-full rounded-md"}
    textClassName={"w-full whitespace-nowrap overflow-clip text-sm"}
    maskClassName={maskClass}
    textValue={projectName}
  />

  return (
    <div className={containerClass}>
      <div className="group px-2 py-3 h-full">
        <div className="relative group flex items-center gap-x-2 ">
          {/* Edit project name form or project name */}
          {isEditing ? UpdateFormInstance : LinkInstance}

          {/* Edit and Delete Buttons */}
          <SButtonGroup className={buttonClass}>
            {EditButton}
            {DeleteFormInstance}
            {DeleteButton}
          </SButtonGroup>
        </div>
      </div>
    </div>
  )
}