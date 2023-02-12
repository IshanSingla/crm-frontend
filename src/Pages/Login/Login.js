import { Box, Button, styled, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LandingScreen from '../../Components/LandingScreen';
import { fetchUser } from "../../Redux/Actions/UserActions";

const TextInput = styled(TextField)(() => ({
    width: "100%",
    marginBottom: "16px"
}))

function Login() {

    let user = useSelector((state) => state.UserReducer);
    let dispatch = useDispatch();
    let navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignIn = (e) => {
        e.preventDefault();
        if(email !== "" && password !== ""){
            dispatch(fetchUser(email, password));
            navigate("/business");   
        }
        setEmail("");
        setPassword("");
    }

    useEffect(() => {
        if(user.user?.length !== 0 && user.user){
            navigate("/business");
        }
    }, [user.user]);

    return (
        <LandingScreen component={
            <Box sx={{
                width: "50%"
            }}>
                <TextInput value={email} label="Email" onChange={(e) => {
                    setEmail(e.target.value);
                }} />
                <TextInput value={password} type="password" label="Password" onChange={(e) => {
                    setPassword(e.target.value);
                }} />
                <Button disabled={user.loader} onClick={handleSignIn} variant='contained' sx={{
                    width: "100%"
                }}>Sign In</Button>
            </Box>
        } />
    );
}

export default Login;