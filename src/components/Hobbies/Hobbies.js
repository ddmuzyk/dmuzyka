import React from "react";
import './Hobbies.css';

const Hobbies = () => {

    return (
        <div id="hobbies" className='hobbies'>
            <h1 className='hobbiesTitle'>My interests</h1>
            <div className='myHobbies'>
                <div className='hobbie'>
                    <h2 className='hobbieName'>Programming</h2>
                    <p className='hobbieDesc'>It probably goes without saying. I thrive on the challenges and creativity that programming offers, and I believe that it changed the way I think even outside the coding editor.</p>
                </div>
                <div className='hobbie'>
                    <h2 className='hobbieName'>Chess</h2>
                    <p className='hobbieDesc'>As an avid chess enthusiast, I find great joy in this game of strategic thinking and analytical prowess. Having honed my skills as a professional chess player in my younger years, I now engage in chess purely for its intellectual stimulation and sheer enjoyment. Exploring the intricacies of the game and participating in online matches continue to be a rewarding and cherished aspect of my life.</p>
                </div>
                <div className='hobbie'>
                    <h2 className='hobbieName'>Music</h2>
                    <p className='hobbieDesc'>I have a profound appreciation for various genres of music, and I am actively engaged in the art of electronic music production using FL Studio. Exploring the intricacies of sound and rhythm fuels my creative expression, allowing me to craft immersive and captivating musical compositions.</p>
                </div>
            </div>
        </div>
    )
}

export default Hobbies;