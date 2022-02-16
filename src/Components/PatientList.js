import React from "react";

const PatientList = ({ patients }) => {

  const listOfPatients = [...patients].map((patient, index) => <h3 key={index}>{`${patient.firstName} ${patient.lastName}`}</h3>)

  return (
    <div className="PatientList">
      {listOfPatients}
    </div>
  );
};

export default PatientList;