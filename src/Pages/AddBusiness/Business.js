import { Box, Button, IconButton, styled, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import LandingScreen from '../../Components/LandingScreen';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import AddIcon from '@mui/icons-material/Add';
import { signoutUser } from '../../Redux/Actions/UserActions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const TextInput = styled(TextField)(() => ({
    flexGrow: "1"
}))

function Card({name}){

    // let user = useSelector((state) => state.UserReducer);
    // let navigate = useNavigate();
    const [color, setColor] = useState("transparent");
    const [txtColor, setTxtColor] = useState("black");

    return(
        <Box onMouseEnter={() => {
            setColor("#163172");
            setTxtColor("white");
        }} onMouseLeave={() => {
            setColor("transparent");
            setTxtColor("black");
        }} sx={{
            border: "2px solid #163172",
            padding: "12px",
            borderRadius: "4px",
            display: "flex",
            background: color,
            transition: "0.5s",
            "&:hover":{
                cursor: "pointer"
            },
            marginBottom: "16px"
        }}>
            <Box sx={{
                flexGrow: "1",
                fontSize: "24px",
                color: txtColor
            }}>{name}</Box>
            <Box>
                <KeyboardArrowRightIcon sx={{
                    color: txtColor
                }} fontSize='large' />
            </Box>
        </Box>
    )
}

function Business(){

    const [business, setBusiness] = useState([]);
    const [name, setName] = useState("");

    let dispatch = useDispatch();
    let navigate = useNavigate();

    console.log(mongo);

    return(
        <LandingScreen component={
            <Box sx={{
                width: "50%"
            }}>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "16px",
                    gap: "16px"
                }}>
                    <TextInput value={name} onChange={(e) => {
                        setName(e.target.value);
                    }} />
                    <IconButton onClick={() => {
                        let flag = true;
                        business.forEach((item) => {
                            if(item === name){
                                flag = false;
                            }
                        })
                        if(flag){
                            if(name !== ""){
                                setBusiness((prevData) => [...prevData, name]);
                            }
                        }
                        setName("");
                    }} sx={{
                        border: "4px solid #163172",
                        color: "#163172"
                    }}><AddIcon sx={{
                        fontSize: "24px"
                    }} /></IconButton>
                </Box>
                <Typography sx={{
                    fontSize: "26px"
                }}>Your Businesses:</Typography>
                <Box sx={{
                    height: "300px",
                    border: "1px solid black",
                    padding: "32px 16px 16px 16px",
                    overflowY: "scroll",
                    "&::-webkit-scrollbar": {
                        width: "5px"
                    },
                    "&::-webkit-scrollbar-track": {
                        background: "transparent"
                    },
                    "&::-webkit-scrollbar-thumb": {
                        background: "rgb(0,12,42,0.2)",
                        borderRadius: "16px"
                    },
                    marginBottom: "16px",
                }}>
                    {
                        (business.length !== 0) ? business.map((item) => {
                            return(
                                <Card name={item} />
                            )
                        }) : <Box sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%"
                        }}>
                            <Typography>No Business Added</Typography>
                        </Box>
                    }
                </Box>
                <Button onClick={() => {
                    dispatch(signoutUser());
                    navigate("/");
                }} variant='contained'>Signout</Button>
            </Box>
        } />
    )
}

export default Business;