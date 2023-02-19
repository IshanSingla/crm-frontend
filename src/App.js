import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Navigate, Route, Routes } from "react-router-dom";
import Loader from "./Components/Loader";
import Auth from "./Routes/Auth";
import Business from "./Routes/Business";
import { auth } from "./Config/firebase";

const theme = createTheme({
  palette: {
    primary: {
      main: "#163172",
    },
  },
});

function App() {
  const [loding, changeLoding] = useState(false);
  const [currentUser, changeUser] = useState(auth.currentUser);
  return loding ? (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/auth/login" />}
          currentUser={currentUser}
        />
        <Route path="/auth/*" element={<Auth currentUser={currentUser} />} />
        <Route
          path="/business/*"
          element={<Business currentUser={currentUser} />}
        />
      </Routes>
    </ThemeProvider>
  ) : (
    <Loader changeLoding={changeLoding} changeUser={changeUser} />
  );
}

export default App;
