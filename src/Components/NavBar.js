import React from "react";
import { Link } from "react-router-dom";
const NavBar = ({ setSelectedPatient }) => {

  const handleClickPatients = () => {
    setSelectedPatient({})
  }

  return (
    <div className="NavBar">
      <Link to="/">Home</Link>
      <Link to="/patients/all" onClick={handleClickPatients}>Patients</Link>
      <Link to="/patients/new">New Patient</Link>
    </div>
  );
};

export default NavBar;
