INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Bear", "Evans", 3, 1), ("Alan", "Turing", 1, 1), ("Morgan", "Coleman", 2, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("Customer Support Technician", 30000, 4), ("Warehouse Worker", 18000, 3), ("Consultant", 40000, 1), ("Researcher", 40000, 2);

INSERT INTO department (name)
VALUES ("Executive"), ("Research"), ("Shipping"), ("Customer Support");