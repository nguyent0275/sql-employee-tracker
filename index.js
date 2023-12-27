// db connection file using dotenv
const inquirer = require("inquirer");
const startConnection = require("./db/connections");
let db = null;

// menu function
async function menu() {
  menuChoices = [
    "View all departments",
    "View all roles",
    "View all employees",
    "Add a department",
    "Add a role",
    "Add an employee",
    "Update an employee's role",
  ];
  const answers = await inquirer.prompt([
    {
      type: "list",
      message: "What do you want to do next?",
      name: "option",
      choices: menuChoices,
    },
  ]);

  switch (answers.option) {
    case menuChoices[0]:
      return viewDepartments();
    case menuChoices[1]:
      return viewRoles();
    case menuChoices[2]:
      return viewEmployees();
    case menuChoices[3]:
      return addDepartment();
    case menuChoices[4]:
      return addRole();
    case menuChoices[5]:
      return addEmployee();
    case menuChoices[6]:
      return updateEmployeeRole();
  }
}

// function to view all Departments
async function viewDepartments() {
  console.log("Viewing Departments");
  const departments = await db.query("SELECT * FROM department");
  console.log(departments);
  return await menu();
}
// function to view all Departments
async function viewRoles() {
  console.log("Viewing Departments");
  const roles = await db.query("SELECT * FROM role");
  console.log(roles);
  return await menu();
}
// function to view all Departments
async function viewEmployees() {
  console.log("Viewing Departments");
  const employees = await db.query("SELECT * FROM employee");
  console.log(employees);
  return await menu();
}
// function to add a department
async function addDepartment() {
  console.log("Adding Department");
  const answers = await inquirer.prompt([
    {
      type: "input",
      // name matches the column you're trying to populate or fill
      name: "name",
      message: "What department do you want to add?",
    },
  ]);
  // user answer from the prompt
  console.log(answers);

  const inputData = await db.query("INSERT INTO department SET ?", answers);
  console.log(inputData);

  console.log("Insert Sucessful\n\n\n\n");
  // brings us back to the menu
  return await menu();
}
// function to add a role
async function addRole() {
  console.log("Adding Role");
  // departmentData is the list of rows / onjects
  // metaData contains data like column names etc.
  // destructuring simplies the return code
  const [departmentData, metaData] = await db.query("SELECT name FROM department");
  console.log(departmentData);
  const departmentChoices = departmentData.map((row) => ({
    name: row.name,
    value: row.name,
  }));
  const answers = await inquirer.prompt([
    {
      type: "input",
      // name matches the column you're trying to populate or fill
      name: "title",
      message: "What role do you want to add?",
    },
    {
      type: "input",
      name: "salary",
      message: "What is the salary for this role?",
    },
    {
      type: "list",
      name: "department_id",
      message: "What department does this role belong to?",
      choices: departmentChoices
    },
  ]);
  // user answer from the prompt
  console.log(answers);

  const inputData = await db.query("INSERT INTO role SET ?", answers);
  console.log(inputData);

  console.log("Insert Sucessful\n\n\n\n");
  // brings us back to the menu
  return await menu();
}
// function to add a employee
async function addEmployee() {
  console.log("Adding Employee");
  const [roleData, metaData] = await db.query("SELECT title FROM role");
  console.log(roleData);
  const roleChoices = roleData.map((row) => ({
    name: row.name,
    value: row.title,
  }));
  const [managerData, managerMetaData] = await db.query("SELECT first_name, last_name FROM employee");
  console.log(managerData);
  const managerChoices = managerData.map((row) => ({
    name: row.name,
    value: row.first_name + ' ' + row.last_name,
  }));
  const answers = await inquirer.prompt([
    {
      type: "input",
      // name matches the column you're trying to populate or fill
      name: "first_name",
      message: "What is the first name of the employee?",
    },
    {
      type: "input",
      name: "last_name",
      message: "What is the last name of the employee?",
    },
    {
      type: "list",
      name: "role_id",
      message: "What is the role of the employee?",
      choices: roleChoices,
    },
    {
      type: "list",
      name: "manager_id",
      message: "Who is the employee's manager?",
      choices: managerChoices,
    },
  ]);
  // user answer from the prompt
  console.log(answers);

  const inputData = await db.query("INSERT INTO employee SET ?", answers);
  console.log(inputData);

  console.log("Insert Sucessful\n\n\n\n");
  // brings us back to the menu
  return await menu();
}
// function to update an employee
async function updateEmployeeRole() {
  console.log("Updating Employee");
  const [employeeData, employeeMetaData] = await db.query("SELECT first_name, last_name FROM employee");
  console.log(employeeData);
  const employeeChoices = employeeData.map((row) => ({
    name: row.name,
    value: row.first_name + ' ' + row.last_name,
  }));
  const [roleData, metaData] = await db.query("SELECT title FROM role");
  console.log(roleData);
  const roleChoices = roleData.map((row) => ({
    name: row.name,
    value: row.title,
  }));
  const answers = await inquirer.prompt([
    {
      type: "list",
      // name matches the column you're trying to populate or fill
      name: "first_name",
      message: "Which employee's role do you want to update?",
      choices: employeeChoices
    },
    {
      type: "list",
      name: "role_id",
      message: "Which role do you want to assign the selected employee?",
      choices: roleChoices
    },
  ]);
    // user answer from the prompt
    console.log(answers);

    const inputData = await db.query("INSERT INTO employee SET ?", answers);
    console.log(inputData);
  
    console.log("Insert Sucessful\n\n\n\n");
    // brings us back to the menu
  return await menu();
}

// exit function

// start/init function
async function init() {
  // connects to the database/ use await to wait for connection to finish
  db = await startConnection();
  // checks the connection
  //   const results = await db.query("SELECT * FROM island");

  // gets data from results
  //   console.log(results[0]);

  await menu();
}
init();
