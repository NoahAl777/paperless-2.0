import React from "react";

const PatientInfo = ({ selectedPatient, patients, setPatients, setSelectedPatient, patientsUrl }) => {

  const handleDelete = (selectedPatient) => {
    console.log(selectedPatient)
    setPatients(patients.filter((patient) => patient !== selectedPatient))
    setSelectedPatient(patients[0])
  }

  return (
    <div className="PatientInfo">
      <p>{`${selectedPatient.id} | ${selectedPatient.firstName} | ${selectedPatient.lastName}`}</p>
      <button onClick={() => handleDelete(selectedPatient)}>x</button>
    </div>
  );
};

export default PatientInfo;
