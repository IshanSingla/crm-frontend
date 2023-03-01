import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../Pages/Admin/Admin";

export default function AdminRoute() {
  return (
    <Routes>
      <Route path="/" element={<Admin />} />
    </Routes>
  );
}
