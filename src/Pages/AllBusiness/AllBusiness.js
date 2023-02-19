import {
  Box,
  Button,
  IconButton,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import LandingScreen from "../../Components/LandingScreen";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import Card from "../../Components/Card";
import { publicApi } from "../../Api";
import { getIdToken } from "firebase/auth";

const TextInput = styled(TextField)(() => ({
  flexGrow: "1",
}));

function AllBusiness({ currentUser }) {

  const [business, setBusiness] = useState([]);
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  let navigate = useNavigate();

  const fetchData = () => {
    getIdToken(currentUser).then((token) => {
      publicApi
        .get(
          "/buissness",
          {},
          {
            headers: {
              authorization: token,
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          setData(res.data.buissness);
        });
    });
  };

  const handleSubmit = () => {
    getIdToken(currentUser).then((token) => {
      publicApi.post(
        "/buissness/create",
        {
          buissnessName: name,
          buissnessGstNo: "123456",
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
    });
    console.log("running");
  };

  useEffect(() => {
    fetchData();
  }, [currentUser]);

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
              // dispatch(signoutUser());
              navigate("/");
            }}
            variant="contained"
          >
            Sign out
          </Button>
        </Box>
      }
    />
  );
}

export default AllBusiness;
