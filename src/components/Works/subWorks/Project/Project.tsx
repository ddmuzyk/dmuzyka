import {useState} from "react";
import './Project.css';

const Project = ({title, description, img, live, code, hover_color}) => {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="project"
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    style={{boxShadow: isHovered ? `0px 0px 24px -7px ${hover_color}` : undefined}}
    >
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