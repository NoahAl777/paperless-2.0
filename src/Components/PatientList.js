import React, { useEffect, useState } from "react";
import PatientInfo from "./PatientInfo";
import Filter from "./Filter";

const PatientList = ({ patients, selectedPatient, setSelectedPatient }) => {
  const [filterCriteria, setFilterCriteria] = useState("");
  const [patientsToDisplay, setPatientsToDisplay] = useState([]);
  // debugger
  useEffect(() => {
    setPatientsToDisplay(patients)
  }, [patients])

  // console.log("display", patientsToDisplay)
  const handleButtonClick = (patient) => {
    setSelectedPatient(patient)
  };

  // debugger
  const listOfPatients = patientsToDisplay.map((patient, index) => {
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