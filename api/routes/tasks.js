const express = require("express");
const router = express.Router();
const tasksController = require("../controllers/tasks");

router.get("/getTasks", tasksController.GET_TASKS);

router.get("/getTask/:id", tasksController.GET_TASK);

router.post("/insertTask", tasksController.INSERT_TASK);

router.put("/editTask/:id", tasksController.EDIT_TASK);

router.put("/changedTaskStatus/:id", tasksController.CHANGE_TASK_STATUS);

router.delete("/deleteTask/:id", tasksController.DELETE_TASK);

module.exports = router;
