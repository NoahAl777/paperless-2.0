// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import NavBar from "./Components/NavBar"
import PatientList from './Components/PatientList';

function App() {
  const [patients, setPatients] = []
  const patientsUrl = "http://localhost:3000/patients"

  useEffect(() => {
    fetch(patientsUrl)
      .then((r) => r.json())
      .then((data) => console.log(data))
  })

  return (
    <div className="App">
      <NavBar />
      <PatientList />
    </div>
  );
}

export default App;
