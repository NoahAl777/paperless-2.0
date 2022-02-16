import React from "react";

const PatientInfo = ({ selectedPatient }) => {
  return (
    <div className="PatientInfo">
      <h2>PatientInfo Component</h2>
      <p>{`${selectedPatient.id} | ${selectedPatient.firstName} | ${selectedPatient.lastName}`}</p>
    </div>
  );
};

export default PatientInfo;
