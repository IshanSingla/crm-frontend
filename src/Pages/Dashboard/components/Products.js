import { Box } from '@mui/material';
import React from 'react';

function Products(){
    return(
        <Box sx={{
            height: "100%",
            display: "flex"
        }}>
            <Box sx={{
                width: "50%",
                margin: "16px"
            }}></Box>
            <Box sx={{
                width: "50%",
                background: "rgba(226, 234, 255, 1)",
                margin: "16px",
                borderRadius: "16px",
                boxShadow: "0px 4px 15px 0px rgba(0, 0, 0, 0.25)"
            }}>

            </Box>
        </Box>
    )
}

export default Products;