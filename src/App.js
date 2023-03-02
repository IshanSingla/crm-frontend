import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Loader from "./Components/Loader";
import Auth from "./Routes/Auth";
import Business from "./Routes/Business";
import { auth } from "./Config/firebase";
import AdminRoute from "./Routes/AdminRoute";

function App() {
  const [loding, changeLoding] = useState(false);
  const [user, changeUser] = useState(auth.currentUser);
  return loding ? (
    <Routes>
      <Route path="/" element={<Navigate to="/auth/login" />} />
      <Route path="/auth/*" element={<Auth currentUser={user} />} />
      <Route path="/business/*" element={<Business currentUser={user} />} />
      <Route path="/admin" element={<AdminRoute currentUser={user} />} />
    </Routes>
  ) : (
    <Loader changeLoding={changeLoding} changeUser={changeUser} />
  );
}

export default App;
