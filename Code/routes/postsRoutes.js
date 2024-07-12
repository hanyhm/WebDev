const express = require("express");
const postsRouter = express.Router();

const postsController = require("../controllers/postsController");

postsRouter.get("/all", postsController.getAllPosts);
// postsRouter.post("/new", postsController.createPost);

module.exports = postsRouter;
