import React from "react";

const PatientForm = ({ patientsUrl, patients, setPatients }) => {

  const handleSubmit = (event) => {
    console.log(event.target)
    event.preventDefault()
    const newPatientFormData = {
      firstName: event.target[0].value,
      lastName: event.target[1].value
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