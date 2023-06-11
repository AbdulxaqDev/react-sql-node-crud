const util = require("util");

const mysql = require("mysql");
const dotenv = require("dotenv").config();

let query;
async function connectDB() {
  try {
    const conn = mysql.createConnection({
      host: process.env.HOST,
      user: process.env.USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE,
    });
    query = util.promisify(conn.query).bind(conn);
    console.log("Connected DB successfully...");
  } catch (error) {
    console.log("\nError on connecting to DB:", error);
  }
}

async function getAllStudents() {
  return await query("SELECT * FROM students;");
}

async function getStudent(id) {
  return await query(`SELECT * FROM students WHERE ID=${id};`);
}
async function updateStudent(id, name, email) {
  return await query(
    `UPDATE students SET Name='${name}', Email='${email}' WHERE ID=${id};`
  );
}

async function deleteStudent(id) {
  return await query(`DELETE FROM students WHERE ID=${id};`);
}

async function createStudent(name, email, studentStatus) {
  await query(
    `INSERT INTO students (Name, Email) VALUES ('${name}', '${email}');`,
    (error, result) => {
      if (error) {
        return studentStatus(422, {
          msg: "The username or email you entered is already in use.",
        });
      }
      return studentStatus(201, { msg: "Student created successfully." });
    }
  );
}

module.exports = {
  connectDB,
  getAllStudents,
  getStudent,
  updateStudent,
  deleteStudent,
  createStudent,
};
