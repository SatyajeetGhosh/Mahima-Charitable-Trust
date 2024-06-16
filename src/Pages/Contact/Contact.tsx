import React from "react";

const Contact = () => {
  return (
    <div className="contact-container">
      <section className="help-section">
        <h2>Help Us Make a difference...</h2>
        <h2>Help Us Make a difference!</h2>
        <div className="help-container">
          <div className="join">
            <h3>Join Us</h3>
            <p>
              Want to be a part of the change, fill the form to become a
              volunteer. We will reach out to you as soon as possible.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdrCk9_Kk0pUh36nhGJOZiajsesythmsoFLczNAa2TYSjkcyQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Us
            </a>
          </div>
          <div className="support">
            <h3>Support Us</h3>
            <p>
              Happiness doesn't result from what we get, but from what we give
              so donate any form of kindness.
            </p>
            <div className="btn-container">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfvLQEJ9D58Q5BN5LY_KzWH5GG6TYe4vDRS3f2hP1_uOBI8Dw/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                Others
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
