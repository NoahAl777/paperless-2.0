import React from "react";

const PatientForm = ({ patientsUrl, patients, setPatients }) => {

  const handleSubmit = (event) => {
    event.preventDefault()
    const newPatientFormData = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      dateOfBirth: event.target.dateOfBirth.value,
      address: event.target.address.value,
      phone: event.target.phone.value,
      gender: event.target.gender.value,
      email: event.target.email.value,
      maritalStatus: event.target.maritalStatus.value,
      insurance: event.target.insurance.value,
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
        <label>Date of Birth</label>
        <input type="text" id="dateOfBirth"></input>
        <label>Address</label>
        <input type="text" id="address"></input>
        <label>Phone Number</label>
        <input type="text" id="phone"></input>
        <label>Gender</label>
        <input type="text" id="gender"></input>
        <label>Email</label>
        <input type="text" id="email"></input>
        <label>Marital Status</label>
        <input type="text" id="maritalStatus"></input>
        <label>Insurance</label>
        <input type="text" id="insurance"></input>
        <input type="submit"></input>
      </form >
    </div>
  );
};

export default PatientForm;