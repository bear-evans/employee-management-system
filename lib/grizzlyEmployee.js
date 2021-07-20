const mysql = require("mysql2");

class grizzlyEmployee {
  constructor(myhost, myport, myuser, mypw) {
    this.conn = mysql.createConnection({
      host: myhost,
      port: myport,
      user: myuser,
      password: mypw,
      database: "grizzlyemployee_db",
    });
  }
}

module.exports = grizzlyEmployee;
