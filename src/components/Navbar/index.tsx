import { useState, useEffect, useRef } from "react";
import { Sections } from "../../types";
import './index.css';
import styled from "styled-components";
import { colors } from "../../common/styles/colors";

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

const S = {
  Nav: styled.nav`
    position: sticky;
    z-index: 1;
    top: 0;
    height: 65px;
    width: 100%; 
    background-color: ${colors.grey[3]};
    color: ${colors.green};
  `,
}

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
        <S.Nav>
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
        </S.Nav>
    )
}

export default Navbar;