const express = require("express");
const router = express.Router();
const controller = require("../controllers/tasksController");

router.get("/:board_id", controller.getTasksByBoard);
router.post("/", controller.createTask);
router.put("/:id", controller.updateTask);
router.delete("/:id", controller.deleteTask);

module.exports = router;
