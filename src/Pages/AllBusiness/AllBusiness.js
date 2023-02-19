import {
  Box,
  Button,
  IconButton,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import LandingScreen from "../../Components/LandingScreen";
import AddIcon from "@mui/icons-material/Add";
import { signoutUser } from "../../Redux/Actions/UserActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Card from "../../Components/Card";

const TextInput = styled(TextField)(() => ({
  flexGrow: "1",
}));

function AllBusiness() {
  const [business, setBusiness] = useState([]);
  const [name, setName] = useState("");

  let dispatch = useDispatch();
  let navigate = useNavigate();

  return (
    <LandingScreen
      component={
        <Box
          sx={{
            width: "50%",
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
              onClick={() => {
                let flag = true;
                business.forEach((item) => {
                  if (item === name) {
                    flag = false;
                  }
                });
                if (flag) {
                  if (name !== "") {
                    setBusiness((prevData) => [...prevData, name]);
                  }
                }
                setName("");
              }}
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
          <Box
            sx={{
              height: "300px",
              border: "1px solid black",
              padding: "32px 16px 16px 16px",
              overflowY: "scroll",
              "&::-webkit-scrollbar": {
                width: "5px",
              },
              "&::-webkit-scrollbar-track": {
                background: "transparent",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "rgb(0,12,42,0.2)",
                borderRadius: "16px",
              },
              marginBottom: "16px",
            }}
          >
            {business.length !== 0 ? (
              business.map((item) => {
                return <Card name={item} />;
              })
            ) : (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <Typography>No Business Added</Typography>
              </Box>
            )}
          </Box>
          <Button
            onClick={() => {
              dispatch(signoutUser());
              navigate("/");
            }}
            variant="contained"
          >
            Signout
          </Button>
        </Box>
      }
    />
  );
}

export default AllBusiness;