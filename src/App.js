import React, {useState, useEffect} from 'react';
import './App.css';
import Introduction from './components/Introduction/Introduction';
import Skills from './components/Skills/Skills';
import Works from './components/Works/Works';
import Hobbies from './components/Hobbies/Hobbies';
import Contact from './components/Contact/Contact';

const App = () => {
    return (
        <div className='components'>
            <Introduction/>
            <Skills/>
            <Works/>
            <Hobbies/>
            <Contact/>
        </div>
    )
}

export default App;