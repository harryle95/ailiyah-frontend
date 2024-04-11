/* eslint-disable react/prop-types */
import { NavLink, Form } from "react-router-dom";
import deleteIcon from "../resources/delete.png";
import editIcon from "../resources/edit.png";
import { useState } from "react";

export function SideBarListItem({ listItem }) {
  const itemId = listItem.id
  const itemName = listItem.name
  const [isEditing, setEditing] = useState(false);
  const [projectName, setProjectName] = useState(listItem.name);
  return (
    <div className="flex items-center gap-x-2">
      {/* Edit project name form or project name */}
      {
        isEditing ?
          <Form method="PUT">
            <input name="id" value={itemId} className="hidden" readOnly />
            <input
              name="name"
              type="text"
              className='w-full overflow-auto px-2 py-1 text-black rounded-md'
              placeholder={projectName}
              onChange={e => setProjectName(e.target.value)}
            />
            <button type="submit" className='hidden' id={`edit-${itemId}`} />
          </Form> :
          <NavLink
            to={`/project/${itemId}`}
            className={({ isActive }) => {
              let base = "w-full overflow-clip px-2 py-1 border-[#c432f5] border-solid "
              if (isActive) {
                return base + "border-2 rounded-md"
              } else {
                return base
              }
            }}
          >
            <p className="w-full whitespace-nowrap overflow-clip">{itemName}</p>
          </NavLink>
      }

      {/* Edit and Delete Buttons */}
      {/* Edit Button - switch editing modes and submit form if in editting mode */}
      <div className="w-1/6 flex items-center">
        <button
          type="submit"
          form={`edit-${itemId}`}
          onClick={(e) => {
            if (isEditing) {
              
              document.getElementById(`edit-${itemId}`).click()
            }else{
              e.preventDefault()
            }
            setEditing(!isEditing)
          }
          }
        >
          <img className="min-w-5 max-w-5" src={editIcon} alt="editIcon" />
        </button>

        {/* Delete Button */}
        <Form method="DELETE" id={`delete-${itemId}`}>
          <input name="id" value={itemId} className="hidden" readOnly />
        </Form>

        {/* Delete button - put outside form for alignment */}
        <button form={`delete-${itemId}`} type="submit">
          <img src={deleteIcon} className="min-w-5 max-w-5" alt="deleteIcon"/>
        </button>
      </div>

    </div>
  )
}