import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div id="contact">
      <section className="contact-section">
        <div className="map-container">
          <iframe
            width="100%"
            height="100%"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.391599987681!2d67.14294437393598!3d24.884620744293052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339999ea08443%3A0x3c7b8986abed7d76!2sShah%20Faisal%20Colony%20Bridge%20(IN)!5e0!3m2!1sen!2s!4v1730124980548!5m2!1sen!2s"
            style={{ filter: "contrast(1.2) opacity(0.4)" }}
          />
        </div>
        <div className="contact-container">
          <div className="contact-form">
            <h2 className="contact-title">Contact Us</h2>
            <p className="contact-description">Contact for hire or to get in touch</p>
            <div className="input-group">
              <label htmlFor="email" className="input-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="input-field"
              />
            </div>
            <div className="input-group">
              <label htmlFor="message" className="input-label">Message</label>
              <textarea
                id="message"
                name="message"
                className="textarea-field"
                defaultValue=""
              />
            </div>
            <button className="submit-button">Send</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
