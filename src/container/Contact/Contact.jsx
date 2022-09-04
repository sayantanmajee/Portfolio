import React, { useState } from "react";
import { AppWrap } from "../../wrapper";
import "./Contact.scss";
import { client } from "../../client";

function Contact() {
  const contact_intro =
    "If you’d like to chat about a project or would like to hire me or just have question, please fill in the form below. I aim to get back within 1 days.";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  //destructuring
  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault()

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };
    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };

  return (
    <div className="app__contact-wrapper">
      <div className="app__contact-head">
        <h2 className="head-text">Get in Touch</h2>
        <div className="app__horizontal-bar" />
        <p className="p-text">{contact_intro}</p>
      </div>

      <div className="app__contact-cards">
        <div className="app__contact-card"></div>
      </div>

      {!isFormSubmitted ? (
        <div className="app__contact-form app__flex">
          <form onSubmit={handleSubmit} className="contact__form">
            <div className="app__flex contact__form-field">
              <label className="form-label" for="name">
                Name<strong style={{color: 'red'}}>*</strong>
              </label>
              <input
                type="text"
                style={{ textTransform: 'capitalize'}}
                className="p-text form-input"
                placeholder="eg, Pratap Singh"
                name="name"
                value={name}
                id="name"
                required
                onChange={handleChangeInput}
              />
            </div>
            <div className="app__flex contact__form-field">
              <label className="form-label" for="email">
                Email<strong style={{color: 'red'}}>*</strong>
              </label>
              <input
                type="email"
                style={{ textTransform: 'lowercase'}}
                className="p-text form-input"
                id="email"
                placeholder="prataps@email.com"
                name="email"
                value={email}
                required
                onChange={handleChangeInput}
              />
            </div>
            <div className="app__flex contact__form-field">
              <label className="form-label" for="message">
                Message
              </label>
              <textarea
                className="p-text form-input about-btn"
                placeholder="Type Here..."
                name="message"
                id="message"
                value={message}
                cols="40"
                rows="5"
                onChange={handleChangeInput}
              ></textarea>
            </div>
            <div className="form-btn">
              <button type="submit" className="p-text generic_btn">
                {loading ? "Sending.." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="app__contact-thanks">
          <h3 className="head-text">Thank you for the message!</h3>
        </div>
      )}
    </div>
  );
}

export default AppWrap(Contact, "Contact", "app__contact");
