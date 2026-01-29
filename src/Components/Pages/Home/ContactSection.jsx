import React from "react";
import "./ContactSection.css";
import { FaMapMarkerAlt, FaClock, FaPhoneAlt } from "react-icons/fa";

const ContactSection = () => {
  return (
    <div className="contact-section-wrapper">
      <div className="contact-info">
        <h2 className="contact-info-title">Information</h2>
        <div className="contact-info-item">
          <FaMapMarkerAlt className="contact-icon" />
          <div>
            <h4>Our Location</h4>
            <p>
              Fleuré Retail Store
              <br />
              559–561 Great Horton Road,
              <br />
              Bradford
              <br />
              BD7 4EF
            </p>
          </div>
        </div>
        <div className="contact-info-item">
          <FaClock className="contact-icon" />
          <div>
            <h4>Working hours</h4>
            <p>Monday – Sunday: 9am – 7pm</p>
          </div>
        </div>
        <div className="contact-info-item">
          <FaPhoneAlt className="contact-icon" />
          <div>
            <h4>Call Now</h4>
            <p>
              Give us a free call
              <br />
              07585 626 475
            </p>
          </div>
        </div>
      </div>

      <div className="contact-form">
        <h2 className="contact-form-title">Contact us</h2>
        <form>
          <div className="form-row">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <input type="email" placeholder="Email Address" />
          <input type="tel" placeholder="Phone Number" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
