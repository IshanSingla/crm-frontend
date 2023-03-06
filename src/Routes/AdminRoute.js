import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AdminTemp from "../Components/AdminTemp";
import {
  AddAdmin,
  AddBuissnessRoles,
  AddRoles,
  AdminHome,
} from "../Pages/Admin/";

export default function AdminRoute({ currentUser }) {
  return currentUser ? (
    <AdminTemp>
      <Routes>
        <Route path="/dashboard" element={<AdminHome />} />
        <Route path="/addRoles" element={<AddRoles />} />
        <Route path="/addAdmin" element={<AddAdmin />} />
        <Route path="/addBuissnessRoles" element={<AddBuissnessRoles />} />
        <Route path="*" element={<Navigate to="./dashboard" />} />
      </Routes>
    </AdminTemp>
  ) : (
    <Navigate to="/auth/login" />
  );
}
