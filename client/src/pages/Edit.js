import React from "react";
import { useLoaderData } from "react-router-dom";

import EditAdd from "../components/EditAdd";

export default function Edit() {
  const student = useLoaderData();
  return <EditAdd btnLabel="Update" student={student}></EditAdd>;
}
