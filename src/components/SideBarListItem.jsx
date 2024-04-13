/* eslint-disable react/prop-types */
import { NavLink, Form, useLocation } from "react-router-dom";
import deleteIcon from "../resources/delete.png";
import editIcon from "../resources/edit.png";
import { useState } from "react";


export function SideBarListItem({ listItem }) {
  const itemId = listItem.id
  const itemName = listItem.name
  const [isEditing, setEditing] = useState(false);
  const [projectName, setProjectName] = useState(listItem.name);

  let location = useLocation();

  let isActive = location.pathname === `/project/${itemId}`
  let buttonClass = isActive?"w-1/6 items-center flex":"w-1/6 items-center hidden group-hover:flex"

  return (
    <div className="group flex items-center gap-x-2">
      {/* Edit project name form or project name */}
      {
        isEditing ?
          <Form method="PUT" onSubmit={() => setEditing(!isEditing)}>
            <input name="id" value={itemId} className="hidden" readOnly />
            <input
              name="name"
              type="text"
              className='w-full overflow-auto px-2 py-1 text-black rounded-md'
              placeholder={projectName}
              onChange={e => setProjectName(e.target.value)}
            />
            <input type="submit" id={`edit-${itemId}`} className="hidden"></input>
          </Form> :
          <NavLink
            id={`project/${itemId}`}
            to={`/project/${itemId}`}
            className={({ isActive }) => isActive ?
              "w-full overflow-clip px-2 py-1 rounded-md border-[#c432f5] border-solid border-2 active"
              :
              "w-full overflow-clip px-2 py-1 rounded-md"
            }
          >
            <p className="w-full whitespace-nowrap overflow-clip">{itemName}</p>
          </NavLink>
      }

      {/* Edit and Delete Buttons */}
      {/* Edit Button - switch editing modes and submit form if in editting mode */}
      <div
        className={buttonClass}
      >
        {
          isEditing ?
            <button
              name="submit"
              onClick={() => document.getElementById(`edit-${itemId}`).click()}
            >
              <img className="min-w-5 max-w-5" src={editIcon} alt="editIcon" />
            </button> :
            <button
              name="edit"
              onClick={() => { setEditing(!isEditing); console.log(isEditing) }}
            >
              <img className="min-w-5 max-w-5" src={editIcon} alt="editIcon" />
            </button>
        }


        {/* Delete Button */}
        <Form method="DELETE" id={`delete-${itemId}`}>
          <input name="id" value={itemId} className="hidden" readOnly />
        </Form>

        {/* Delete button - put outside form for alignment */}
        <button form={`delete-${itemId}`} type="submit">
          <img src={deleteIcon} className="min-w-5 max-w-5" alt="deleteIcon" />
        </button>
      </div>

    </div>
  )
}