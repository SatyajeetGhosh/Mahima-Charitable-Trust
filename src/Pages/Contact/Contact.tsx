import React from "react";
import { Button, Form, Input } from "antd";
import { FaPhoneAlt, FaGlobeAfrica } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./Contact.scss";

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
      <section className="contact-section">
        <div className="contact-form">
          <h2 className="contact-sub-heading">Get In Touch</h2>
          <Form>
            <div>
              <Form.Item
                name="name"
                rules={[{ required: true, message: "Please enter your Name" }]}
              >
                <Input placeholder={"Name"} />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[{ required: true, message: "Please enter your Email" }]}
              >
                <Input placeholder={"Email"} />
              </Form.Item>
            </div>
            <Form.Item
              name="name"
              rules={[{ required: true, message: "Please enter Subject" }]}
            >
              <Input placeholder={"Subject"} />
            </Form.Item>
            <Form.Item
              name="message"
              rules={[{ required: true, message: "Please enter your Message" }]}
            >
              <Input.TextArea placeholder={"Message"} rows={4} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="trust-details">
          <h2 className="contact-sub-heading">Contact Us</h2>
          <div>
            <div className="google-maps-container">
              <iframe
                title="Mahima Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.458404975592!2d77.6023886736924!3d13.006454414115959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1656ac5424d1%3A0x243cf79b92636f20!2sMahima%20Charitable%20Trust!5e0!3m2!1sen!2sin!4v1691475373296!5m2!1sen!2sin"
                loading="lazy"
                style={{ border: 0 }}
                allowFullScreen
              ></iframe>
            </div>
            <div className="mahima-details-container">
              <div className="mahima-details">
                <FaPhoneAlt />
                <div>+91 9535447505</div>
              </div>
              <div className="mahima-details">
                <MdEmail />
                <div>mctbangalore@gmail.com</div>
              </div>
              <div className="mahima-details">
                <FaGlobeAfrica />
                <div>mahimaCharitabletrust.org</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
