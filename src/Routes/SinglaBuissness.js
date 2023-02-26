import DashboardTemplate from "../Components/DashboardTemplate";
import React from "react";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import Inventory from "../Pages/Buissness/Inventory";
import Expense from "../Pages/Buissness/Expense";
import DashboardRoute from "./Dashboard";
import Settings from "../Pages/Buissness/Setting";

export default function SinglaBuissness({ currentUser }) {
  const param = useParams();
  const { id } = param;
  return (
    <DashboardTemplate
      id={id} 
      route ={param["*"]}
      component={
        <Routes>
          <Route path="/dashboard/*" element={<DashboardRoute currentUser={currentUser} id={id} />} />
          <Route path="/inventory/*" element={<Inventory currentUser={currentUser} id={id} />} />
          <Route path="/expense" element={<Expense currentUser={currentUser} id={id} />} />
          <Route path="/setting" element={<Settings currentUser={currentUser} id={id}/> } />
          <Route path="*" element={<Navigate to="./dashboard" />} />
        </Routes>
      }
    />
  );
}
