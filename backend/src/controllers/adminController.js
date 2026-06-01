const User = require("../models/User");
const Task = require("../models/Task");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");

    res.json(users);
  } 
  catch (err) {
    res.status(500).json({message: err.message});
  }
};

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find().populate("createdBy", "name email");

    res.json(tasks);
  } 
  catch (err) {
    res.status(500).json({message: err.message});
  }
};

exports.deleteAnyTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    res.json({message: "Task deleted by admin"});
  } 
  catch (err) {
    res.status(500).json({message: err.message});
  }
};
