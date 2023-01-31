// import React, {useRef} from "react";
import './Introduction.css'

const Introduction = ({handleClick}) => {

    // const handleClick = () => {
    //     const skilldiv = document.getElementById('skills');
    //     skilldiv.scrollIntoView({behavior: 'smooth'});
    // }

    return (
        <div className="introContainer">
            <div className="intro">
                <h1 className="myName">Dominik Muzyka</h1>
                <h2 className="myTitle">Front-end Web Developer</h2>
                <p className="myDescription">I'm from Poland and my biggest passion is web development. Follow me and stay updated on my latest projects!</p>
                <div className="buttons">
                    <button onClick={() => handleClick("skills")} id="buttonScroll">/SKILLS</button>
                    <button onClick={() => handleClick("works")} id="buttonScroll">/RECENT WORKS</button>
                    <button onClick={() => handleClick("hobbies")} id="buttonScroll">/HOBBIES</button>
                    <button onClick={() => handleClick("contact")} id="buttonScroll">/CONTACTS</button>
                </div>
            </div>
        </div>
    )
}

export default Introduction