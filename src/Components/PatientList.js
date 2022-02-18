import React from "react";
import PatientInfo from "./PatientInfo";
import Filter from "./Filter";

const PatientList = ({ patients, selectedPatient, setSelectedPatient }) => {

  const handleButtonClick = (patient) => {
    setSelectedPatient(patient)
  }

  const listOfPatients = patients.map((patient, index) => {
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
    <div>
      <Filter />
      <div className="PatientList">
        {listOfPatients}
      </div>
      <div className="PatientInfo">
        <PatientInfo selectedPatient={selectedPatient} />
      </div>
    </div>
  );
};

export default PatientList;