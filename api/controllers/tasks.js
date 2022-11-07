const taskSchema = require("../models/taskModel");

// const tasks = [];

module.exports.GET_TASKS = function (req, res) {
  taskSchema.find().then((results) => {
    return res.status(200).json({ tasks: results });
  });
};

module.exports.GET_TASK = function (req, res) {
  taskSchema.findOne({ _id: req.params.id }).then((results) => {
    return res.status(200).json({ tasks: results });
  });
};

module.exports.INSERT_TASK = function (req, res) {
  const task = new taskSchema({
    task: req.body.task,
    isDone: req.body.isDone,
  });

  task.save().then((result) => {
    return res.status(200).json({
      statusMessage: "task was inserted successfully",
      result: result,
    });
  });
};

module.exports.EDIT_TASK = (req, res) => {
  taskSchema
    .updateOne({ _id: req.params.id }, { task: req.body.editedTask })
    .then((result) => {
      return res
        .status(200)
        .json({ statusMessage: "Edited successfully", editedTask: result });
    });
};

module.exports.CHANGE_TASK_STATUS = async (req, res) => {
  const currentTaskData = await taskSchema
    .findOne({ _id: req.params.id })
    .exec();
  taskSchema
    .updateOne({ _id: req.params.id }, { isDone: !currentTaskData.isDone })
    .then((result) => {
      return res.status(200).json({ statusMessage: "Edited successfully" });
    });
};

module.exports.DELETE_TASK = function (req, res) {
  taskSchema.deleteOne({ _id: req.params.id }).then((results) => {
    res.status(200).json({
      statusMessage: "Item was deleted successfully",
      deletedItem: results,
    });
  });
};
