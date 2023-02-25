import { Box, Button, styled, TextField } from "@mui/material";
import { createUserWithEmailAndPassword, getIdToken } from "firebase/auth";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { publicApi } from "../../Api";
import { auth } from "../../Config/firebase";

const TextInput = styled(TextField)(() => ({
  width: "100%",
  marginBottom: "16px",
}));

function Signup() {
  // let
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit = async () => {
    setLoader(true);
    if (
      name !== "" &&
      email !== "" &&
      gender !== "" &&
      phone !== "" &&
      password !== ""
    ) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCreds) => {
          getIdToken(userCreds.user).then((token) => {
            publicApi
              .post(
                "/auth/create",
                {
                  email: email,
                  name: name,
                  userGender: gender,
                  phoneNumber: phone,
                },
                {
                  headers: {
                    authorization: token,
                  },
                }
              )
              .then((response) => {
                toast.success("User Signup Successfully");
              });
          });
        })
        .catch((error) => {
          if (error.code === "auth/user-disabled") {
            toast.error("User has been disabled");
          } else if (error.code === "auth/user-not-found") {
            toast.error("User not found");
          } else if (error.code === "auth/wrong-password") {
            toast.error("Wrong Password");
          } else {
            toast.error(error.message);
          }
        });
    }
    setName("");
    setEmail("");
    setPassword("");
    setGender("");
    setPhone("");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          height: "max-content",
          width: "30%",
        }}
      >
        <TextInput
          value={name}
          label="Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <TextInput
          value={email}
          label="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextInput
          value={gender}
          label="Gender"
          onChange={(e) => {
            setGender(e.target.value);
          }}
        />
        <TextInput
          value={phone}
          label="Phone"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <TextInput
          value={password}
          type="password"
          label="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button
          onClick={(e) => {
            if (!loader) {
              handleSubmit(e);
            }
          }}
          variant="contained"
          sx={{
            width: "100%",
          }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
}

export default Signup;
