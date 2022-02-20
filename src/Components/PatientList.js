import React, { useEffect, useState } from "react";
import PatientInfo from "./PatientInfo";
import Filter from "./Filter";

const PatientList = ({ patients, setPatients, selectedPatient, setSelectedPatient }) => {
  const [filterCriteria, setFilterCriteria] = useState("");
  const [patientsToDisplay, setPatientsToDisplay] = useState([]);
  // debugger
  useEffect(() => {
    setPatientsToDisplay(patients)
  }, [patients]);

  useEffect(() => {
    setPatientsToDisplay(patients.filter((patient) => patient.firstName.startsWith(filterCriteria)))
  }, [filterCriteria]);

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
      <Filter setFilterCriteria={setFilterCriteria} />
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