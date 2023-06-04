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
                <h2 className="myTitle">Front-end Web Developer</h2>
                <p className="myDescription">I am a web developer based in Poland, deeply passionate about crafting exceptional web experiences. With a strong focus on front-end development, I combine technical expertise with creative problem-solving to deliver impactful digital solutions. Through my website, you can explore my latest projects and witness my commitment to pushing the boundaries of web development. Join me on this exciting journey as I strive to create visually stunning and user-friendly websites that leave a lasting impression.</p>
                {/* <div className="buttons">
                    <button onClick={() => handleClick("skills")} id="buttonScroll">/SKILLS</button>
                    <button onClick={() => handleClick("works")} id="buttonScroll">/RECENT WORKS</button>
                    <button onClick={() => handleClick("hobbies")} id="buttonScroll">/HOBBIES</button>
                    <button onClick={() => handleClick("contact")} id="buttonScroll">/CONTACTS</button>
                </div> */}
            </div>
        </div>
    )
}

export default Introduction