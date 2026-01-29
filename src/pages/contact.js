import React from "react";
import "./contact.css";
import "./home.css"; // for header/navbar styles

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted (no backend connected)");
    e.target.reset();
  };

  return (
    <>
      <section className="contact">
        <div className="header">
          <h2>📬 Contact Us</h2>
          <p>Fraudhunt - Report scams or suspicious activity using the form below.</p>
        </div>

        <div className="container">
          <div className="info_container">
            <div className="location info_item">
              <div className="icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="information">
                <h4>Location:</h4>
                <p>12 Church Street, New York, USA</p>
              </div>
            </div>

            <div className="email info_item">
              <div className="icon">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="information">
                <h4>Email:</h4>
                <p>fraudhunt@gmail.com</p>
              </div>
            </div>

            <div className="call info_item">
              <div className="icon">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className="information">
                <h4>Call:</h4>
                <p>+1-9009-8008-70</p>
              </div>
            </div>

            <div className="open_hours info_item">
              <div className="icon">
                <i className="fa-solid fa-globe"></i>
              </div>
              <div className="information">
                <h4>Website:</h4>
                <p>www.fraudhunt.com</p>
              </div>
            </div>
          </div>

          <div className="input_container">
            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="row">
                <input
                  type="text"
                  className="form_control"
                  name="name"
                  placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  className="form_control"
                  name="email"
                  placeholder="Email Address"
                  required
                />
              </div>
              <input
                type="text"
                className="form_control"
                name="subject"
                placeholder="Subject"
                required
              />
              <textarea
                name="message"
                className="form_control"
                cols="30"
                rows="7"
                placeholder="Message"
                required
              ></textarea>
              <div className="btn1">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
