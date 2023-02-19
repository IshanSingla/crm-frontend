import { Box, Typography } from "@mui/material";
import React, { useLayoutEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function DropDownLink({ name, data, display }) {
  let navigate = useNavigate();
  let location = useLocation();
  const background = "rgba(186, 215, 233, 0.5)";
  const [txtColor, setTxtColor] = useState("white");

  useLayoutEffect(() => {
    if (
      location.pathname ===
      `/dashboard/${name.toLowerCase()}/${data.name.toLowerCase()}`
    ) {
      setTxtColor("#000C2A");
    } else {
      setTxtColor("white");
    }
  }, [location.pathname]);

  return (
    <Box
      onMouseEnter={() => {
        setTxtColor("#000C2A");
      }}
      onMouseLeave={() => {
        if (
          location.pathname !==
          `/dashboard/${name.toLowerCase()}/${data.name.toLowerCase()}`
        ) {
          setTxtColor("white");
        }
      }}
      sx={
        location.pathname ===
        `/dashboard/${name.toLowerCase()}/${data.name.toLowerCase()}`
          ? {
              padding: "12px",
              display: "flex",
              justifyContent: "space-between",
              transition: "0.5s",
              background: background,
              "&:hover": {
                cursor: "pointer",
                background: background,
              },
            }
          : {
              padding: "12px",
              display: "flex",
              justifyContent: "space-between",
              transition: "0.5s",
              display: display,
              "&:hover": {
                cursor: "pointer",
                background: background,
              },
            }
      }
    >
      <Typography
        sx={{
          color: txtColor,
          fontSize: "14px",
        }}
      >
        {data.name}
      </Typography>
    </Box>
  );
}
