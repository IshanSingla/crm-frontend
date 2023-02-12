import { Box } from '@mui/material';
import React from 'react';

function LandingScreen({ component }) {
    return (
        <Box sx={{
            display: "flex",
            height: "100vh"
        }}>
            <Box sx={{
                width: "40%",
                background: "rgba(0, 12, 42, 1)"
            }}></Box>
            <Box sx={{
                width: "60%",
                background: "rgba(226, 234, 255, 1)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>{component}</Box>
        </Box>
    );
}

export default LandingScreen;