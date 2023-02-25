import { Box, Button, styled, TextField } from "@mui/material";
import { getIdToken, signInWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import LandingScreen from "../../Components/LandingScreen";
import { auth } from "../../Config/firebase";
const TextInput = styled(TextField)(() => ({
  width: "100%",
  marginBottom: "16px",
}));

function Login({ currentUser }) {
  // let dispatch = useDispatch();
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
        .then(async (userCreds) => {
          const token = await getIdToken(userCreds.user);
          console.log(token);

          navigate("/business");
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
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    if (currentUser?.length !== 0 && currentUser) {
      navigate("/business");
    }
  }, [currentUser, navigate]);

  return (
    <LandingScreen
      component={
        <Box
          sx={{
            width: "50%",
          }}
        >
          <TextInput
            value={email}
            label="Email"
            onChange={(e) => {
              setEmail(e.target.value);
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
            // disabled={user.loader}
            onClick={handleSignIn}
            variant="contained"
            sx={{
              width: "100%",
            }}
          >
            Sign In
          </Button>
        </Box>
      }
    />
  );
}

export default Login;
