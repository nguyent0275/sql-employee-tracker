INSERT INTO department(name) 
VALUES
("Engineering"),
("Finance"),
("Sales"),
("Legal");

INSERT INTO role(title, salary, department_id)
VALUES
('Sales Lead', 100000, 3),
('Salesperson', 80000, 3),
('Lead Engineer', 150000, 1),
('Software Engineer', 120000, 1),
('Account Manager', 160000, 2),
('Accountant', 125000, 2),
('Legal Team Lead', 250000, 4),
('Lawyer', 190000, 4);

-- order matters because manager_id is referencing the same table's primary id
-- i.e can't have a manger_id for an employee id that doesn't exist yet
INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES
('John', 'Doe', 1, null),
('Mike', 'Chan', 3, null),
('Ashley', 'Rodriguez', 4, 2),
('Kevin', 'Tupik', 2, 1),
('Sarah', 'Lourd', 7, null),
('Tom', 'Allen', 5, null),
('Kunal', 'Singh', 6, 6),
('Malia', 'Brown', 8, 5);
