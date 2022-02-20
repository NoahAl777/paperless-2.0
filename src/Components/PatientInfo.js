import React from "react";

const PatientInfo = ({ selectedPatient, patients, setPatients }) => {
  return (
    <div className="PatientInfo">
      <p>{`${selectedPatient.id} | ${selectedPatient.firstName} | ${selectedPatient.lastName}`}</p>
    </div>
  );
};

export default PatientInfo;
