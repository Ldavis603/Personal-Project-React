import React from "react";

const Create = () => {
  return (
    <div>
      <form>
        <label htmlFor="exerciseName">Exercise</label>
        <input
          type="text"
          id="exerciseName"
          name="exerciseName"
          placeholder="Exercise"
        />

        <label htmlFor="exerciseType">Type</label>
        <input
          type="text"
          id="exerciseType"
          name="exerciseType"
          placeholder="Type"
        />

        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          placeholder="Description"
        />
      </form>
    </div>
  );
};

export default Create;
