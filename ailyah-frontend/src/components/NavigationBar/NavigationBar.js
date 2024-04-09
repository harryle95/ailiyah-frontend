import React, { useState } from 'react';
import './styledNavigationBar.css';
import trash from 'bootstrap-icons/icons/trash.svg';

const NavigationBar = () => {
  const [projects, setProjects] = useState([]);
  const [newProjectName, setNewProjectName] = useState('');

  const handleAddNewProject = () => {
    const defaultProjectName = "New Project";
    const newProject = {
      name: defaultProjectName,
      // 可以添加其他属性，如项目ID、图标等
    };
    setProjects([newProject, ...projects]); // 将新项目插入到列表的开头
  };

  const handleDeleteProject = (index) => {
    const updatedProjects = [...projects];
    updatedProjects.splice(index, 1);
    setProjects(updatedProjects);
  };

  const handleEditProjectName = (index) => {
    // 编辑项目名称的逻辑
  };

  return (
    <nav className="navbar">
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <span className="project-name">{project.name}</span>
            <img src={trash} className="icon" onClick={() => handleDeleteProject(index)} alt="Delete" />
            <span className="icon" onClick={() => handleEditProjectName(index)}>Edit Name</span>
          </li>
        ))}
        <li>
          <button className="new-project-button" onClick={handleAddNewProject}>New Project +</button>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
