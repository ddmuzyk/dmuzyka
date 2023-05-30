import React from "react";
import './Project.css';

const Project = ({title, description, img}) => {
  return (
    <div className="project">
      <img src={img} alt="Project Img" className="project-img"></img>
      <h2 className="project-title">{title}</h2>
      <p className="project-description">{description}</p>
    </div>
  )
}

export default Project;