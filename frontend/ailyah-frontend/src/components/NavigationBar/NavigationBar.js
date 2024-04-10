import React, { useState } from 'react';
import './styledNavigationBar.css';
import trashIcon from '../../assets/icons/delete.png';
import editIcon from '../../assets/icons/edit.png';
import logo from '../../assets/icons/logo.png';

const NavigationBar = () => {
  const [projects, setProjects] = useState([]);
  const [newProjectName, setNewProjectName] = useState('');

  const handleAddNewProject = () => {
    const defaultProjectName = "New Project";
    const newProject = {
      name: defaultProjectName,
      // 可以添加其他属性，如项目ID、图标等
    };
    setProjects([newProject, ...projects]);
  };

  const handleDeleteProject = (index) => {
    const updatedProjects = [...projects];
    updatedProjects.splice(index, 1);
    setProjects(updatedProjects);
  };

  const handleEditProjectName = (index) => {
    // 获取当前项目的名称
    const currentProjectName = projects[index].name;
    
    // 使用 prompt 弹出一个对话框让用户输入新的项目名称
    const newProjectName = prompt("Enter new project name:", currentProjectName);
  
    // 检查用户是否输入了新的项目名称
    if (newProjectName !== null) {
      // 更新项目名称
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
      <button className="user-weidget">User</button>
    </nav>
  );
}

export default NavigationBar;
