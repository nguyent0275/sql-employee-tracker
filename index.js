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
      return updateEmployee();
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
async function updateEmployee() {
  console.log("Updating Employee");
  return await menu();
}
// function to capture input data
// async function captureInput() {
//   // looking at the schema file
//   // i can see that i need to capture the name
//   // id is automatically incrementing
//   // since we only have 1 column to fill in, we need to only ask one question
//   console.log("need to finish");
//   const answers = await inquirer.prompt([
//     {
//       type: "input",
//       // name matches the column you're trying to populate or fill
//       name: "name",
//       message: "Who do you want to put on the island?",
//     },
//   ]);
//   // user answer from the prompt
//   console.log(answers);

//   // once you have the answers, send the answers to the insertSql() function
//   return await insertSql(answers);
// }
// // function to do the sql insert
// // inputs = answers
// async function insertSql(inputs) {
//   console.log(inputs);
//   // use prepared statement
//   const inputData = await db.query("INSERT INTO island SET ?", inputs);
//   console.log(inputData);

//   console.log("Insert Sucessful\n\n\n\n");
//   // brings us back to the menu
//   return await menu();
// }

// async function askWhoToBringToUsa() {
//   // looking at the schema file
//   // i can see that i need to capture the name
//   // id is automatically incrementing
//   // since we only have 1 column to fill in, we need to only ask one question
//   console.log("need to finish");
//   // data is the list of rows / onjects
//   // metaData contains data like column names etc.
//   // destructuring simplies the return code
//   const [data, metaData] = await db.query("SELECT * FROM island");
//   console.log(data);
//   const choices = data.map((row) => ({
//     name: row.name,
//     value: row.id,
//   }));
//   console.log(choices);
//   const answers = await inquirer.prompt([
//     {
//       type: "list",
//       // name matches the column you're trying to populate or fill
//       name: "island_id",
//       message: "Who do you want to bring back to the USA?",
//       choices: choices,
//     },
//   ]);
//   // user answer from the prompt
//   console.log(answers);

//   // once you have the answers, send the answers to the insertSql() function
//   return await sendSqlUsa(answers);
// }
// async function sendSqlUsa(inputs) {
//   console.log(inputs);
//   // use prepared statement
//   const inputData = await db.query("INSERT INTO usa SET ?", inputs);
//   console.log(inputData);

//   console.log("Insert Sucessful\n\n\n\n");
//   // brings us back to the menu
//   return await menu();
// }

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
