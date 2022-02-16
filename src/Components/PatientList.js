import React, { useState } from "react";
import PatientInfo from "./PatientInfo";

const PatientList = ({ patients }) => {
  const [selectedPatient, setSelectedPatient] = useState(patients[1])

  const handleButtonClick = (patient) => {
    setSelectedPatient(patient)
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
    <div>
      <div className="PatientList">
        {listOfPatients}
      </div>
      <div className="PatientInfo">
        <PatientInfo />
      </div>
    </div>
  );
};

export default PatientList;