import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./Components/Loader";
import Auth from "./Routes/Auth";
import Business from "./Routes/Business";
import { auth } from "./Config/firebase";
import AdminRoute from "./Routes/AdminRoute";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import PageNotFound from "./Pages/404/PageNotFound";
import { ThemeContextProvider } from "./Contexts/ThemeContext";


export default function App() {
  const [loding, changeLoding] = useState(false);
  const [user, changeUser] = useState(auth.currentUser);
  return loding ? (
    <ThemeContextProvider systemTheme={"light"}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/*" element={<Auth currentUser={user} />} />
        <Route path="/business/*" element={<Business currentUser={user} />} />
        <Route path="/admin/*" element={<AdminRoute currentUser={user} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </ThemeContextProvider>
  ) : (
    <Loader changeLoding={changeLoding} changeUser={changeUser} />
  );
}
