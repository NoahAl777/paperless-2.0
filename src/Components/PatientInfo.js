import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const PatientInfo = ({ selectedPatient, patients, setPatients, setSelectedPatient, patientsUrl }) => {
  const [patientDisplayed, setPatientDisplayed] = useState([])
  const params = useParams()
  console.log("params", params)
  console.log("length", patientDisplayed.length)
  useEffect(() => {
    if (Object.keys(selectedPatient).length !== 0 || selectedPatient !== patientDisplayed) {
      console.log(selectedPatient)
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

  return (
    <>
      {patientDisplayed.length === 0 ? <p>Select a valid patient.</p> : <p>{`${patientDisplayed[0].id} | ${patientDisplayed[0].firstName} | ${patientDisplayed[0].lastName}`}</p>}
      <button onClick={() => handleDelete(selectedPatient)}>x</button>
      <Link to="/edit-patient">
        <button>Edit</button>
      </Link>
    </>
  );
};

export default PatientInfo;
