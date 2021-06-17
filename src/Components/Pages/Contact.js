import React, { useState } from "react";
import { send } from "emailjs-com";
import validate from "./validateInfo";

const initialState = {
  contactName: "",
  contactEmail: "",
  contactPhone: "",
  contactMsg: ""
};
const Contact = () => {
  const [person, setPerson] = useState(initialState);
  const [errorMsg, setErrorMsg] = useState(initialState);

  const handleChange = e => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    // check error onsubmit
    const formErrors = validate(person);
    setErrorMsg(formErrors);
    if (Object.keys(formErrors).length) {
      return;
    } else {
      send(
        "service_l04ahvq",
        "template_vb4bwsn",
        person,
        "user_00F0mMe1Wcomq0OnZjqrF"
      ).then(
        result => {
          alert(result.text);
        },
        error => {
          alert(error.text);
        }
      );
      setPerson(initialState);
    }
  };

  return (
    <section className="container mb-4" id="contact">
      <h2 className="title">Contact us</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="contact-content">
            <h3>don't be shy</h3>
            <h6>
              Feel free to get in touch with me. I am always open to discussing
              new projects,creative ideas or opportunities to be a part of your
              visions.{" "}
            </h6>
            <div className="icons mt-4">
              <div className="row">
                <i className="fas fa-envelope"></i>
                <div className="info">
                  <div className="head">Mail me</div>
                  <div className="sub-title">ochommaflorence7@gmail.com</div>
                </div>
              </div>
            </div>
            <div className="icons mt-4">
              <div className="row">
                <i className="fa fa-phone"></i>
                <div className="info">
                  <div className="head">Call me</div>
                  <div className="sub-title">08087319083</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 mt-3">
          <form onSubmit={handleSubmit}>
            <label>First Name</label>
            <input
              id="contactName"
              type="text"
              name="contactName"
              placeholder="Enter name"
              value={person.contactName}
              onChange={handleChange}
            />
            <h5>{errorMsg.contactName}</h5>

            <label>Email</label>
            <input
              type="email"
              id="contactEmail"
              name="contactEmail"
              placeholder="Enter a vaild email address"
              value={person.contactEmail}
              onChange={handleChange}
            />
            <h5>{errorMsg.contactEmail}</h5>

            <label>Phone</label>
            <input
              type="tel"
              name="contactPhone"
              placeholder="Enter your phone number"
              value={person.contactPhone}
              onChange={handleChange}
            />
            <h5>{errorMsg.contactPhone}</h5>

            <label>Message</label>
            <textarea
              id="contactMsg"
              name="contactMsg"
              placeholder="Enter your message"
              value={person.contactMsg}
              onChange={handleChange}
            ></textarea>
            <h5>{errorMsg.contactMsg}</h5>
            <button type="submit" className="form-input-btn">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
