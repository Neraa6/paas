const express = require("express");
const router = express.Router();
const controller = require("../controllers/boardsController");

router.get("/", controller.getBoards);
router.post("/", controller.createBoard);
router.delete("/:id", controller.deleteBoard);

module.exports = router;
