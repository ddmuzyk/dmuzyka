import React from "react";
import './Introduction.css'

const Introduction = () => {
    return (
        <div className="introContainer">
            <div className="intro">
                <h1 className="myName">Dominik Muzyka</h1>
                <h2 className="myTitle">Front-end Web Developer</h2>
                <p className="myDescription">I'm from Poland and my biggest passion is web development. Follow me and stay updated on my latest projects!</p>
                <div className="buttons">
                    <button id="buttonScroll">/SKILLS</button>
                    <button id="buttonScroll">/RECENT WORKS</button>
                    <button id="buttonScroll">/HOBBIES</button>
                    <button id="buttonScroll">/CONTACTS</button>
                </div>
            </div>
        </div>
    )
}

export default Introduction