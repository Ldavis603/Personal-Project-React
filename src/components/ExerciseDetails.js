import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ExerciseDetails = () => {
  const btnStyle = {
    color: "green",
    marginLeft: "10px",
    marginTop: "20px",
    width: 80,
    borderRadius: 10,
  };

  const btnStyle2 = {
    color: "red",
  };

  const heading = {
    display: "flex",
    justifyContent: "center",
    color: "teal",
    fontWeight: 'bold'
  };
  const navigate = useNavigate();
  const { exerciseId } = useParams();
  console.log(exerciseId);

  const [clickedExercise, setClickedExercise] = useState({});

  useEffect(() => {
    fetch(`http://localhost:4000/api/exercise/${exerciseId}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result.data);
        setClickedExercise(result.data);
      });
  });

  return (
    <>
      <div
        className="container"
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <h3 style={heading}>EXERCISE DETAILS</h3>
        <ul>
          <li>Exercise: {clickedExercise.exercise}</li>< br />
          <li>Type: {clickedExercise.type}</li>< br />
          <li>Description: {clickedExercise.description}</li>< br />
          <img
            src={clickedExercise.exerciseURL}
            alt="Form Example"
            width="250"
            height="250"
          />
        </ul>
        <form>
          <button onClick={() => navigate("/update")} style={btnStyle}>
            {" "}
            Update
          </button>

          <button onClick={(e) => {
            fetch(`http://localhost:4000/api/exercise/delete/${exerciseId}`, {
                method: "DELETE",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result.data);
      });
          }} style={btnStyle2}>
            {" "}
            Delete
          </button>
        </form>
      </div>
    </>
  );
};

export default ExerciseDetails;
