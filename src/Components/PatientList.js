import React, { useState } from "react";
import PatientInfo from "./PatientInfo";
import Filter from "./Filter";

const PatientList = ({ patients }) => {
  const [selectedPatient, setSelectedPatient] = useState(patients[1])
  const [patientButtons, setPatientButtons] = useState([])

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