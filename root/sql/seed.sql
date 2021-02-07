USE companyDB;

INSERT INTO department (name)
VALUES ("Sales");

INSERT INTO department (name)
VALUES ("IT");

INSERT INTO role (title, salary, department_id)
VALUES ("Salesman", 50000.00, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("Engineer", 40000.00, 2);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Lia", "Liu", 1);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Charlie", "Bateman", 2);