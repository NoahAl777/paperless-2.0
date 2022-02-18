import React from "react";

const PatientForm = ({ patientsUrl }) => {

  const handleSubmit = (event) => {
    console.log(event)
    event.preventDefault()
    const newPatientFormData = {
      firstName: event.target[0].value,
      lastName: event.target[1].value
    }

    console.log(newPatientFormData)
  }

  return (
    <div className="PatientForm">
      <h3>PatientForm Component</h3>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label>First Name</label>
        <input type="text"></input>
        <label>Last Name</label>
        <input type="text"></input>
        <input type="submit"></input>
      </form >
    </div>
  );
};

export default PatientForm;