// db connection file using dotenv
const inquirer = require("inquirer");
const startConnection = require("./db/connections");
const cTable = require('console.table'); 
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
    "Update an employee's manager",
    "View employees by manager",
    "View employees by department",
    "Delete a department",
    "Delete a role",
    "Delete an employee",
    "View the total utilized budget of a department",
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
    case menuChoices[7]:
      return updateEmployeeManager();
    case menuChoices[8]:
      return viewEmployeeByManager();
    case menuChoices[9]:
      return viewEmployeeByDepartment();
    case menuChoices[10]:
      return deleteDepartment();
    case menuChoices[11]:
      return deleteRole();
    case menuChoices[12]:
      return deleteEmployee();
    case menuChoices[13]:
      return viewTotalBudget();
  }
}

// const sanitizeInput = (obj) => {
//   let output = obj;
//   output = output.replaceAll("'", "");
//   output = output.replaceAll(";", "");
//   output = output.replaceAll("\"", "");
//   output = output.replaceAll("=", "");
//   return output;
// }

// function to view all Departments
async function viewDepartments() {
  console.log("Viewing Departments");
  const [ departmentsData, departmentMetaData ] = await db.query("SELECT * FROM department");
  console.table(departmentsData);
  return await menu();
}
// function to view all Departments
async function viewRoles() {
  console.log("Viewing Departments");
  const [ rolesData, rolesMetaData ] = await db.query("SELECT * FROM role");
  console.table(rolesData);
  return await menu();
}
// function to view all Departments
async function viewEmployees() {
  console.log("Viewing Departments");
  const [ employeesData, rolesMetaData ] = await db.query("SELECT * FROM employee");
  console.table(employeesData);
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
  // departmentData is the list of rows / objects
  // metaData contains data types for the columns
  // destructuring simplies the return code
  const [departmentData, metaData] = await db.query(
    "SELECT id, name FROM department"
  );
  // console.log(departmentData);
  const departmentChoices = departmentData.map((row) => ({
    name: row.name,
    value: row.id,
  }));
  console.log(departmentChoices);
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
      choices: departmentChoices,
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
  const [roleData, metaData] = await db.query("SELECT title, id FROM role");
  console.log(roleData);
  const roleChoices = roleData.map((row) => ({
    name: row.title,
    value: row.id,
  }));
  const [managerData, managerMetaData] = await db.query(
    "SELECT first_name, last_name, id FROM employee"
  );
  console.log(managerData);
  const managerChoices = managerData.map((row) => ({
    name: row.first_name + " " + row.last_name,
    value: row.id,
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
// function to update an employee's role
async function updateEmployeeRole() {
  console.log("Updating Employee");
  const [employeeData, employeeMetaData] = await db.query(
    "SELECT first_name, last_name, id FROM employee"
  );
  console.log(employeeData);
  const employeeChoices = employeeData.map((row) => ({
    name: row.first_name + " " + row.last_name,
    value: row.id,
  }));
  const [roleData, metaData] = await db.query("SELECT title, id FROM role");
  console.log(roleData);
  const roleChoices = roleData.map((row) => ({
    name: row.title,
    value: row.id,
  }));
  const answers = await inquirer.prompt([
    {
      type: "list",
      // name matches the column you're trying to populate or fill
      name: "id",
      message: "Which employee's role do you want to update?",
      choices: employeeChoices,
    },
    {
      type: "list",
      name: "role_id",
      message: "Which role do you want to assign the selected employee?",
      choices: roleChoices,
    },
  ]);
  // user answer from the prompt
  console.log(answers);

  const sql = "UPDATE employee SET role_id = ? WHERE id = ? "
  const sqlParams = [answers.role_id, answers.id]

  const inputData = await db.query(
    sql, sqlParams, (err, results) => {
      if (err) throw err;
      console.log("Update Sucessful\n\n\n\n");
    }
  );
  console.log(inputData);

  // brings us back to the menu
  return await menu();
}
// function to update an employee's manager
async function updateEmployeeManager() {
  console.log("Updating Employee");
  const [employeeData, employeeMetaData] = await db.query(
    "SELECT first_name, last_name, id, manager_id FROM employee"
  );
  console.log(employeeData);
  const employeeChoices = employeeData.map((row) => ({
    name: row.first_name + " " + row.last_name,
    value: row.id,
    manager: row.manager_id
  }));

  const answers = await inquirer.prompt([
    {
      type: "list",
      // name matches the column you're trying to populate or fill
      name: "id",
      message: "Which employee's manager do you want to update?",
      choices: employeeChoices,
    },
    {
      type: "list",
      name: "manager_id",
      message: "Which manager do you want to assign the selected employee?",
      choices: employeeChoices,
    },
  ]);
  // user answer from the prompt
  console.log(answers);

  const sql = "UPDATE employee SET manager_id = ? WHERE id = ? "
  const sqlParams = [answers.manager_id, answers.id]

  const inputData = await db.query(
    sql, sqlParams, (err, results) => {
      if (err) throw err;
      console.log("Update Sucessful\n\n\n\n");
    }
  );

  // brings us back to the menu
  return await menu();
}
// view employees by department
async function viewEmployeeByDepartment() {
  console.log("Viewing Departments");
  const [employeeData, employeeMetaData] = await db.query("SELECT * FROM employee INNER JOIN role ON employee.role_id = role.id ORDER BY department_id");
  console.table(employeeData);
  return await menu();
}
// views employees by manager
async function viewEmployeeByManager() {
  console.log("Viewing Departments");
  const [employeeData, employeeMetaData] = await db.query("SELECT * FROM employee  ORDER BY manager_id");
  console.table(employeeData);
  return await menu();
}

// function to delete a department
async function deleteDepartment() {
  console.log("Deleting Department");
  const [depData, metaData] = await db.query("SELECT * FROM department");
  console.log(depData);
  const depChoices = depData.map((row) => ({
    name: row.name,
    value: row.id,
  }));
  console.log(depChoices)
  const answers = await inquirer.prompt([
    {
      type: "list",
      // name matches the column you're trying to populate or fill
      name: "id",
      message: "What department do you want to delete?",
      choices: depChoices
    },
  ]);
  // user answer from the prompt
  console.log(answers);

  const inputData = await db.query("DELETE FROM department WHERE id = ?", answers.id);
  console.log(inputData);

  console.log("Delete Sucessful\n\n\n\n");
  // brings us back to the menu
  return await menu();
}
// function to delete a role
async function deleteRole() {
  console.log("Deleting Department");
  const [roleData, metaData] = await db.query("SELECT title, id FROM role");
  console.log(roleData);
  const roleChoices = roleData.map((row) => ({
    name: row.title,
    value: row.id,
  }));
  console.log(roleChoices)
  const answers = await inquirer.prompt([
    {
      type: "list",
      // name matches the column you're trying to populate or fill
      name: "id",
      message: "What role do you want to delete?",
      choices: roleChoices
    },
  ]);
  // user answer from the prompt
  console.log(answers);

  const inputData = await db.query("DELETE FROM role WHERE id = ?", answers.id);
  console.log(inputData);

  console.log("Delete Sucessful\n\n\n\n");
  // brings us back to the menu
  return await menu();
}
// function to delete an employee
async function deleteEmployee() {
  console.log("Deleting Employeee")
  const [empData, metaData] = await db.query("SELECT first_name, last_name, id FROM employee");
  console.log(empData);
  const empChoices = empData.map((row) => ({
    name: row.first_name + " " + row.last_name,
    value: row.id,
  }));
  console.log(empChoices)
  const answers = await inquirer.prompt([
    {
      type: "list",
      // name matches the column you're trying to populate or fill
      name: "id",
      message: "What role do you want to delete?",
      choices: empChoices
    },
  ]);
  // user answer from the prompt
  console.log(answers);

  const inputData = await db.query("DELETE FROM employee WHERE id = ?", answers.id);
  console.log(inputData);

  console.log("Delete Sucessful\n\n\n\n");
  // brings us back to the menu
  return await menu();
}

// view employees by department
async function viewTotalBudget() {
  console.log("Viewing Departments");
  const [ totalBudgetData, budgetMetaData] = await db.query("SELECT role.department_id, SUM(role.salary) as totalBudget FROM role LEFT JOIN department ON role.department_id = department.id GROUP BY role.department_id, role.salary");
  console.table(totalBudgetData);
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
