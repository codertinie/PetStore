import React from "react";
import developerPng from "./images/developer-png.png";

const Contact = () => {
  return (
    <div className="contactUs-main-container">
      <div className="contactUs-left-para">
        <h3>Let's get in touch</h3>
        <i class="fa fa-envelope"></i>
        <a class="mail-links" href="mailto:musyokicecilia5@gmail">
          musyokicecilia5@gmail
        </a>

        <i class="fa fa-linkedin"></i>
        <a class="mail-links" href="www.linkedin.com/in/cecilia-musyoki-10b34a2b7">
          User Name: Cecilia musyoki
        </a>

        <i class="fa fa-github"></i>
        <a class="mail-links" href="#">
          Cecilia
        </a>

        <i class="fa fa-instagram"></i>
        <a class="mail-links" href="#">
          @cecilia
        </a>

        <i class="fa fa-phone"></i>
        <a class="mail-links" href="tel:+254758070895">
          +254758070895
        </a>
      </div>
      <div className="contactUs-pic">
        <img src={developerPng} alt="Profile"/>
      </div>
    </div>
  );
};

export default Contact;
