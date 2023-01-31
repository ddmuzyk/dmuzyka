import React from "react";
import './Navbar.css';

const Navbar = ({handleClick}) => {
    return (
        <div className="navbar">
            <div className="navButtons">
                <button onClick={() => handleClick("introduction")} id="navButton">/Intro</button>
                <button onClick={() => handleClick("skills")} id="navButton">/SKILLS</button>
                <button onClick={() => handleClick("works")} id="navButton">/RECENT WORKS</button>
                <button onClick={() => handleClick("hobbies")} id="navButton">/HOBBIES</button>
                <button onClick={() => handleClick("contact")} id="navButton">/CONTACTS</button>
            </div>
        </div>
    )
}

export default Navbar;