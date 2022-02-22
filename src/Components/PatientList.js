import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Filter from "./Filter";
import PatientInfo from "./PatientInfo";

const PatientList = ({ patients, setPatients, selectedPatient, setSelectedPatient, patientsUrl }) => {
  const [filterCriteria, setFilterCriteria] = useState("");
  const [patientsToDisplay, setPatientsToDisplay] = useState([]);
  const params = useParams();
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
  const linkDynamicUrl = `/patients/${params.id}`

  const listOfPatients = patientsToDisplay.map((patient, index) => {
    return (
      <>
        <Link to={`/patients/${patient.id}`}>
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
    <div>
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