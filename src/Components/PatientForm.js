import React from "react";

const PatientForm = ({ patientsUrl, patients, setPatients }) => {

  const handleSubmit = (event) => {
    event.preventDefault()
    const newPatientFormData = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value
    }

    fetch(patientsUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPatientFormData)
    })
      .then(r => r.json())
      .then(newPatient => setPatients([...patients, newPatient]))
  }

  return (
    <div className="PatientForm">
      <h3>New Patient Form</h3>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label>First Name</label>
        <input type="text" id="firstName"></input>
        <label>Last Name</label>
        <input type="text" id="lastName"></input>
        <input type="submit"></input>
      </form >
    </div>
  );
};

export default PatientForm;