import React, { useState } from "react";

const Account = () => {
  const heading = {
    display: "flex",
    fontSize: "1.6rem",
    color: "teal",
    fontWeight: 300,
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
    fontWeight: "bold",
    paddingTop: 20,
  };

  const btnStyle = {
    display: "flex",
    justifyContent: "center",
    background: "orangered",
    color: "white",
    borderRadius: "10px",
    alignContent: "center",
  };

  const [isSigningUp, setIsSigningUp] = useState(false);

  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(userInfo));
    const body = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    fetch("http://localhost:4000/api/authRoutes/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      });
  };

  const handleSignUpRequest = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(userInfo));
    const body = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      username: e.target.username.value,
      password: e.target.password.value,
    };

    fetch("http://localhost:4000/api/authRoutes/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <>
      <div
        className="container"
        style={{
          background: "linear-gradient(#ffffff, #009e9e)",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <button onClick={() => setIsSigningUp(false)}>Sign In</button>
        <button onClick={() => setIsSigningUp(true)}>Sign Up</button>
        {isSigningUp ? (
          <form
            onSubmit={handleSignUpRequest}
            style={{
              border: "4px solid teal,",
              borderRadius: "10px",
              padding: "20px",
            }}
          >
            <div className="upper-container" style={{
          background: "linear-gradient(#ffffff, #009e9e)",
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          border: "2px solid teal",
          padding: 20,
          borderRadius: '10px'
          // alignItems: "center",
        }}>
              <h1 style={heading}>SIGN UP</h1>
              <label htmlFor="firstName">
                <b>First Name</b>
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="Enter First Name"
                name="firstName"
                required
              />
              <label htmlFor="lastName">
                <b>Last Name</b>
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="Enter Last Name"
                name="lastName"
                required
              />

              <label htmlFor="username">
                <b>Username</b>
              </label>
              <input
                id="username"
                type="text"
                placeholder="Enter Username"
                name="username"
                required
              />
              <label htmlFor="password">
                <b>Password</b>
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter Password"
                name="password"
                required
              />
              <label htmlFor="password-repeat">
                <b>Repeat Password</b>
              </label>
              <input
                type="password"
                placeholder="Repeat Password"
                name="password-repeat"
                required
              />
              <label>
                <input
                  type="checkbox"
                  name="remember"
                  style={{ marginBottom: "15px" }}
                />{" "}
                Remember me
              </label>
              <div className="sign-up">
                <button type="submit" className="signupbtn" style={btnStyle}>
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        ) : (
          <form onSubmit={handleLogin}>
            <div className="container" style={{
          background: "linear-gradient(#ffffff, #009e9e)",
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          border: "2px solid teal",
          padding: 20,
          borderRadius: '10px',
          marginTop: 20,
          // alignItems: "center",
        }}>
              <h1 style={heading}>SIGN IN</h1>
              <label htmlFor="username">
                <b>Username</b>
              </label>
              <input
                id="username"
                type="text"
                placeholder="Username"
                name="username"
                required
              />
              <label htmlFor="password">
                <b>Password</b>
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter Password"
                name="password"
                required
              />
              <label>
                <input
                  type="checkbox"
                  name="remember"
                  style={{ marginBottom: "15px" }}
                />{" "}
                Remember me
              </label>
              <div className="sign-in">
                <button type="submit" className="signupbtn" style={btnStyle}>
                  Sign In
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default Account;
