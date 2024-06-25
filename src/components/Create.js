import React, { useState } from "react";

const Create = () => {
  const btnStyle = {
    marginLeft: "10px",
    marginTop: "20px",
  };

  const heading ={
    color: 'teal',
    fontWeight: 'bold',
    display: "flex",
    justifyContent: "center",

  };

  const [newExercise, setNewExercise] = useState({
    exercise: "",
    type: "",
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
    console.log(JSON.stringify(newExercise));
    const body = {
      type: e.target.type.value,
      exercise: e.target.exercise.value,
      description: e.target.description.value,
    };

    fetch("http://localhost:4000/api/exercise/create/new", {
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
    <div
      className="container"
      style={{ height: "100vh", display: "flex", flexDirection: "column" }}
    >
      <h3 style={heading}>CREATE</h3>
      <form onSubmit={handleCreateFormSubmit}>
        <label htmlFor="exercise">Exercise</label>
        <input
          type="text"
          id="exercise"
          name="exercise"
          placeholder="Exercise"
          value={newExercise.exercise}
          onChange={handleInputChange}
          style={{ marginLeft: "5px", marginRight: "5px" }}
        />

        <label htmlFor="type">Type</label>
        <input
          type="text"
          id="type"
          name="type"
          placeholder="Type"
          value={newExercise.type}
          onChange={handleInputChange}
          style={{ marginLeft: "5px", marginRight: "5px" }}
        />

        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          placeholder="Description"
          value={newExercise.description}
          onChange={handleInputChange}
          style={{ marginLeft: "5px", marginRight: "5px" }}
        />

        <button type="submit" style={btnStyle}>
          CREATE
        </button>
      </form>
    </div>
  );
};

export default Create;
