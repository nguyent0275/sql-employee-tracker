DROP DATABASE IF EXISTS business_db;
CREATE DATABASE business_db;

USE business_db;

CREATE TABLE department (
  id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  name VARCHAR(30)
);

CREATE TABLE role (
  id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT NULL,
  -- department_id in the role table will be a foreign key that is taking the reference from the department table's id column
  FOREIGN KEY (department_id)
  -- referening department table's id column
  REFERENCES department(id)
  ON DELETE SET null
); 

CREATE TABLE employee (
  id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  manager_id INT NULL,
  role_id INT NULL,
    -- role_id in the role table will be a foreign key that is taking the reference from the role table's id column
  FOREIGN KEY (role_id)
  -- referening role table's id column
  REFERENCES role(id)
  ON DELETE SET null
)