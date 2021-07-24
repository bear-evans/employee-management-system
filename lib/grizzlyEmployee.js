require("dotenv").config();
const cTable = require("console.table");
const chalk = require("chalk");
const mysql = require("mysql2");

class grizzlyEmployee {
  constructor(myhost, myuser, mypw, myport) {
    this.conn = mysql.createConnection({
      host: myhost,
      port: myport,
      user: myuser,
      password: mypw,
      database: "grizzlyemployee_db",
    });

    this.conn.connect((err) => {
      if (err) console.error(err);
    });
  }

  viewEmployee() {
    this.conn.query("SELECT * FROM employee", (err, res, field) => {
      if (err) {
        console.log(err);
        return;
      }
      cTable([
        {
          name: "foo",
          age: 10,
        },
        {
          name: "bar",
          age: 20,
        },
      ]);
    });
  }
}

module.exports = grizzlyEmployee;
