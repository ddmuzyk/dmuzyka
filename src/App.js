import React from 'react';
// import { scrollIntoView } from "seamless-scroll-polyfill";
import './App.css';
import Introduction from './components/Introduction/Introduction';
import Skills from './components/Skills/Skills';
import Works from './components/Works/Works';
import Hobbies from './components/Hobbies/Hobbies';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';

const App = () => {

    // const handleClick = () => {
    //     scrollToref.current.scrollIntoView({
    //         behavior: 'smooth',
    //         block: "nearest",
    //         inline: "start"
    //         });
    // };

    

    // const handleClick = (id) => {
    //     const element = document.getElementById(id);
    //     element.scrollIntoView({behavior: "smooth", block: "end"});
    // }

    // const handleClick = (id) => {
    //     scrollIntoView(document.getElementById(id), {behavior: "smooth", block: "end"})
    // }
    const handleClick = (id) => {
      const element = document.getElementById(id);
      if (id === 'skills') {
        const skillPosition = element.offsetTop -200;
        window.scrollTo({
          top: skillPosition,
          behavior: 'smooth'
        })
      } else if ( id === 'introduction') {
        const introPosition = element.offsetTop -500;
        window.scrollTo({
          top: introPosition,
          behavior: 'smooth'
        })
      } else {
        const scrollPosition = element.offsetTop - 150;
        window.scrollTo({
          top: scrollPosition,
          behavior: 'smooth'
        })
      }
    }

    return (
        <div className='components'>
            <Navbar handleClick={handleClick}/>
            <Introduction handleClick={handleClick}/>
            <Skills/>
            <Works/>
            <Hobbies/>
            <Contact/>
        </div>
    )
}

export default App;