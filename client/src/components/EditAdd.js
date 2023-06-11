import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { httpCreateStudent, httpUpdateStudent } from "../hooks/requests";

import "./styles/EditAdd.css";

export default function EditAdd({
  btnLabel = "add button label",
  student = {},
}) {
  const [name, setName] = useState(student.Name);
  const [email, setEmail] = useState(student.Email);

  const navigate = useNavigate();

  const isUpdated = !(student.Name === name && student.Email === email);

  const btnStyle = {
    background: "grey",
    cursor: "not-allowed",
  };

  const update = async (ID, newName, newEmail) => {
    await httpUpdateStudent(ID, newName, newEmail).then((response) => {
      console.log(response);
      navigate("/");
    });
  };

  const add = async (newName, newEmail) => {
    if (name !== "" && email !== "" && email.includes("@")) {
      return await httpCreateStudent(newName, newEmail).then((response) => {
        alert(response.msg);
        navigate("/");
      });
    }
    return alert("Fill all fields properly to add");
  };

  return (
    <form>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        type="text"
        min={1}
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        type="email"
        min={7}
      />
      <div>
        <button
          style={isUpdated ? { cursor: "pointer" } : btnStyle}
          disabled={!isUpdated}
          onClick={(e) => {
            return btnLabel === "Update"
              ? update(student.ID, name, email)
              : add(name, email);
          }}
        >
          {btnLabel}
        </button>
      </div>
    </form>
  );
}
