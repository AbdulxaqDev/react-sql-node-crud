const express = require("express");
const cors = require("cors");

const app = express();

const studentsRouter = require("./routes/students/students.route.js");

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());

app.use("/students", studentsRouter);

module.exports = app;
