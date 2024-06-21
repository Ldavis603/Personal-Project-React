import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";

const Update = () => {
  const {id} = useParams()
  const [updatedExercise, setUpdatedExercise] = useState({
    exerciseName: "",
    exerciseType: "",
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
    fetch(`http://localhost:4000/api/exercise/edit/${id}`, {
      method: "POST",
      body: JSON.stringify(updatedExercise),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result.data);
        setUpdatedExercise(result.data);
      });
  };
  return (
    <div>
      <form on onSubmit={handleUpdateFormSubmit}>
        <label htmlFor="exerciseName">Exercise</label>
        <input
          type="text"
          id="exerciseName"
          name="exerciseName"
          placeholder="Exercise"
          value={updatedExercise.exerciseName}
          onChange={handleInputChange}
        />

        <label htmlFor="exerciseType">Type</label>
        <input
          type="text"
          id="exerciseType"
          name="exerciseType"
          placeholder="Type"
          value={updatedExercise.exerciseType}
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
      </form>
    </div>
  );
};

export default Update;
