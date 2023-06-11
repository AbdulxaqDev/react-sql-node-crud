const {
  getAllStudents,
  getStudent,
  updateStudent,
  deleteStudent,
  createStudent,
} = require("../../models/students.module.js");

async function httpGetAllStudents(req, res) {
  return res.json(await getAllStudents());
}

async function httpGetStudent(req, res) {
  const { id } = req.params;
  const student = await getStudent(id);
  return res.json(student[0]);
}

async function httpUpdateStudent(req, res) {
  const { name, email } = req.body;
  const { id } = req.params;
  const student = await updateStudent(id, name, email);
  return res.json({ msg: student.changedRows });
}

async function httpDeleteStudent(req, res) {
  const { id } = req.params;
  const student = await deleteStudent(id);
  return res.json({ msg: student.changedRows });
}

async function httpCreateStudent(req, res) {
  const { name, email } = req.body;
  const studentStatus = (statusCode, message) => {
    return res.status(statusCode).json(message);
  };
  return await createStudent(name, email, studentStatus);
}

module.exports = {
  httpGetAllStudents,
  httpGetStudent,
  httpUpdateStudent,
  httpDeleteStudent,
  httpCreateStudent,
};
