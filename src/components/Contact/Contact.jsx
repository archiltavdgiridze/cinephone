import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact</h1>
      <div className="contact-wrapper">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1028.6711423251847!2d42.19022700647591!3d41.626587160380154!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x405d5b8c79434107%3A0x306ec2b58be08dc4!2sShuakhevi%20municipal%20office!5e1!3m2!1sen!2sge!4v1712178551451!5m2!1sen!2sge"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div>
          <div className="location_info">
            <h3>Visit us</h3>
            <p>Gogebashvili Str #6, Shuakhevi Municipality,</p>
            <p>Adjara, Georgia</p>
          </div>
          <div>
            <h3>E-mail us</h3>
            <a href="mailto: cinephoneadjaraff@gmail.com">
              cinephoneadjaraff@gmail.com
            </a>
          </div>
          <div>
            <h3>Give us a call</h3>
            <a href="tel:+995597780501">+995 597 780 501</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
