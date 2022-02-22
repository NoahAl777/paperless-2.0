import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import PatientInfo from "./PatientInfo";
import Filter from "./Filter";
import EditPatientForm from "./EditPatientForm";

const PatientList = ({ patients, setPatients, selectedPatient, setSelectedPatient, patientsUrl }) => {
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
        <PatientInfo selectedPatient={selectedPatient}
          patients={patients}
          setPatients={setPatients}
          setSelectedPatient={setSelectedPatient}
          patientsUrl={patientsUrl}
        />
      </div>
      <Route path="/editPatientForm">
        <div className="EditPatientForm">
          <EditPatientForm
            patientsUrl={patientsUrl}
            selectedPatient={selectedPatient}
            setSelectedPatient={setSelectedPatient}
            patients={patients}
            setPatients={setPatients}
          />
        </div>
      </Route>
    </div>
  );
};

export default PatientList;