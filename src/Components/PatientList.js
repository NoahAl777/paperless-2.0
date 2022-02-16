import React from "react";

const PatientList = ({ patients }) => {

  function handleButtonClick(patient) {
    // <Patient />
    console.log(patient)
  }

  const listOfPatients = [...patients].map((patient, index) => {
    return (
      <button
        key={index}
        onClick={() => handleButtonClick(patient)}
      >
        {`${patient.firstName} ${patient.lastName}`}
      </button>
    );
  }
  );


  return (
    <div className="PatientList">
      {listOfPatients}
    </div>
  );
};

export default PatientList;