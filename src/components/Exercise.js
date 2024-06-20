import React, { useEffect, useState } from "react";
const Exercise = () => {
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
    // <div>Exercise</div>
    // update class to className
    <div className="search-container">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        className="search-bar"
        placeholder="Search Exercise"
        name="search"
        type="text"
      />
      <div className="create-exercise">
        <button className="create-new"> + Create New Exercise</button>
      </div>
      <div className="tab">
        <button className="tablinks">Exercises</button>
      </div>
      <div id="Exercises" className="tabcontent">
        <h3>Exercises</h3>
        {allExercises.map((exercise) => (
          <>
            <ul>
              <li>Exercise: {exercise.exercise}</li>
              <li>Type: {exercise.type}</li>
              <li>Description: {exercise.description}</li>
            </ul>
            <button>Details</button>
          </>
        ))}
      </div>
    </div>
  );
};

export default Exercise;
