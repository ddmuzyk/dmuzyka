import React from "react";
import "./Contact.css";

const Contact = () => {
    return (
        <div className="contact">
            <h1 className="contactTitle">/Contact me!</h1>
            <div className="contacts">
                <h3>domino2k1@gmail.com</h3>
                <h3>+507700540</h3>
            </div>
            <div className="linkButtons">
                <a href="https://github.com/ddmuzyk" className="linkButton">GITHUB</a>
                <a className="linkButton">FACEBOOK</a>
                <a className="linkButton">INSTAGRAM</a>
            </div>
        </div>
    )
}

export default Contact;