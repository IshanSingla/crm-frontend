import React, { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  BrowserRouter,
  Navigate,
  redirect,
  Route,
  Routes,
} from "react-router-dom";
import Business from "./Pages/AllBusiness/AllBusiness";
import AllState from "./Redux/Global/AllState";
import { useSelector } from "react-redux";
import Loader from "./Components/Loader";
import Auth from "./Routes/Auth";

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
            <Route path="/auth/*" element={<Auth />} />
            <Route path="/business/*" element={<Business />} />
          </Routes>
        </AllState>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
