import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Filter from "./Filter";
import PatientInfo from "./PatientInfo";

const PatientList = ({ patients, setPatients, selectedPatient, setSelectedPatient, patientsUrl }) => {
  const [filterCriteria, setFilterCriteria] = useState("");
  const [patientsToDisplay, setPatientsToDisplay] = useState([]);

  useEffect(() => {
    setPatientsToDisplay(patients)
  }, [patients]);

  useEffect(() => {
    setPatientsToDisplay(patients.filter((patient) => patient.firstName.startsWith(filterCriteria)))
  }, [filterCriteria]);

  const handleButtonClick = (patient) => {
    setSelectedPatient(patient)
  };

  const listOfPatients = patientsToDisplay.map((patient, index) => {
    return (
      <>
        <Link to={`/patients/${patient.id}`} >
          <button
            key={index}
            onClick={() => handleButtonClick(patient)}
          >
            {`${patient.firstName} ${patient.lastName}`}
          </button>
        </Link>
      </>
    );
  }
  );

  return (
    <div className="search">
      <Filter setFilterCriteria={setFilterCriteria} />
      <div className="PatientList">
        {listOfPatients}
      </div>
      <PatientInfo selectedPatient={selectedPatient}
        patients={patients}
        setPatients={setPatients}
        setSelectedPatient={setSelectedPatient}
        patientsUrl={patientsUrl}
      />
    </div>
  );
};

export default PatientList;