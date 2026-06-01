const express = require("express");

const router = express.Router();

const auth = require(
  "../middleware/authMiddleware"
);

const role = require(
  "../middleware/roleMiddleware"
);

const {
  getAllUsers,
  getAllTasks,
  deleteAnyTask,
} = require(
  "../controllers/adminController"
);

router.use(auth);

router.use(role("admin"));

router.get(
  "/users",
  getAllUsers
);

router.get(
  "/tasks",
  getAllTasks
);

router.delete(
  "/tasks/:id",
  deleteAnyTask
);

module.exports = router;