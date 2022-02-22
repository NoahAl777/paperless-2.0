import React, { useEffect, useState } from "react";
import { Route, Switch, Link, useParams } from "react-router-dom";
import PatientInfo from "./PatientInfo";
import Filter from "./Filter";

const PatientList = ({ patients, setPatients, selectedPatient, setSelectedPatient, patientsUrl }) => {
  const [filterCriteria, setFilterCriteria] = useState("");
  const [patientsToDisplay, setPatientsToDisplay] = useState([]);
  const params = useParams()
  // debugger
  useEffect(() => {
    setPatientsToDisplay(patients)
  }, [patients]);

  useEffect(() => {
    setPatientsToDisplay(patients.filter((patient) => patient.firstName.startsWith(filterCriteria)))
  }, [filterCriteria]);
  debugger
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
      <Switch>
        <Route path="/patients/:id">
          <div className="PatientInfo">
            <PatientInfo selectedPatient={selectedPatient}
              patients={patients}
              setPatients={setPatients}
              setSelectedPatient={setSelectedPatient}
              patientsUrl={patientsUrl}
            />
          </div>
        </Route>
      </Switch>
    </div>
  );
};

export default PatientList;