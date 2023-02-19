import Dashboard from "../Components/Dashboard";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Inventory from "../Pages/Dashboard/Inventory";
import Expense from "../Pages/Dashboard/Expense";

export default function SinglaBuissness({ currentUser }) {
  return (
    <Dashboard
      component={
        <Routes>
          <Route path="/" element={<Navigate to="./dashboard" />} />
          <Route path="/dashboard" element={"dashboard"} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/expense" element={<Expense />} />
          <Route path="/setting" element={"setting"} />
        </Routes>
      }
    />
  );
}
