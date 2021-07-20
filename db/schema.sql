DROP DATABASE IF EXISTS grizzlyemployee_db;
CREATE DATABASE grizzlyemployee_db;

USE grizzlyemployee_db;

CREATE TABLE employee (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INTEGER REFERENCES role(id),
    manager_id INTEGER REFERENCES employee(id)
);

CREATE TABLE role (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INTEGER REFERENCES department(name)
);

CREATE TABLE department (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30)
);