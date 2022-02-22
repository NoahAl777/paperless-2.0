import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const PatientInfo = ({ selectedPatient, patients, setPatients, setSelectedPatient, patientsUrl }) => {
  const params = useParams()
  const patientCard = []

  useEffect(() => {
    setSelectedPatient(patients.filter((patient) => patient.id === parseInt(params.id)))
    console.log("setSelectedPatient", (patients.filter((patient) => patient.id === parseInt(params.id))))
  }, [patients])

  const handleDelete = (selectedPatient) => {
    fetch(patientsUrl + `/${selectedPatient.id}`, {
      method: "DELETE"
    })
      .then(setPatients(patients.filter((patient) => patient !== selectedPatient)))
      .then(setSelectedPatient(patients[0]))
  }

  if (Object.keys(selectedPatient).length === 0) {
    return <p>Loading...</p>
  } else {
    return (
      <>
        <p>{`${selectedPatient[0].id} | ${selectedPatient[0].firstName} | ${selectedPatient[0].lastName}`}</p>
        <button onClick={() => handleDelete(selectedPatient)}>x</button>
        <Link to="/edit">
          <button>Edit</button>
        </Link>
      </>
    )
  }

};

export default PatientInfo;
