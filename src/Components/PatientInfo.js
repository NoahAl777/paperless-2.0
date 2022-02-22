import React from "react";

const PatientInfo = ({ selectedPatient, patients, setPatients, setSelectedPatient, patientsUrl }) => {

  useEffect(() => {
    setSelectedPatient(patients.filter((patient) => patient.id === parseInt(params.id)))
    console.log("setSelectedPatient", (patients.filter((patient) => patient.id === parseInt(params.id))))
  }, [patients])

  const handleDelete = (selectedPatient) => {
    fetch(patientsUrl + `/${selectedPatient.id}`, {
      method: "DELETE"
    })
      .then(setPatients(patients.filter((patient) => patient !== selectedPatient)))
      .then(setSelectedPatient(patients[0]))
  }

  return (
    <>
      <p>{`${selectedPatient.id} | ${selectedPatient.firstName} | ${selectedPatient.lastName}`}</p>
      <button onClick={() => handleDelete(selectedPatient)}>x</button>
    </>
  );
};

export default PatientInfo;
