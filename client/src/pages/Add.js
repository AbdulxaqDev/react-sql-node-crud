import React from "react";

import EditAdd from "../components/EditAdd";

export default function Add() {
  return <EditAdd student={{ Name: "", Email: "" }} btnLabel="Add"></EditAdd>;
}
