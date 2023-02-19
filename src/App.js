import React, { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  BrowserRouter,
  Navigate,
  redirect,
  Route,
  Routes,
} from "react-router-dom";
import Login from "./Pages/Login/Login";
import Business from "./Pages/AddBusiness/Business";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AllState from "./Redux/Global/AllState";
import { useSelector } from "react-redux";
import Loader from "./Components/Loader";
import Lock from "./Components/Lock";
import Products from "./Pages/Dashboard/components/Products";
import Inventory from "./Pages/Dashboard/components/Inventory";
import Expense from "./Pages/Dashboard/components/Expense";
import Overview from "./Pages/Dashboard/components/Overview";
import Signup from "./Pages/Signup/Signup";

const theme = createTheme({
  palette: {
    primary: {
      main: "#163172",
    },
  },
});

function App() {
  let user = useSelector((state) => state.UserReducer);
  const [bool, setBool] = useState(true);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    setBool(user.loader);
  }, [user.loader]);

  useEffect(() => {
    setFlag(true);
    setInterval(() => {
      setFlag(false);
    }, 4000);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AllState>
          {(bool || flag) && <Loader />}
          <Routes>
            <Route path="/" element={<Navigate to="/auth/login" />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/signup" element={<Signup />} />
            <Route
              path="/business"
              element={<Lock component={<Business />} />}
            />
            <Route
              path="/business/dashboard"
              element={
                <Lock component={<Dashboard component={<Overview />} />} />
              }
            />
            <Route
              path="/business/dashboard/products"
              element={
                <Lock component={<Dashboard component={<Products />} />} />
              }
            />
            <Route
              path="/business/dashboard/inventory"
              element={
                <Lock component={<Dashboard component={<Inventory />} />} />
              }
            />
            <Route
              path="/business/dashboard/expense"
              element={
                <Lock component={<Dashboard component={<Expense />} />} />
              }
            />
          </Routes>
        </AllState>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
