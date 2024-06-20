import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <form>
        <label htmlFor="fname">First Name</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="First Name"
        />

        <label htmlFor="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Last Name" />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="SEND A MESSAGE"
          style={{ height: "200px" }}
        ></textarea>
        <input type="submit" value="Submit" />
        <a className="emailLink" href="mailto:example@gmail.com">
          Email Us
        </a>
      </form>
    </div>
  );
};

export default Contact;
