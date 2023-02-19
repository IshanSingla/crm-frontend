import { Box, Button, styled, TextField } from "@mui/material";
import { getIdToken, signInWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
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
      signInWithEmailAndPassword(auth, email, password).then(async (userCreds) => {
        const token = await getIdToken(userCreds.user);
        console.log(token);

      navigate("/business");
    });
    }
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    if (currentUser?.length !== 0 && currentUser) {
      navigate("/business");
    }
  }, [currentUser]);

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
