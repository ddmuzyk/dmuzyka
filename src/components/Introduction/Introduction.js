// import React, {useRef} from "react";
import './Introduction.css'

const Introduction = ({handleClick}) => {

    // const handleClick = () => {
    //     const skilldiv = document.getElementById('skills');
    //     skilldiv.scrollIntoView({behavior: 'smooth'});
    // }

    return (
        <div className="introContainer">
            <div id='introduction' className="intro">
                <h1 className="myName">Dominik Muzyka</h1>
                <h2 className="myTitle">Web Developer</h2>
                <p className="myDescription">I am a web developer based in Wrocław, Poland. What do I do? I solve problems with code.  Embracing a spectrum of technologies, I am open to exploring different parts of software development.</p>
            </div>
        </div>
    )
}

export default Introduction