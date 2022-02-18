import React from "react";

const PatientForm = ({ patientsUrl }) => {
  return (
    <div className="PatientForm">
      <h3>PatientForm Component</h3>
      <form>
        <label>First Name</label>
        <input type="text"></input>
        <label>Last Name</label>
        <input type="text"></input>
        <input type="submit"></input>
      </form>
    </div>
  );
};

export default PatientForm;