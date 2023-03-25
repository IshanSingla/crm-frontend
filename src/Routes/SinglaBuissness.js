import React from "react";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import Inventory from "../Pages/Buissness/Inventory";
import Expense from "../Pages/Buissness/Expense";
import Settings from "../Pages/Buissness/Setting";
import DashboardTemp from "../Components/DashboardTemp";
import Dashboard from "../Pages/Buissness/Dashboard";
import {
  AnalyticsIcon,
  CalculatorIcon,
  HomeIcon,
  MoneyIcon,
  SalesIcon,
  SettingIcons,
} from "../Components/Icons";
import Sales from "../Pages/Buissness/Sales";
import { ThemeContextProvider } from "../Contexts/ThemeContext";
import Analytics from "../Pages/Buissness/Analytics";
import Maintainance from "../Pages/Buissness/Maintainance";

export default function SinglaBuissness() {
  const param = useParams();
  const { id } = param;
  localStorage.setItem("buissnessId", id);
  const Menus = [
    { title: "Dashboard", icon: <HomeIcon />, route: "dashboard" },
    { title: "Analytics", icon: <AnalyticsIcon />, route: "analytics" },
    {
      title: "Inventory",
      icon: <CalculatorIcon />,
      route: "inventory",
    },
    { title: "Expenses", icon: <MoneyIcon />, route: "expense" },
    {
      title: "Sales",
      icon: <SalesIcon />,
      route: "sales",
    },
    { title: "Settings", icon: <SettingIcons />, route: "settings" },
  ];

  return (
    <ThemeContextProvider>
      <DashboardTemp route={param["*"]} Menus={Menus}>
        <Routes>
          <Route path="/dashboard/*" element={<DashboardRoute />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/expense" element={<Expense />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/maintainance" element={<Maintainance />} />
          <Route path="*" element={<Navigate to="./dashboard" />} />
        </Routes>
      </DashboardTemp>
    </ThemeContextProvider>
  );
}

export function DashboardRoute() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/inventory/:inventoryid" element={<></>} />
      <Route path="*" element={<Navigate to="./" />} />
    </Routes>
  );
}
