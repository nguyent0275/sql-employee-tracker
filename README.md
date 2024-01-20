# SQL-Employee-Tracker

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Technologies
![Technologies](https://img.shields.io/badge/-Git-F05032?logo=Git&logoColor=white)
![Technologies](https://img.shields.io/badge/-JavaScript-007396?logo=JavaScript&logoColor=white)
![Technologies](https://img.shields.io/badge/-Node.js-339933?logo=Node.js&logoColor=white)
![Technologies](https://img.shields.io/badge/-npm-CB3837?logo=npm&logoColor=white)
![Technologies](https://img.shields.io/badge/-MySQL-4479A1?logo=MySQL&logoColor=white)
![Technologies](https://img.shields.io/badge/-Inquirer-000000?logo=&logoColor=white)

## Table of Contents
[Description](#description)<br>
[Installation](#installation)<br>
[User Story](#user-story)<br>
[Acceptance Criteria](#acceptance-criteria)<br>
[Questions](#questions)<br>
[Links](#links)<br>
[License](#license)<br>

## Description
Developed a command-line application to manage a company's employee database. We used Node.js, Inquierer, and MySQL to developed the back end of the application. To begin the application, use must run: 
```
node index.js
```
## Installation
***Requirments***

[Node.js](https://nodejs.org/en/) | [Inquirer](https://www.npmjs.com/package/inquirer) | [MySQL](https://www.npmjs.com/package/mysql2)

***Initial Cloning/Download:***
1. Clone the repository or download the zipfile from Github.
2. Open the file/repo in your preferred code editor.
3. Open the integrated terminal in the root folder.
4. Make sure you have Node.JS installed.

***Initial SQL setup:***
1. Open the intergrated terminal in the ```db``` folder.
2. Run the command ```mysql -u root -p```.
3. Login with your credentials.
4. Run the command ```source schema.sql``` to create the database and tables.
5. Run the command ```source seeds.sql``` to populate the tables with the default values.

***Setting up .env file:***
1. Copy the ```.env.EXAMPLE``` file in the root folder and rename it to ```.env```.
2. Fill out the ```DB_...``` with your credentials.

***Running the CLI:***
1. Run the command ```npm i``` to install any necessary packages.
2. Run the command ```node index``` to start the application.
3. The command prompt will begin on your terminal.

## User Story
```
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

## Acceptance Criteria
```
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database
```
## Questions

What is my github repository?<br>
https://github.com/nguyent0275

What is my email and how can you reach me?<br>
My email is nguyentoan0275@gmail.com, please feel free to send me an email with any questions regarding projects or colllaborations.

## Links
![Command Line](/assets/images/sql-employee-tracker.png)

A link to the [Video](https://www.youtube.com/watch?v=8iTGWZnX8a4):
```
https://www.youtube.com/watch?v=8iTGWZnX8a4
```
A link to the [repository](https://github.com/nguyent0275/sql-employee-tracker):
```
https://github.com/nguyent0275/sql-employee-tracker
```


## License
SQL-Employee-Tracker is licensed under the MIT (or any later version). Refer to the LICENSE.txt.