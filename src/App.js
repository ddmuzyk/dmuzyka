import React, {useState, useEffect, useRef} from 'react';
import './App.css';
import Introduction from './components/Introduction/Introduction';
import Skills from './components/Skills/Skills';
import Works from './components/Works/Works';
import Hobbies from './components/Hobbies/Hobbies';
import Contact from './components/Contact/Contact';

const App = () => {

    // const handleClick = () => {
    //     scrollToref.current.scrollIntoView({
    //         behavior: 'smooth',
    //         block: "nearest",
    //         inline: "start"
    //         });
    // };

    

    const handleClick = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({behavior: "smooth", block: "center"});
    }

    return (
        <div className='components'>
            <Introduction handleClick={handleClick}/>
            <Skills/>
            <Works/>
            <Hobbies/>
            <Contact/>
        </div>
    )
}

export default App;