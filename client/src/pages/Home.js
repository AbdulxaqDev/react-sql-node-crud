import React from "react";
import { Link, useLoaderData } from "react-router-dom";

import StudentsList from "../components/StudentsList.js";

import "./styles/Home.css";

export default function Home() {
  const students = useLoaderData();
  return (
    <>
      <h1>Reactjs-Nodejs-MySql-CRUD</h1>
      <StudentsList students={students} />
      <div className="add">
        <Link to={"add"}>
          <button>Add</button>
        </Link>
      </div>
    </>
  );
}
