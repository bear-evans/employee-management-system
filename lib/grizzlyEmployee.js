require("dotenv").config();
const mysql = require("mysql2");

const PORT = process.env.PORT || 3306;
const HOSTNAME = process.env.PORT || "localhost";
const USERNAME = process.env.USER || "root";
const PW = process.env.PW || "password";

class grizzlyEmployee {
  constructor() {
    this.conn = mysql.createConnection({
      host: HOSTNAME,
      port: PORT,
      user: USERNAME,
      password: PW,
      database: "grizzlyemployee_db",
    });

    this.conn.connect((err) => {
      if (err) console.error(err);
    });
  }
}

module.exports = grizzlyEmployee;
