import React, { useState } from "react";

const Account = () => {
  const [isSigningUp, setIsSigningUp] = useState(false);
  return (
    <div>
      <button onClick={() => setIsSigningUp(false)}>Sign In</button>
      <button onClick={() => setIsSigningUp(true)}>Sign Up</button>
      <form action="/action_page.php" style={{ border: "1px solid #ccc" }}>
        {isSigningUp ? (
          <div className="container">
            <h1>Sign Up</h1>
            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              required
            />
            <label htmlFor="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
            />
            <label htmlFor="psw-repeat">
              <b>Repeat Password</b>
            </label>
            <input
              type="password"
              placeholder="Repeat Password"
              name="psw-repeat"
              required
            />
            <label>
              <input
                type="checkbox"
                checked="checked"
                name="remember"
                style={{ marginBottom: "15px" }}
              />{" "}
              Remember me
            </label>
            <div className="sign-up">
              <button type="submit" className="signupbtn">
                Sign Up
              </button>
            </div>
          </div>
        ) : (
          <div className="container">
            <h1>Sign In</h1>
            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              required
            />
            <label htmlFor="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
            />
            <label>
              <input
                type="checkbox"
                checked="checked"
                name="remember"
                style={{ marginBottom: "15px" }}
              />{" "}
              Remember me
            </label>
            <div className="sign-in">
              <button type="submit" className="signupbtn">
                Sign In
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default Account;
