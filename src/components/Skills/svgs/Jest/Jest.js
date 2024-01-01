import React from "react";
import jestImg from "./jest.png";
import "./Jest.css";

const Jest = () => {
  return (
    <>
      <img className="skill-img" src={jestImg} alt="Jest"></img>
      <h3 className="iconName">Testing</h3>
    </>
  )
}

export default Jest;