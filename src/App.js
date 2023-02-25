import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Loader from "./Components/Loader";
import Auth from "./Routes/Auth";
import Business from "./Routes/Business";
import { auth } from "./Config/firebase";

function App() {
  const [loding, changeLoding] = useState(false);
  const [currentUser, changeUser] = useState(auth.currentUser);
  return loding ? (
    <Routes>
      <Route path="/" element={<Navigate to="/auth/login" />} />
      <Route path="/auth/*" element={<Auth currentUser={currentUser} />} />
      <Route path="/business/*" element={<Business currentUser={currentUser} />}/>
    </Routes>
  ) : (
    <Loader changeLoding={changeLoding} changeUser={changeUser} />
  );
}

export default App;
