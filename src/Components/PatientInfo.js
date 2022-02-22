import React from "react";
import { Link } from "react-router-dom";

const PatientInfo = ({ selectedPatient, patients, setPatients, setSelectedPatient, patientsUrl }) => {

  const handleDelete = (selectedPatient) => {
    fetch(patientsUrl + `/${selectedPatient.id}`, {
      method: "DELETE"
    })
      .then(setPatients(patients.filter((patient) => patient !== selectedPatient)))
      .then(setSelectedPatient(patients[0]))
  }

  return (
    <>
      <p>{`${selectedPatient.id} | ${selectedPatient.firstName} | ${selectedPatient.lastName}`}</p>
      <button onClick={() => handleDelete(selectedPatient)}>x</button>
      <Link to="/edit">
        <button>Edit</button>
      </Link>
    </>
  );
};

export default PatientInfo;
