const db = require("../config/db");
const { v4: uuid } = require("uuid");

exports.getTasksByBoard = (req, res) => {
  const { board_id } = req.params;

  db.query(
    "SELECT * FROM tasks WHERE board_id = ?",
    [board_id],
    (err, rows) => {
      if (err) return res.status(500).json({ error: err });
      res.json(rows);
    }
  );
};

exports.createTask = (req, res) => {
  const id = uuid();
  const { board_id, title, description, status } = req.body;

  db.query(
    `INSERT INTO tasks (id, board_id, title, description, status) 
     VALUES (?, ?, ?, ?, ?)`,
    [id, board_id, title, description, status || "todo"],
    (err) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ id, board_id, title, description, status });
    }
  );
};

exports.updateTask = (req, res) => {
  const { title, description, status } = req.body;

  db.query(
    `UPDATE tasks SET title=?, description=?, status=? WHERE id=?`,
    [title, description, status, req.params.id],
    (err) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: "Task updated" });
    }
  );
};

exports.deleteTask = (req, res) => {
  db.query(
    "DELETE FROM tasks WHERE id=?",
    [req.params.id],
    (err) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: "Task deleted" });
    }
  );
};
