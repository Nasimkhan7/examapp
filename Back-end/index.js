const express = require("express");
const cors = require("cors");

const app = express();

const port = 5000;

const userRouter = require("./routers/userRouter");
const paperRouter = require("./routers/paperRouter");
const answerRouter = require("./routers/answerRouter");

app.use(cors({ origin: ["http://localhost:3000"] }));
app.use(express.json());

app.use("/user", userRouter);
app.use("/paper", paperRouter);
app.use("/answer", answerRouter);

app.listen(port, () => {
  console.log("server successfully started on port 5000");
});

// create a videomodel title, description, thumbnail, file
// create a videoRouter
