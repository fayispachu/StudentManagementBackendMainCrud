const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");
const mongoose = require("mongoose");
const studentRouter = require("./routes/student.route");
require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use("/api/student", studentRouter);

mongoose
  .connect(process.env.CONNECTING_STRING)
  .then(() => {
    console.log("Success mongo");
  })
  .catch(() => {
    console.log("Error und Mongo");
  });

app.listen(port, () => {
  console.log("Server Running on http://localhost:4000");
});
