DROP DATABASE IF EXISTS business_db;
CREATE DATABASE business_db;

USE business_db;

CREATE TABLE department (
  id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
  id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL,
  department_id INT NULL,
    -- department_id in the role table will be a foreign key that is taking the reference from the department table's id column
  FOREIGN KEY (department_id)
    -- referencing department table's id column
  REFERENCES department(id)
  ON DELETE CASCADE
); 

CREATE TABLE employee (
  id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NULL,
  manager_id INT NULL,
    -- role_id in the employee table will be a foreign key that is taking the reference from the role table's id column
  FOREIGN KEY (role_id)
    -- referencing role table's id column
  REFERENCES role(id)
  ON DELETE SET NULL
  ON UPDATE CASCADE,
    -- manager_id is referencing the employee's table id column
  FOREIGN KEY (manager_id)
  REFERENCES employee(id)
  ON DELETE SET NULL
  ON UPDATE CASCADE
)
