import React from "react";

const Filter = ({ setFilterCriteria }) => {

  const handleChange = (event) => {
    setFilterCriteria(event.target.value)
  }

  return (
    <div className="Filter">
      <label>Search by name:</label>
      <input type="text" onChange={handleChange}></input>
    </div>
  );
};

export default Filter