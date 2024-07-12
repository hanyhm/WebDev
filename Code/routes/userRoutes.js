const express = require("express");
const userRouter = express.Router();
const auth = require("../middleware/auth");

const userController = require("../controllers/userController");

userRouter.get("/all", auth, userController.getAllUsers);

module.exports = userRouter;
