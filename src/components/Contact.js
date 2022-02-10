import React from "react";
import contactImage from "../assets/borgir.jpg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${contactImage})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form method="Post">
          <label htmlFor="name">Full Name</label>
          <input
            name="name"
            type="text"
            placeholder="Enter your Full Name here"
          />
          <label htmlFor="email">Email</label>
          <input name="name" type="email" placeholder="Enter your Email here" />
          <label htmlFor="message">Message</label>
          <textarea name="name" placeholder="Lets Talk!!!" rows={7} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
