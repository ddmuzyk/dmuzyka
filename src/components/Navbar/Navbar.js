import React, {useState, useEffect, useRef} from "react";
import './Navbar.css';

const Navbar = ({handleClick}) => {

    const [open, setOpen] = useState(false);

    let menuRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            if(!menuRef.current.contains(e.target)){
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', handler);

        return () => {
            document.removeEventListener("mousedown", handler)
        }
    });

    // const toggleDropdown = () => {
    //     document.getElementById("dropdown-content").classList.toggle("show");
    // }

    return (
        <div className="navbar">
            <div className="navButtons">
                <button onClick={() => handleClick("introduction")} id="navButton">ABOUT</button>
                <button onClick={() => handleClick("skills")} id="navButton">SKILLS</button>
                <button onClick={() => handleClick("works")} id="navButton">RECENT WORKS</button>
                <button onClick={() => handleClick("hobbies")} id="navButton">INTERESTS</button>
                <button onClick={() => handleClick("contact")} id="navButton">CONTACTS</button>
            </div>
            <div className='dropdown-menu' ref={menuRef}>
                <button onClick={() => setOpen(!open)} id="menu">MENU</button>
                <div className={`dropdown-content ${open? 'active' : 'inactive'}`} id="dropdown-content">
                    <button className="dropbtn" onClick={() => handleClick("introduction")}>ABOUT</button>
                    <button className="dropbtn" onClick={() => handleClick("skills")}>SKILLS</button>
                    <button className="dropbtn" onClick={() => handleClick("works")}>RECENT WORKS</button>
                    <button className="dropbtn" onClick={() => handleClick("hobbies")}>INTERESTS</button>
                    <button className="dropbtn" onClick={() => handleClick("contact")}>CONTACTS</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;