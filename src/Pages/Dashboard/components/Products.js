import { Box, styled } from '@mui/material';
import React from 'react';

const Container = styled(Box)(() => ({
    flexGrow: "1",
    background: "white",
    borderRadius: "16px",
    minHeight: "150px",
    boxShadow: "0px 4px 15px 0px rgba(0, 0, 0, 0.25)"
}))

function Products(){
    return(
        <Box sx={{
            height: "100%",
            display: "flex",
            justifyContent: "space-around"
        }}>
            <Box sx={{
                width: "35%",
                margin: "0px 16px",
                display: "flex",
                flexDirection: "column",
                gap: "24px"
            }}>
                <Container></Container>
                <Container></Container>
                <Container></Container>
            </Box>
            <Box sx={{
                width: "40%",
                background: "white",
                margin: "0px 16px",
                borderRadius: "16px",
                boxShadow: "0px 4px 15px 0px rgba(0, 0, 0, 0.25)"
            }}>
            </Box>
        </Box>
    )
}

export default Products;