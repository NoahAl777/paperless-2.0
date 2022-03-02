import React, { useState } from "react";

const PatientForm = ({ patientsUrl, patients, setPatients }) => {

  const [error, setError] = useState("")
  const [formData, setFormData] = useState({ firstName: "", lastName: "", })
  console.log(formData)
  const handleChange = (event) => {
    console.log(event.target.id)
    setFormData({ ...formData, [event.target.id]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    fetch(patientsUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(r => r.json())
      .then(newPatient => setPatients([...patients, newPatient]))
  }

  return (
    <div className="PatientForm">
      <h3>New Patient Form</h3>
      <form onSubmit={(event) => handleSubmit(event)}>
        <h2>{error}</h2>
        <label>First Name</label>
        <input type="text" id="firstName" onChange={handleChange}></input><br></br>
        <label>Last Name</label>
        <input type="text" id="lastName" onChange={(event) => handleChange(event)}></input><br></br>
        <label>Date of Birth</label>
        <input type="text" id="dateOfBirth" onChange={(event) => handleChange(event)}></input><br></br>
        <label>Address</label>
        <input type="text" id="address" onChange={(event) => handleChange(event)}></input><br></br>
        <label>Phone Number</label>
        <input type="text" id="phone" onChange={(event) => handleChange(event)}></input><br></br>
        <label>Gender</label>
        <input type="text" id="gender" onChange={(event) => handleChange(event)}></input><br></br>
        <label>Email</label>
        <input type="text" id="email" onChange={(event) => handleChange(event)}></input><br></br>
        <label>Marital Status</label>
        <input type="text" id="maritalStatus" onChange={(event) => handleChange(event)}></input><br></br>
        <label>Insurance</label>
        <input type="text" id="insurance" onChange={(event) => handleChange(event)}></input><br></br>
        <input className="submit" type="submit"></input>
      </form >
    </div>
  );
};

export default PatientForm;