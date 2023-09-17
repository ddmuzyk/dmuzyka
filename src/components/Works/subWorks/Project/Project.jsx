import React from "react";
import './Project.css';

const Project = ({title, description, img, live, code}) => {
  return (
    <div className="project">
      <img src={img} alt="Project Img" className="project-img"></img>
      <h2 className="project-title">{title}</h2>
      <p className="project-description">{description}</p>
      <div className="project-btns-container">
        {live ? <a href={live} target="_blank" rel="noreferrer" className="project-btn">Live</a> : null}
        <a href={code} target="_blank" rel="noreferrer" className="project-btn">Code</a>
      </div>
    </div>
  )
}

export default Project;