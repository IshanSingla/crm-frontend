import React from 'react';
import { Box } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Dashboard({component}){
    return(
        <Box sx={{
            height: "100vh"
        }}>
            <Box sx={{
                height: "100%",
                background: "#000C2A",
                display: "flex",
                justifyContent: "right"
            }}>
                <Box sx={{
                    width: "75%",
                    background: "#E2EAFF",
                    margin: "16px 16px 16px 0px",
                    borderRadius: "16px"
                }}>
                    <Box sx={{
                        display: "flex",
                        gap: "32px",
                        padding: "16px 32px",
                        justifyContent: "right",
                        alignItems: "center"
                    }}>
                        <NotificationsIcon/>
                        <AccountCircleIcon fontSize='large'/>
                    </Box>
                    <Box sx={{
                        padding: "16px"
                    }}>
                        {component}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Dashboard;