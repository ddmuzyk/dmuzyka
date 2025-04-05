import "./Contact.css";

const Contact = () => {

    return (
        <div id="contact" className="contact">
            <h1 className="contactTitle">Contact me</h1>
            <div className="contacts">
                <a className="email" href="mailto:domino2k1@gmail.com">domino2k1@gmail.com</a>
            </div>
            <div className="linkButtons">
                <a href="https://github.com/ddmuzyk" className="linkButton">GITHUB</a>
                <a href="https://www.linkedin.com/in/dominik-muzyka/" className="linkButton">LINKEDIN</a>
            </div>
        </div>
    )
}

export default Contact;