require("dotenv").config();
const mysql = require("mysql2");

class grizzlyEmployee {
  constructor(myhost, myuser, mypw, myport) {
    this.conn = mysql.createConnection({
      host: myhost,
      port: myport,
      user: myuser,
      password: mypw,
      database: "grizzlyemployee_db",
      charset: "utf8",
    });

    this.conn.connect((err) => {
      if (err) console.error(err);
    });
  }
  // =================================== Viewing ======================================
  viewEmployee() {
    return this.conn.promise().query("SELECT * FROM employee");
  }

  viewRole() {
    return this.conn.promise().query("SELECT * FROM role");
  }

  viewDepartment() {
    return this.conn.promise().query("SELECT * FROM department");
  }
  // =================================== Creating ======================================
  addEmployee(first, last, role, man) {
    return this.conn
      .promise()
      .query(
        "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)",
        [first, last, role, man]
      );
  }

  addRole(title, salary) {
    return this.conn
      .promise()
      .query("INSERT INTO role (title, salary) VALUES (?, ?)", [title, salary]);
  }

  addDepartment(depname) {
    return this.conn
      .promise()
      .query("INSERT INTO department (name) VALUES (?)", [depname]);
  }
  // =================================== Updating ======================================
  upRole(first, last, role) {
    return this.conn
      .promise()
      .query(
        "UPDATE employee SET role_id = (?) WHERE first_name = (?) AND last_name = (?)",
        [role, first, last]
      );
  }

  upManager(first, last, man) {
    return this.conn
      .promise()
      .query(
        "UPDATE employee SET manager_id = (?) WHERE first_name = (?) AND last_name = (?)",
        [man, first, last]
      );
  }

  // =================================== Deleting ======================================
  delEmployee(id) {
    return this.conn
      .promise()
      .query("DELETE FROM employee WHERE id = (?)", [id]);
  }

  delRole(id) {
    return this.conn.promise().query("DELETE FROM role WHERE id = (?)", [id]);
  }

  delDepartment(id) {
    return this.conn
      .promise()
      .query("DELETE FROM department WHERE id = (?)", [id]);
  }
}

module.exports = grizzlyEmployee;
