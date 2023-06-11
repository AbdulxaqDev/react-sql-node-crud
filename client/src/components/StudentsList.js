import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { httpDeleteStudent } from "../hooks/requests";

import "./styles/StudentList.css";

export default function StudentsList({ students = [] }) {
  const navigate = useNavigate();
  const deleteStudent = (studentID) => {
    httpDeleteStudent(studentID).then(() => navigate("/"));
  };

  return students ? (
    <div className="list">
      <div className="list-head">
        <div>ID</div>
        <div>Name</div>
        <div>Email</div>
        <div>Update</div>
        <div>Remove</div>
      </div>
      {students.map((student) => (
        <div key={student.ID} className="list-body">
          <div>{student.ID}</div>
          <div>{student.Name}</div>
          <div>{student.Email}</div>
          <div>
            <Link to={`edit/${student.ID}`}>
              <button type="button" className="list-body-edit">
                Edit
              </button>
            </Link>
          </div>
          <div>
            <Link to={`edit/${student.ID}`}>
              <button
                onClick={() => deleteStudent(student.ID)}
                type="button"
                className="list-body-delete"
              >
                Delete
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}
