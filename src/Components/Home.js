import React from "react";

const Home = () => {
  return (
    <div className="Home">
      <h1>Welcome to the Home Page</h1>
      <div className="description">
        <p className="intro">This website is meant to help all healthcare physicians and administrators to better organize and store the information of all of their employees.
          It will also speed up the tedious process of patients having to sit in the waiting room every single visit and fill out loads of paperwork that they've already provided information for in the past.</p>
        <h3>Instructions on Navigating the website</h3>
        <p>Currently the website only has a handful of functionalities:</p>
        <ul className="list-of-functionalities">
          <li>View patient information</li>
          <li>Update/Edit patient information</li>
          <li>Create new patient profiles</li>
          <li>Delete patient profiles</li>
        </ul>
        <div className="instructions">
          <h4>In order to view patients information, click on the 'Patients' tab in the Navigation bar</h4>
          <p>Once at the patients page you can select a patient from the menu on the left hand side, and/or filter the list of patients by typing in a name</p>
          <h4>In order to edit patient information, while at the patients page with a selected patient</h4>
          <p>, at the bottom of the information you will see an 'Edit' button. When clicking that button you will be taken to an editing page where you will be able to make changes to the patients information. Simply modify the information and when finished, select submit.</p>
          <h4>In order to delete patients, while at the patients page with a selected patient</h4>
          <p>, at the bottom of the information you will see an 'X' button. When clicking this button you will delete the currently selected patient profile</p>
          <h4>In order to create a new patient, click on the 'New Patient' tab in the Navigation bar</h4>
          <p>Once at the New Patients page you can fill out the form and submit it by clicking on the 'Submit' button at the bottom of the form</p>
        </div>
      </div>
    </div >
  );
};

export default Home;