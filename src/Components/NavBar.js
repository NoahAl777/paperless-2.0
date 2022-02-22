import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="NavBar">
      <Link to="/">Home | </Link>
      <Link to="/patients">Patients | </Link>
      <Link to="/new-patient">New Patient</Link>
    </div>
  );
};

export default NavBar;
