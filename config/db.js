const mysql = require("mysql2");

const db = mysql.createPool({
  host: "172.200.20.2",
  user: "kel_7",
  password: "12345",
  database: "todo_app",
});

db.getConnection((err, connection) => {
  if (err) {
    console.log("MySQL error:", err);
  } else {
    console.log("MySQL Connected ✔️");
    connection.release();
  }
});

module.exports = db;
