import React, { useState, useEffect } from "react";

const EditPatientForm = ({ patientsUrl, selectedPatient, setSelectedPatient, patients, setPatients }) => {
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
      .then(r => r.json())
      .then(updatePatientsToDisplay())
  }

  const updatePatientsToDisplay = () => {
    const updatedDisplay = [...patients].map((patient) => {
      if (patient.id === selectedPatient.id) {
        console.log("inside if", patient)
        const updatedPatient = { ...patient, firstName, lastName }
        setSelectedPatient(updatedPatient)
        return updatedPatient
      } else {
        return patient
      }
    })

    setPatients(updatedDisplay)
  }

  const handleChange = (event, formField) => {
    if (formField === "firstName") {
      setFirstName(event.target.value)
    } else {
      setLastName(event.target.value)
    }
  }

  return (
    <>
      <h3>Edit Patient Form</h3>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label>First Name</label>
        <input type="text" value={firstName} onChange={(event) => handleChange(event, "firstName")}></input>
        <label>Last Name</label>
        <input type="text" value={lastName} onChange={(event) => handleChange(event, "lastName")}></input>
        <input type="submit"></input>
      </form >
    </>
  );
};

export default EditPatientForm;