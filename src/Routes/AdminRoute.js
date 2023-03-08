import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import DashboardTemp from "../Components/DashboardTemp";
import {
  AddAdmin,
  AddBuissnessRoles,
  AddRoles,
  AdminHome,
} from "../Pages/Admin/";

export default function AdminRoute({ currentUser }) {
  return currentUser ? (
    <DashboardTemp>
      <Routes>
        <Route path="/dashboard" element={<AdminHome />} />
        <Route path="/addRoles" element={<AddRoles />} />
        <Route path="/addAdmin" element={<AddAdmin />} />
        <Route path="/addBuissnessRoles" element={<AddBuissnessRoles />} />
        <Route path="*" element={<Navigate to="./dashboard" />} />
      </Routes>
    </DashboardTemp>
  ) : (
    <Navigate to="/auth/login" />
  );
}
