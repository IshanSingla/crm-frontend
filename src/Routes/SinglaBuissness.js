import { Dashboard, Inventory } from "@mui/icons-material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Expense from "../Pages/Dashboard/Expense";
import Overview from "../Pages/Dashboard/Overview";

export default function SinglaBuissness({ match }) {
  console.log(match.params.id);
  return (
    <Dashboard>
      <Routes>
        <Route path="./dashboard" element={<Overview />} />
        <Route path="./products" element={<Overview />} />
        <Route path="./inventory" element={<Inventory />} />
        <Route path="./expense" element={<Expense />} />
      </Routes>
    </Dashboard>
  );
}
