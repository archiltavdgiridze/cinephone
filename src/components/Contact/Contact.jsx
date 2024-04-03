import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact</h1>
      <div className="contact-wrapper">
        {/* <img src="https://picsum.photos/500" alt="" /> */}
        <div>
          <div className="location">
            <h3>Visit us</h3>
            <p>Gogebashvili Str #6, Shuakhevi Municipality,</p>
            <p>Adjara, Georgia</p>
          </div>
          <div>
            <h3>E-mail us</h3>
            <p>cinephoneadjaraff@gmail.com</p>
          </div>
          <div>
            <h3>Give us a call</h3>
            <p>(+995) 597 780501</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
