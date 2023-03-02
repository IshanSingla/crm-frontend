import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AdminTemp from "../Components/AdminTemp";
import AdminHome from "../Pages/Admin/AdminHome";

export default function AdminRoute({ currentUser }) {
  return currentUser ? (
    <AdminTemp>
      <Routes>
        <Route path="/" element={<AdminHome />} />
      </Routes>
    </AdminTemp>
  ) : (
    <Navigate to="/auth/login" />
  );
}
