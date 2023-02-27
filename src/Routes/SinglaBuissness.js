import DashboardTemplate from "../Components/DashboardTemplate";
import React from "react";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import Inventory from "../Pages/Buissness/Inventory";
import Expense from "../Pages/Buissness/Expense";
import DashboardRoute from "./Dashboard";
import Settings from "../Pages/Buissness/Setting";

export default function SinglaBuissness() {
  const param = useParams();
  const { id } = param;
  localStorage.setItem("buissnessId", id);
  return (
    <DashboardTemplate
      route={param["*"]}
      component={
        <Routes>
          <Route path="/dashboard/*" element={<DashboardRoute />} />
          <Route path="/inventory/*" element={<Inventory />} />
          <Route path="/expense" element={<Expense />} />
          <Route path="/setting" element={<Settings />} />
          <Route path="*" element={<Navigate to="./dashboard" />} />
        </Routes>
      }
    />
  );
}
