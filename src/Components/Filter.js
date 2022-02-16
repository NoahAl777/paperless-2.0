import React from "react";

const Filter = () => {

  const handleChange = (event) => {
    console.log(event.target.value)
  }

  return (
    <div className="Filter">
      <label>Search by name:</label>
      <input type="text" onChange={handleChange}></input>
    </div>
  );
};

export default Filter