import React, { useState } from "react";

const Create = () => {
  const [newExercise, setNewExercise] = useState({
    exerciseName: "",
    exerciseType: "",
    description: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setNewExercise({
      ...newExercise,
      [name]: value,
    });
  };
  const handleCreateFormSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:4000/api/exercise/create/new", {
      method: "POST",
      body: JSON.stringify(newExercise),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result.data);
        setNewExercise(result.data);
      });
  };
  return (
    <div>
      <form onSubmit={handleCreateFormSubmit}>
        <label htmlFor="exerciseName">Exercise</label>
        <input
          type="text"
          id="exerciseName"
          name="exerciseName"
          placeholder="Exercise"
          value={newExercise.exerciseName}
          onChange={handleInputChange}
        />

        <label htmlFor="exerciseType">Type</label>
        <input
          type="text"
          id="exerciseType"
          name="exerciseType"
          placeholder="Type"
          value={newExercise.exerciseType}
          onChange={handleInputChange}
        />

        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          placeholder="Description"
          value={newExercise.exerciseType}
          onChange={handleInputChange}
        />

        <button>Create Exercise</button>
      </form>
    </div>
  );
};

export default Create;
