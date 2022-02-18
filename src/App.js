// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import NavBar from "./Components/NavBar"
import PatientList from "./Components/PatientList";
import PatientForm from "./Components/PatientForm";

function App() {
  const [patients, setPatients] = useState([])
  const [selectedPatient, setSelectedPatient] = useState({})
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
      <PatientList patients={patients} selectedPatient={selectedPatient} setSelectedPatient={setSelectedPatient} />
    </div>
  );
}

export default App;
