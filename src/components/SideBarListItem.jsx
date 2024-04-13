/* eslint-disable react/prop-types */
import { Link, Form, useLocation } from "react-router-dom";
import deleteIcon from "../resources/delete.png";
import deleteHoveredIcon from "../resources/delete_hover.png";
import editIcon from "../resources/edit.png";
import editHoveredIcon from "../resources/edit_hover.png";
import { useState } from "react";


function UpdateForm({ itemId, isEditing, setEditing, projectName, setProjectName, inititalName }) {
  return (
    <Form method="PUT"
      onSubmit={(e) => {
        setEditing(!isEditing)
        if (projectName === inititalName) {
          e.preventDefault()
        }
      }}>
      <input name="id" value={itemId} className="hidden" readOnly />
      <input
        name="name"
        type="text"
        className='w-full overflow-auto px-2 py-1 text-black rounded-md'
        placeholder={projectName}
        onChange={e => setProjectName(e.target.value)}
        onBlur={() => {
          document.getElementById(`edit-${itemId}`).click()
        }
        }
        autoFocus
      />
      <input type="submit" id={`edit-${itemId}`} className="hidden"></input>
    </Form>
  )
}

function DeleteForm({ itemId }) {
  return (
    <Form method="DELETE" id={`delete-${itemId}`}>
      <input name="id" value={itemId} className="hidden" readOnly />
    </Form>
  )
}


function SideBarItemButton({ form, type, name, onClickHandler, imageClass, normalIcon, hoverIcon }) {
  const [isHovered, setIsHovered] = useState(false);
  const enterHandler = () => setIsHovered(true);
  const leaveHandler = () => setIsHovered(false);

  return (
    <button
      name={name}
      form={form}
      type={type}
      onClick={onClickHandler}
      onMouseEnter={enterHandler}
      onMouseLeave={leaveHandler}
    >
      {isHovered ?
        <img className={imageClass} src={hoverIcon} />
        :
        <img className={imageClass} src={normalIcon} />
      }
    </button>
  )
}


export function SideBarListItem({ listItem }) {
  const itemId = listItem.id

  // States
  const [isEditing, setEditing] = useState(false);
  const [projectName, setProjectName] = useState(listItem.name);

  // Chek if current link is active and set button to appear/disappear
  let location = useLocation();
  let isActive = location.pathname === `/project/${itemId}`
  let buttonClass = isEditing ? "hidden" : isActive ? "w-1/6 items-center flex" : "w-1/6 items-center hidden group-hover:flex"
  let containerClass = isActive ? "bg-slate-700 rounded-md" : "hover:bg-slate-700 rounded-md"
  const imageClass = "min-w-5 max-w-5";

  return (
    <div className={containerClass}>
      <div className="group flex items-center gap-x-2">
        {/* Edit project name form or project name */}
        {
          isEditing ?
            <UpdateForm
              itemId={itemId}
              isEditing={isEditing}
              setEditing={setEditing}
              projectName={projectName}
              setProjectName={setProjectName}
              inititalName={listItem.name}
            />
            :
            <Link
              to={`/project/${itemId}`}
              className="w-full overflow-clip px-2 py-1 rounded-md"
            >
              <p className="w-full whitespace-nowrap overflow-clip">{projectName}</p>
            </Link>
        }

        {/* Edit/Submit and Delete Buttons */}
        {/* Edit/Submit Button - switch editing modes and submit form if in editting mode */}
        <div
          className={buttonClass}
        >
          <SideBarItemButton
            name="edit"
            imageClass={imageClass}
            normalIcon={editIcon}
            hoverIcon={editHoveredIcon}
            onClickHandler={() => {
              setEditing(!isEditing)
            }
            }
          />

          {/* Delete Form */}
          <DeleteForm itemId={itemId} />

          {/* Delete button - put outside form for alignment */}
          <SideBarItemButton
            form={`delete-${itemId}`}
            type="submit"
            name="delete"
            imageClass={imageClass}
            normalIcon={deleteIcon}
            hoverIcon={deleteHoveredIcon}
          />
        </div>

      </div>
    </div>
  )
}