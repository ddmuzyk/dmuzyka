import { useState, useEffect, useRef } from "react";
import './index.css';

type Props = {
    handleClick: (section: string) => void;
};

const Navbar = ({ handleClick }: Props) => {

    const [open, setOpen] = useState(false);

    const menuRef = useRef(null);

    useEffect(() => {
      const handler = (e: React.MouseEvent<HTMLButtonElement>) => {
        if(!menuRef?.current.contains(e.target)){
            setOpen(false);
        }
      };

      document.addEventListener('mousedown', handler);

      return () => {
          document.removeEventListener("mousedown", handler)
      }
    });

    return (
        <nav className="navbar">
            <div className="navButtons">
                <button className="nav-button" onClick={() => handleClick("introduction")} id="navButton">ABOUT</button>
                <button className="nav-button" onClick={() => handleClick("skills")} id="navButton">SKILLS</button>
                <button className="nav-button" onClick={() => handleClick("works")} id="navButton">RECENT WORKS</button>
                <button className="nav-button" onClick={() => handleClick("hobbies")} id="navButton">INTERESTS</button>
                <button className="nav-button" onClick={() => handleClick("contact")} id="navButton">CONTACTS</button>
            </div>
            <div className='dropdown-menu' ref={menuRef}>
                <button className="dropbtn" onClick={() => setOpen(!open)} id="menu">MENU</button>
                <div className={`dropdown-content ${open ? 'active' : 'inactive'}`} id="dropdown-content">
                    <button className="dropbtn" onClick={() => handleClick("introduction")}>ABOUT</button>
                    <button className="dropbtn" onClick={() => handleClick("skills")}>SKILLS</button>
                    <button className="dropbtn" onClick={() => handleClick("works")}>RECENT WORKS</button>
                    <button className="dropbtn" onClick={() => handleClick("hobbies")}>INTERESTS</button>
                    <button className="dropbtn" onClick={() => handleClick("contact")}>CONTACTS</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;