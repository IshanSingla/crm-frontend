import { Dashboard } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import AllBusiness from "../Pages/AllBusiness/AllBusiness";
import SinglaBuissness from "./SinglaBuissness";

export default function Business() {
  let user = useSelector((state) => state.UserReducer);
  let navigate = useNavigate();
  const [bool, setBool] = useState(false);

  useEffect(() => {
    setBool(user.user);
    if (!user.user) {
      navigate("/");
    }
  }, [user.user]);
  return (
    bool && (
      <Routes>
        <Route path="./" element={<AllBusiness />} />
        <Route path="./:id/*" element={<SinglaBuissness />} />
      </Routes>
    )
  );
}
