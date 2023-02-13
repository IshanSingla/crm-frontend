import { Box, Typography } from '@mui/material';
import React from 'react';

function Loader(){
    return(
        <Box sx={{
            position: "fixed",
            top: "0%",
            left: "0%",
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "25",
            background: "#FFF8EF"
        }}>
            <Box sx={{
                width: "max-content",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
                <Typography sx={{
                    width: "max-content"
                }}>MIXXO</Typography>
            </Box>
        </Box>
    )
}

export default Loader;