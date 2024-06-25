import React from "react";

const Contact = () => {

  const formStyle= {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    width: 350,
    justifyContent: 'center ',
    borderRadius: '20px',
    border: '4px solid',
    borderColor: 'teal'

  };

  const btnStyle={
    display: 'flex',
    justifyContent: 'center',
      background: 'orangered',
      paddingLeft: 10 ,
      marginTop: 5,
      marginBottom: 5,
      width: 50,
      color: 'white',
      borderRadius: '10px',
  }

  const heading ={
    color: 'teal',
    fontWeight: 'bold',

  }
  return (
    <div className="container" style={{background: "linear-gradient(#ffffff, #009e9e)", height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h1 style={heading}>CONTACT US</h1>
      <form style ={formStyle}>
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
        {/* <input type="submit" value="Submit" /> */}
        <button type="submit" style={btnStyle}>Submit</button>
        <a className="emailLink" href="mailto:example@gmail.com">
          Email Us
        </a>
      </form>
    </div>
  );
};

export default Contact;
