import { Box, Typography } from "@mui/material";
import { onAuthStateChanged } from "firebase/auth";
import React from "react";
import { auth } from "../Config/firebase";

function Loader({ changeUser, changeLoding }) {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      await user.reload();
      await changeUser(user);
    }
    changeLoding(true);
  });
  return (
    <Box
      sx={{
        position: "fixed",
        top: "0%",
        left: "0%",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "25",
        background: "#FFF8EF",
      }}
    >
      <Box
        sx={{
          width: "max-content",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            width: "max-content",
          }}
        >
          MIXXO
        </Typography>
      </Box>
    </Box>
  );
}

export default Loader;
