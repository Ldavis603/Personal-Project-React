/* eslint-disable no-dupe-keys */
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const heading = {
    display: 'flex',
    fontSize: '1.6rem',
    color: 'teal',
    fontWeight: 300, 
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: "bold",
  };

  const pStyle = {
    display: 'flex',
      fontSize:  '1.0rem',
      textAlign: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      border: '4px solid',
      borderRadius: '10px',
      borderColor: 'teal',
      backgroundColor: 'white',
      padding: 20,
      marginTop: 20,
      justifyContent: 'center',
      width: 'auto',
    
      

    };

    const btnStyle = {
      display: 'flex',
      justifyContent: 'center',
      background: 'orangered',
      color: 'white',
      borderRadius: '10px',
      alignItems: 'center'

    }
   

  
  return (
    <div className="upper-container" style={{background: "linear-gradient(#ffffff, #009e9e)", height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
     
      <p style={pStyle}>
      <h1 style={heading}>ABOUT FITNESS CONNECTION</h1>
      Fitness Connection was established with the vision of building a vibrant community for fitness enthusiasts at every stage of their journey, whether they are seasoned athletes or beginners taking their first steps towards a healthier lifestyle. Our platform offers a diverse array of exercise training options tailored to suit your preferences and goals. Whether you're passionate about strength training, cardio workouts, CrossFit challenges, improving flexibility, or exploring any other form of exercise, you'll find comprehensive resources and guidance here. Join us by creating an account today and become part of a supportive community that encourages and uplifts you through every milestone of your fitness journey!





      </p>

      <button onClick={() => navigate("/account")}style={btnStyle}>JOIN US!</button>
    </div>
  );
};

export default Home;
