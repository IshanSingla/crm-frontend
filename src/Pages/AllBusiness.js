import { Box, IconButton, styled, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import LandingScreen from "../Components/LandingScreen";
import AddIcon from "@mui/icons-material/Add";
import {Api} from "../Api";
import ListBusiness from "../Components/ListBusiness";

const TextInput = styled(TextField)(() => ({
  flexGrow: "1",
}));

function AllBusiness() {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    Api().then((publicApi) => {
      publicApi
        .post("/buissness/create/", {
          buissnessName: name,
          buissnessGstNo: "123456",
        })
        .then(() => {
          setName("");
        })
        .catch((err) => {
          console.log(err.message);
        });
    });

    // currentUser.getIdToken().then((token) => {
    //   publicApi
    //     .post(
    //       "/buissness/create/",
    //       {
    //         buissnessName: name,
    //         buissnessGstNo: "123456",
    //       },
    //       {
    //         headers: {
    //           authorization: token,
    //         },
    //       }
    //     )
    //     .then(() => {
    //       setName("");
    //     })
    //     .catch((err) => {
    //       console.log(err.message);
    //     });
    // });
  };

  return (
    <LandingScreen
      component={
        <Box
          sx={{
            width: "80%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginBottom: "16px",
              gap: "16px",
            }}
          >
            <TextInput
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <IconButton
              onClick={handleSubmit}
              sx={{
                border: "4px solid #163172",
                color: "#163172",
              }}
            >
              <AddIcon
                sx={{
                  fontSize: "24px",
                }}
              />
            </IconButton>
          </Box>
          <Typography
            sx={{
              fontSize: "26px",
            }}
          >
            Your Businesses:
          </Typography>

          <ListBusiness name={name} />
        </Box>
      }
    />
  );
}

export default AllBusiness;
