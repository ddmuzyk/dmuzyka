import React from "react";
import './Hobbies.css';

const Hobbies = () => {

    return (
        <div id="hobbies" className='hobbies'>
            <h1 className='hobbiesTitle'>My interests</h1>
            <div className='myHobbies'>
                <div className='hobbie'>
                    <h2 className='hobbieName'>Programming</h2>
                    <p className='hobbieDesc'>That's an obvious but also a most important one! I love programming and learning new technologies, especially those connected to front-end web development.</p>
                </div>
                <div className='hobbie'>
                    <h2 className='hobbieName'>Chess</h2>
                    <p className='hobbieDesc'>My favorite game that doesn't need a sequel. I even used to be a proffesional chess player when I was younger, now I play it for pure entertainment.</p>
                </div>
                <div className='hobbie'>
                    <h2 className='hobbieName'>Music</h2>
                    <p className='hobbieDesc'>Apart from enjoying numerous genres, I'm also into electronic music production for which I'm using FL Studio.</p>
                </div>
            </div>
        </div>
    )
}

export default Hobbies;