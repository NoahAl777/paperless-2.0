import React, { useState, useEffect } from "react";

const EditPatientForm = ({ patientsUrl, selectedPatient, patientsToDisplay, setPatientsToDisplay }) => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  useEffect(() => {
    setFirstName(selectedPatient.firstName)
    setLastName(selectedPatient.lastName)
  }, [selectedPatient])

  const handleSubmit = (event) => {
    event.preventDefault()
    const updatedPatientFormData = {
      firstName: firstName,
      lastName: lastName
    }

    fetch(patientsUrl + `/${selectedPatient.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedPatientFormData)
    })
  }

  const handleChange = (event, formField) => {
    console.log("event", event.target.value)
    console.log("field", formField)
    if (formField === "firstName") {
      setFirstName(event.target.value)
    } else {
      setLastName(event.target.value)
    }
  }

  return (
    <div className="EditPatientForm">
      <h3>Edit Patient Form</h3>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label>First Name</label>
        <input type="text" value={firstName} onChange={(event) => handleChange(event, "firstName")}></input>
        <label>Last Name</label>
        <input type="text" value={lastName} onChange={(event) => handleChange(event, "lastName")}></input>
        <input type="submit"></input>
      </form >
    </div>
  );
};

export default EditPatientForm;