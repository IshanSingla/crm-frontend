import { Dashboard, Inventory } from "@mui/icons-material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Expense from "../Pages/Dashboard/Expense";
import Overview from "../Pages/Dashboard/Overview";

export default function SinglaBuissness({ match,currentUser }) {
  console.log(match.params.id);
  return (
    <Dashboard>
      <Routes>
        <Route path="/dashboard" element={<Overview currentUser={currentUser}/>} />
        <Route path="/products" element={<Overview currentUser={currentUser}/>} />
        <Route path="/inventory" element={<Inventory currentUser={currentUser}/>} />
        <Route path="/expense" element={<Expense currentUser={currentUser}/>} />
      </Routes>
    </Dashboard>
  );
}
