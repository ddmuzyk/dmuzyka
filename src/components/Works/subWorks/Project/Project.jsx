import React from "react";
import './Project.css';

const Project = ({title, description}) => {
  return (
    <div className="project">
      <h2 className="projectName">{title}</h2>
      <p className="projectDesc">{description}</p>
    </div>
  )
}

export default Project;