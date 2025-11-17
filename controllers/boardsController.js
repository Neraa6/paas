const db = require("../config/db");
const { v4: uuid } = require("uuid");

exports.getBoards = (req, res) => {
  db.query("SELECT * FROM boards", (err, rows) => {
    if (err) return res.status(500).json({ error: err });
    res.json(rows);
  });
};

exports.createBoard = (req, res) => {
  const id = uuid();
  const { title } = req.body;

  db.query(
    "INSERT INTO boards (id, title) VALUES (?, ?)",
    [id, title],
    (err) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ id, title });
    }
  );
};

exports.deleteBoard = (req, res) => {
  db.query(
    "DELETE FROM boards WHERE id = ?",
    [req.params.id],
    (err) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: "Board deleted" });
    }
  );
};
