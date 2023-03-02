import { Box, IconButton, styled, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import LandingScreen from "../Components/LandingScreen";
import AddIcon from "@mui/icons-material/Add";
import { BuissnessApi } from "../Api";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const TextInput = styled(TextField)(() => ({
  flexGrow: "1",
}));

function AllBusiness() {
  const [name, setName] = useState("");
  const [data, setData] = useState();
  const [updater, setUpdater] = useState(true);

  const handleDelete = (id) => {
    BuissnessApi().then((publicApi) => {
      publicApi
        .delete(`/delete`, { headers: { buissnessid: id } })
        .then((res) => {
          toast.success("Deleted Successfully");
          setUpdater(!updater);
        })
        .catch((err) => {
          toast.error(err.message);
        });
    });
  };

  const handleSubmit = () => {
    BuissnessApi().then((publicApi) => {
      publicApi
        .post("/create/", {
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
  };

  useEffect(() => {
    if (name !== "") return;
    BuissnessApi().then((publicApi) => {
      publicApi
        .get("/all", {})
        .then((res) => {
          setData(res.data.buissness);
        })
        .catch((err) => {
          toast.error(err.message);
        });
    });
  }, [name, updater]);

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
          {data ? (
            <div className="border border-zinc-400 py-4 px-3 rounded-md">
              <div className="flex flex-col space-y-2">
                {data.length === 0 ? (
                  <div className="">No Business Data Found!</div>
                ) : (
                  data.map((val) => {
                    // console.log(val);
                    return (
                      <div key={val._id} className="flex flex-row ">
                        <Link
                          className="border border-black p-2 w-[85%] rounded-md"
                          to={`/business/${val._id}/dashboard`}
                        >
                          {val.buissnessName}
                        </Link>
                        <button
                          onClick={() => handleDelete(val._id)}
                          className="bg-red-500 w-[15%] rounded-md"
                        >
                          Delete
                        </button>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          ) : (
            "Loading"
          )}
          {/* <ListBusiness name={name} /> */}
        </Box>
      }
    />
  );
}

export default AllBusiness;
