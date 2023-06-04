import React from "react";
import "./Contact.css";

const Contact = () => {

    

    return (
        <div id="contact" className="contact">
            <h1 className="contactTitle">Contact me</h1>
            <div className="contacts">
                <h3>domino2k1@gmail.com</h3>
                {/* <h3>phone</h3> */}
            </div>
            <div className="linkButtons">
                <a href="https://github.com/ddmuzyk" className="linkButton">GITHUB</a>
                <a href="https://www.linkedin.com/in/dominik-muzyka/" className="linkButton">LINKEDIN</a>
            </div>
        </div>
    )
}

export default Contact;