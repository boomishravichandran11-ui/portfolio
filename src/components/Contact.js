import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="portfolio-section">
      <div className="container">
        <h2>Contact Me</h2>
        <div className="contact-form">
          <form>
            <div>
              <input type="text" placeholder="Your Name" required />
            </div>
            <div>
              <input type="email" placeholder="Your Email" required />
            </div>
            <div>
              <input type="tel" placeholder="Phone Number (Optional)" />
            </div>
            <div>
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <div>
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;