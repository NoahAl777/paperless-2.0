// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import NavBar from "./Components/NavBar"
import PatientList from "./Components/PatientList";
import PatientForm from "./Components/PatientForm";
import EditPatientForm from './Components/EditPatientForm';

function App() {
  const [patients, setPatients] = useState([])
  const [selectedPatient, setSelectedPatient] = useState({})
  // const [patientFormType, setPatientFormType] = useState("New")
  const patientsUrl = "http://localhost:3000/patients"

  useEffect(() => {
    fetch(patientsUrl)
      .then((r) => r.json())
      .then((data) => {
        setPatients(data)
        setSelectedPatient(data[0])
      })
  }, [])

  return (
    <div className="App">
      <NavBar />
      <PatientList
        patients={patients}
        setPatients={setPatients}
        selectedPatient={selectedPatient}
        setSelectedPatient={setSelectedPatient}
        patientsUrl={patientsUrl}
      />
      {/* <button onClick={handle}>Edit</button> */}
      <EditPatientForm
        patientsUrl={patientsUrl}
        selectedPatient={selectedPatient}
      />
      <PatientForm
        patientsUrl={patientsUrl}
        patients={patients}
        setPatients={setPatients}
      />
    </div>
  );
}

export default App;
