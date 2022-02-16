// import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import NavBar from "./Components/NavBar"
import PatientList from './Components/PatientList';

function App() {
  const [patients, setPatients] = []

  return (
    <div className="App">
      <NavBar />
      <PatientList />
    </div>
  );
}

export default App;
