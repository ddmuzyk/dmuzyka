import React from "react";
import './Project.css';

const Project = ({title, description, img, live, code}) => {
  return (
    <div className="project">
      <img src={img} alt="Project Img" className="project-img"></img>
      <h2 className="project-title">{title}</h2>
      <p className="project-description">{description}</p>
      <div className="project-btns-container">
        <a href={live} className="project-btn">Live</a>
        <a href={code} className="project-btn">Code</a>
      </div>
    </div>
  )
}

export default Project;