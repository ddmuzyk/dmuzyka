import { useState, useEffect, useRef } from "react";
import { Sections } from "../../types";
import './index.css';

type Props = {
    handleClick: (section: Sections) => void;
};

const sections = [
    { name: "ABOUT", section: Sections.INTRODUCTION },
    { name: "SKILLS", section: Sections.SKILLS },
    { name: "RECENT WORKS", section: Sections.WORKS },
    { name: "INTERESTS", section: Sections.HOBBIES },
    { name: "CONTACTS", section: Sections.CONTACT }
];

const Navbar = ({ handleClick }: Props) => {
    const [open, setOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handler = (e: MouseEvent) => {
        if (menuRef.current && e.target instanceof Node && !menuRef.current.contains(e.target)){
          setOpen(false);
        }
      };

      document.addEventListener('mousedown', handler);

      return () => {
          document.removeEventListener("mousedown", handler)
      }
    }, []);

    const dropDownContentClass = open ? 'active' : 'inactive';

    return (
        <nav>
          <ul>
            {sections.map((item) => (
                <li key={item.section}>
                    <button className="nav-button" onClick={() => handleClick(item.section)}>
                        {item.name}
                    </button>
                </li>
            ))}
          </ul>
            <div className='dropdown-menu' ref={menuRef}>
              <button className="dropbtn" onClick={() => setOpen(!open)} id="menu">MENU</button>
              <ul className={`dropdown-content ${dropDownContentClass}`}>
                {sections.map((item) => (
                    <li key={item.section}>
                        <button className="dropbtn" onClick={() => {
                            handleClick(item.section);
                            setOpen(false);
                        }}>
                            {item.name}
                        </button>
                    </li>
                ))}
              </ul>
            </div>
        </nav>
    )
}

export default Navbar;