import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Exercise = () => {

  const btnStyle = {
    width: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,

  };

  const heading = {
    color: 'teal',
    display: 'flex',
    justifyContent: 'center',
    fontWeight: 'bold',
  };
    const navigate = useNavigate()
  const [allExercises, setAllExercises] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/api/exercise")
      .then((response) => response.json())
      .then((result) => {
        console.log(result.data);
        setAllExercises(result.data);
      });
  }, []);
  

  return (
   
    <>
     <div className="create-exercise">
        <button onClick={() =>navigate('/create')}> + Create New Exercise</button>
      </div>
     <div className="container" style ={{display: 'flex', flexDirection: 'column', justifyContent: 'center', border: '4px solid teal', borderRadius: '10px', margin: '20px'}}>
    {/* <div className="search-container">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        className="search-bar"
        placeholder="Search Exercise"
        name="search"
        type="text"
      /> */}
    
      {/* <div className="tab">
        <button className="tablinks">Exercises</button>
      </div>
      <div id="Exercises" className="tabcontent"> */}
        <h3 style={heading}>Exercises</h3>
        {allExercises.map((exercise) => (
          <>
            <ul>
              <li>Exercise: {exercise.exercise}</li>
              <li>Type: {exercise.type}</li>
              {/* <li>Description: {exercise.description}</li>
              <li>Image:<img src={exercise.exerciseURL} /></li> */}
            </ul>
            <button onClick={() =>navigate(`/exercise/${exercise._id}`)} style={btnStyle}>Details</button>
          </>
        ))}
      </div>
    {/* </div> */}
     {/* </div> */}
     </>
  );
};

export default Exercise;
