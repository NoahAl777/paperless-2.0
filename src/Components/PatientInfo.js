import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const PatientInfo = ({ selectedPatient, patients, setPatients, setSelectedPatient, patientsUrl }) => {
  const [patientDisplayed, setPatientDisplayed] = useState([])
  const params = useParams()

  useEffect(() => {
    if (Object.keys(selectedPatient).length !== 0 || selectedPatient !== patientDisplayed) {
      setPatientDisplayed(patients.filter((patient) => patient.id === parseInt(params.id)))
    }
  }, [selectedPatient])

  const handleDelete = (selectedPatient) => {
    fetch(patientsUrl + `/${selectedPatient.id}`, {
      method: "DELETE"
    })
      .then(setPatients(patients.filter((patient) => patient !== selectedPatient)))
      .then(setSelectedPatient(patients[0]))
  }

  // debugger
  if (patientDisplayed.length === 0) {
    return <p>Select a valid patient.</p>
  } else {
    return (
      <div className="PatientInfo">
        <h3>{`${patientDisplayed[0].firstName} ${patientDisplayed[0].lastName}`}</h3>
        <p>Date of Birth: {`${patientDisplayed[0].dateOfBirth}`}</p>
        <p>Address: {`${patientDisplayed[0].address}`}</p>
        <p>Phone: {`${patientDisplayed[0].phone}`}</p>
        <p>Gender: {`${patientDisplayed[0].gender}`}</p>
        <p>Email: {`${patientDisplayed[0].email}`}</p>
        <p>Marital Status: {`${patientDisplayed[0].maritalStatus}`}</p>
        <p>Insurance: {`${patientDisplayed[0].insurance}`}</p>
        <button onClick={() => handleDelete(selectedPatient)}>x</button>
        <Link to={`/patients/${patientDisplayed[0].id}/edit`}>
          <button>Edit</button>
        </Link>
      </div>
    )
  }
};

export default PatientInfo;
