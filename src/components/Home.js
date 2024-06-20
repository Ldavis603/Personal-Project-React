import React from "react";

const Home = () => {
  return (
    <div className="upper-container">
      <h1>ABOUT FITNESS CONNECTION</h1>
      <p>
        Fitness Connection was created to form a community for fitness
        enthusiast, those interested in starting their fitness journey and
        anyone in between. On this site you will be able to find the exercise
        training that works for you. Weather it be strength training, cardio,
        CrossFit, flexibility, or any type of exercise that interests you.
        Create an account today to be part of a community that supports and
        uplifts you every step of the way!
      </p>
      <a href="account.html">
        <button className="join-button">JOIN NOW!</button>
      </a>
    </div>
  );
};

export default Home;
