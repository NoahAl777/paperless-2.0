//use rESTFUL ROUTES i.e: patients/new
//use dynamic routes i.e: patients/3/edit

// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import { Route, Switch, useParams } from "react-router-dom";
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
  const params = useParams()
  console.log(params)
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
        <Route path="/patients/new">
          <PatientForm
            patientsUrl={patientsUrl}
            patients={patients}
            setPatients={setPatients}
          />
        </Route>
        <Route exact path="/patients/:id">
          <PatientList
            patients={patients}
            setPatients={setPatients}
            selectedPatient={selectedPatient}
            setSelectedPatient={setSelectedPatient}
            patientsUrl={patientsUrl}
          />
        </Route>
        <Route path="/patients/:id/edit">
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
      </Switch>
    </div>
  );
}

export default App;
