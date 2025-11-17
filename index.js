const express = require("express");
const cors = require("cors");
const db = require("./config/db");
const boardRoutes = require("./routes/boards");
const taskRoutes = require("./routes/tasks");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/boards", boardRoutes);
app.use("/tasks", taskRoutes);
app.get("/", (req, res) => {
  db.getConnection((err, connection) => {
    if (err) {
      return res.status(500).json({
        message: "Koneksi database gagal",
        error: err
      });
    } else {
      connection.release();
      return res.json({
        message: "Koneksi database berhasil ✔️"
      });
    }
  });
});
app.listen(5000, "0.0.0.0", () => {
  console.log("Server running on port 5000 🚀");
});

