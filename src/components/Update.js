import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const [updatedExercise, setUpdatedExercise] = useState({
    exercise: "",
    type: "",
    description: "",
  });
  useEffect(() => {
    fetch(`http://localhost:4000/api/exercise/${id}`)
      .then((response) => response.json())
      .then((result) => {
        console.log(result.data);
        setUpdatedExercise(result.data);
      });
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedExercise({
      ...updatedExercise,
      [name]: value,
    });
  };
  const handleUpdateFormSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(updatedExercise));
    const body = {
      type: e.target.type.value,
      exercise: e.target.exercise.value,
      description: e.target.description.value,
    };
    fetch(`http://localhost:4000/api/exercise/edit/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result.data);
        setUpdatedExercise(result.data);
      });
  }; 
  return (
    <div>
      <form onSubmit={handleUpdateFormSubmit}>
        <label htmlFor="exercise">Exercise</label>
        <input
          type="text"
          id="exercise"
          name="exercise"
          placeholder="Exercise"
          value={updatedExercise.exercise}
          onChange={handleInputChange}
        />

        <label htmlFor="exerciseType">Type</label>
        <input
          type="text"
          id="type"
          name="type"
          placeholder="type"
          value={updatedExercise.type}
          onChange={handleInputChange}
        />

        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          placeholder="Description"
          value={updatedExercise.description}
          onChange={handleInputChange}
        />
        <button type="submit">UPDATE</button>
      </form>
    </div>
  );
};

export default Update;
