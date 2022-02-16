import React from "react";

const PatientList = ({ patients }) => {

  const listOfPatients = [...patients].map((patient, index) => <button key={index}>{`${patient.firstName} ${patient.lastName}`}</button>)

  return (
    <div className="PatientList">
      {listOfPatients}
    </div>
  );
};

export default PatientList;