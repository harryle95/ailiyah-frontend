import React, { useState } from 'react';
import './styledNavigationBar.css';
import trashIcon from '../../assets/icons/delete.png';
import editIcon from '../../assets/icons/edit.png';
import logo from '../../assets/icons/logo.png';
import userAvatar from '../../assets/icons/user.png';

const NavigationBar = () => {
  const [projects, setProjects] = useState([]);
  const [newProjectName, setNewProjectName] = useState('');

  const handleAddNewProject = () => {
    const defaultProjectName = "New Project";
    const newProject = {
      name: defaultProjectName,
    };
    setProjects([newProject, ...projects]);
  };

  const handleDeleteProject = (index) => {
    const updatedProjects = [...projects];
    updatedProjects.splice(index, 1);
    setProjects(updatedProjects);
  };

  const handleEditProjectName = (index) => {
    // get current project name
    const currentProjectName = projects[index].name;
    
    // pop up a window to let user to enter the name
    const newProjectName = prompt("Enter new project name:", currentProjectName);
  
    // check if user enter a name
    if (newProjectName !== null) {
      // update the name of the current project
      const updatedProjects = [...projects];
      updatedProjects[index].name = newProjectName;
      setProjects(updatedProjects);
    }
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} className="logo" alt="Logo" />
        <span className="group-name">AILYAH</span>
      </div>
      <ul>
        {projects.map((project, index) => (
          <li key={index} className="list-item">
            <span className="project-name">{project.name}</span>
            <img src={trashIcon} className="icon" onClick={() => handleDeleteProject(index)} alt="Delete" />
            <img src={editIcon} className="icon" onClick={() => handleEditProjectName(index)} alt="Edit"/>
          </li>
        ))}
        <li>
          <button className="new-project-button" onClick={handleAddNewProject}>New Project +</button>
        </li>
      </ul>
      <button className="user-widget">
        <img src={userAvatar} alt="User Avatar" className="avatar" />
        <span className="text">User</span>
      </button>
    </nav>
  );
}

export default NavigationBar;
