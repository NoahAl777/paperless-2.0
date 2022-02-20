import React from "react";

const PatientInfo = ({ selectedPatient, patients, setPatients }) => {

  const handleDelete = (selectedPatient) => {
    console.log(selectedPatient)
    setPatients(patients.filter((patient) => patient !== selectedPatient))
  }

  return (
    <div className="PatientInfo">
      <p>{`${selectedPatient.id} | ${selectedPatient.firstName} | ${selectedPatient.lastName}`}</p>
      <button onClick={() => handleDelete(selectedPatient)}>x</button>
    </div>
  );
};

export default PatientInfo;
