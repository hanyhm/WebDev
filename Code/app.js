const express = require("express");
const userRouter = require("./routes/userRoutes");
const postsRouter = require("./routes/postsRoutes");

const app = express();

app.use(express.json());

app.use("/users", userRouter);
app.use("/posts", postsRouter);

app.listen(3000, () => {
  console.log("3000");
});
