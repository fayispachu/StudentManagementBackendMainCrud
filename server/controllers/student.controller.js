const { Students } = require("../models/student.model");

const createStudent = async (req, res) => {
  try {
    const { name, age, number } = req.body;

    const doc = await Students.create({
      name,
      age,
      number,
    });
    console.log(doc);

    res.status(200).json({ message: "Document Created", doc });
  } catch (error) {
    console.log(error, "Error und Document Create");
    res.status(500).json({ message: "internal server error" });
  }
};

const getStudents = async (req, res) => {
  try {
    const students = await Students.find();
    return res.status(200).json({ students });
  } catch (error) {
    console.log(error, "Error in getStudents");
    res.status(500).json({ message: "internal get error" });
  }
};

const deleteStudent = async (req, res) => {
  try {
    console.log("Started deleteStudent()");

    const id = req.query.id;
    console.log(id);

    console.log("delete Started", id);

    const deleteStudent = await Students.findByIdAndDelete(id);
    return res.status(200).json({ message: "Task deleted", deleteStudent });
  } catch (error) {
    console.log(error, "deletil error und");
    res.status(500).json({ message: "internal delete  error" });
  }
};

const getOneDoc = async (req, res) => {
  try {
    const id = req.query.id;
    console.log(id);
    const doc = await Students.findById(id);
    console.log(doc);
    return res.status(200).json({ doc, message: "internal delete  error" });
  } catch (error) {
    console.log(error, "error in get one task db");
    res.status(500).json({ message: "internal getOne  error" });
  }
};

const editStudents = async (req, res) => {
  try {
    const id = req.query.id;
    const { name, age, number } = req.body;
    console.log(id);
    const edit = await Students.findByIdAndUpdate(
      id,
      { name, age, number },
      { new: true }
    );
    return res.status(200).json({ message: "Task edited", edit });
  } catch (error) {
    console.log(error, "error from editStudents");
    res.status(500).json({ message: "internal edit  error" });
  }
};

module.exports = {
  createStudent,
  getStudents,
  deleteStudent,
  getOneDoc,
  editStudents,
};
