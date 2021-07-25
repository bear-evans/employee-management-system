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

  viewEmployee() {
    return this.conn.promise().query("SELECT * FROM employee");
  }

  viewRole() {
    return this.conn.promise().query("SELECT * FROM role");
  }

  viewDepartment() {
    return this.conn.promise().query("SELECT * FROM department");
  }
}

module.exports = grizzlyEmployee;
