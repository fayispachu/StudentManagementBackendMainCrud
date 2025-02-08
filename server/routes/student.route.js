const express = require("express");
const {
  createStudent,
  getStudents,
  deleteStudent,
  getOneDoc,
  editStudents,
} = require("../controllers/student.controller");
const studentRouter = express.Router();

studentRouter.post("/create", createStudent);

studentRouter.get("/data", getStudents);
studentRouter.delete("/delete", deleteStudent);
studentRouter.get("/edit", getOneDoc);
studentRouter.put("/edit", editStudents);
module.exports = studentRouter;
