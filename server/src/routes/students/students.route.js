const express = require("express");

const studentsRouter = express.Router();

const {
  httpGetAllStudents,
  httpGetStudent,
  httpUpdateStudent,
  httpDeleteStudent,
  httpCreateStudent,
} = require("./students.controller.js");

studentsRouter.get("/", httpGetAllStudents);
studentsRouter.get("/:id", httpGetStudent);
studentsRouter.put("/:id", httpUpdateStudent);
studentsRouter.delete("/:id", httpDeleteStudent);
studentsRouter.post("/", httpCreateStudent);

module.exports = studentsRouter;
