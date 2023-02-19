import { Box } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import React, { useState } from 'react'

export default function Card({name}) {
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
