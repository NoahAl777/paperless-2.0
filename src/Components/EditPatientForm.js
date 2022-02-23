import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const EditPatientForm = ({ patientsUrl, selectedPatient, setSelectedPatient, patients, setPatients }) => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [dateOfBirth, setDateOfBirth] = useState("")
  const [address, setAddress] = useState("")
  const [phone, setPhone] = useState("")
  const [gender, setGender] = useState("")
  const [email, setEmail] = useState("")
  const [maritalStatus, setMaritalStatus] = useState("")
  const [insurance, setInsurance] = useState("")
  const params = useParams();

  useEffect(() => {
    if (patients.length !== 0) {
      const urlPatient = patients.filter((patient) => patient.id === parseInt(params.id))
      setFirstName(urlPatient[0].firstName)
      setLastName(urlPatient[0].lastName)
      setDateOfBirth(urlPatient[0].dateOfBirth)
      setAddress(urlPatient[0].address)
      setPhone(urlPatient[0].phone)
      setGender(urlPatient[0].gender)
      setEmail(urlPatient[0].email)
      setMaritalStatus(urlPatient[0].maritalStatus)
      setInsurance(urlPatient[0].insurance)
    }
  }, [selectedPatient])

  const handleSubmit = (event) => {
    event.preventDefault()
    const updatedPatientFormData = {
      firstName: firstName,
      lastName: lastName,
      dateOfBirth: dateOfBirth,
      address: address,
      phone: phone,
      gender: gender,
      email: email,
      maritalStatus: maritalStatus,
      insurance: insurance,
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
        const updatedPatient = { ...patient, firstName, lastName, dateOfBirth, address, phone, gender, email, maritalStatus, insurance }
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
    } else if (formField === "lastName") {
      setLastName(event.target.value)
    } else if (formField === "dateOfBirth") {
      setDateOfBirth(event.target.value)
    } else if (formField === "address") {
      setAddress(event.target.value)
    } else if (formField === "phone") {
      setPhone(event.target.value)
    } else if (formField === "gender") {
      setGender(event.target.value)
    } else if (formField === "email") {
      setEmail(event.target.value)
    } else if (formField === "maritalStatus") {
      setMaritalStatus(event.target.value)
    } else if (formField === "insurance") {
      setInsurance(event.target.value)
    }
  }
  // debugger
  return (
    <>
      <h3>Edit Patient Form</h3>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label>First Name</label>
        <input type="text" value={firstName} onChange={(event) => handleChange(event, "firstName")}></input>
        <label>Last Name</label>
        <input type="text" value={lastName} onChange={(event) => handleChange(event, "lastName")}></input>
        <label>Date of Birth</label>
        <input type="text" value={dateOfBirth} onChange={(event) => handleChange(event, "dateOfBirth")}></input>
        <label>Address</label>
        <input type="text" value={address} onChange={(event) => handleChange(event, "address")}></input>
        <label>Phone Number</label>
        <input type="text" value={phone} onChange={(event) => handleChange(event, "phone")}></input>
        <label>Gender</label>
        <input type="text" value={gender} onChange={(event) => handleChange(event, "gender")}></input>
        <label>Email</label>
        <input type="text" value={email} onChange={(event) => handleChange(event, "email")}></input>
        <label>Marital Status</label>
        <input type="text" value={maritalStatus} onChange={(event) => handleChange(event, "maritalStatus")}></input>
        <label>Insurance</label>
        <input type="text" value={insurance} onChange={(event) => handleChange(event, "insurance")}></input>
        <input type="submit"></input>
      </form >
    </>
  );
};

export default EditPatientForm;