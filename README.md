#Paperless-Project
Description:

This website is meant to help all healthcare physicians and administrators to better organize and store the information of all of their employees. It will also speed up the tedious process of patients having to sit in the waiting room every single visit and fill out loads of paperwork that they've already provided information for in the past.

Instructions for running application locally:
1. Fork repository
2. Clone repository
  - In the command line select the folder where you wish to have this website stored and run the following command: git clone git@github.com:NoahAl777/paperless-2.0.git
3. Install all dependencies
  - Select project folder and run command: npm install
4. Run local host server to host website
  - While in the project folder run command: npm start. A browser tab should open up with the title 'React App'.
5. Run json server to host database
  - While in the project directory, in a different command line run the command: json-server --watch db.json
6. Refresh the page and you should see a functioning website.

Instructions on Navigating the website
Currently the website only has a handful of functionalities:

* View patient information
* Update/Edit patient information
* Create new patient profiles
* Delete patient profiles

In order to view patients information, click on the 'Patients' tab in the Navigation bar
Once at the patients page you can select a patient from the menu on the left hand side, and/or filter the list of patients by typing in a name

In order to edit patient information, while at the patients page with a selected patient
, at the bottom of the information you will see an 'Edit' button. When clicking that button you will be taken to an editing page where you will be able to make changes to the patients information. Simply modify the information and when finished, select submit.

In order to delete patients, while at the patients page with a selected patient
, at the bottom of the information you will see an 'X' button. When clicking this button you will delete the currently selected patient profile

In order to create a new patient, click on the 'New Patient' tab in the Navigation bar
Once at the New Patients page you can fill out the form and submit it by clicking on the 'Submit' button at the bottom of the form