// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
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
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/patients">
          <PatientList
            patients={patients}
            setPatients={setPatients}
            selectedPatient={selectedPatient}
            setSelectedPatient={setSelectedPatient}
            patientsUrl={patientsUrl}
          />
        </Route>
        <Route path="/edit">
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
        <Route path="/newPatientForm">
          <PatientForm
            patientsUrl={patientsUrl}
            patients={patients}
            setPatients={setPatients}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
