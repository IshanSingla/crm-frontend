import React, { useLayoutEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useLocation, useNavigate } from 'react-router-dom';
import BarChartIcon from '@mui/icons-material/BarChart';

const links = [
    {
        name: "PRODUCTS",
        link: "/dashboard/products"
    },
    {
        name: "INVENTORY",
        link: "/dashboard/inventory"
    },
    {
        name: "EXPENSE",
        link: "/dashboard/expense"
    },
]

function Link({ item }) {

    let navigate = useNavigate();
    let location = useLocation();
    const background = "rgba(186, 215, 233, 0.5)";
    const [txtColor, setTxtColor] = useState("white");

    useLayoutEffect(() => {
        if (location.pathname === `/dashboard/${item.name.toLowerCase()}`) {
            setTxtColor("#000C2A");
        } else {
            setTxtColor("white");
        }
    }, [location.pathname]);

    return (
        <Box onMouseEnter={() => {
            setTxtColor("#000C2A");
        }} onMouseLeave={() => {
            if (location.pathname !== `/dashboard/${item.name.toLowerCase()}`) {
                setTxtColor("white");
            }
        }} onClick={() => {
            navigate(item.link);
        }} sx={(location.pathname === `/dashboard/${item.name.toLowerCase()}`) ? {
            padding: "12px",
            display: "flex",
            justifyContent: "space-between",
            transition: "0.5s",
            background: background,
            "&:hover": {
                cursor: "pointer",
                background: background
            },
        } : {
            padding: "12px",
            display: "flex",
            justifyContent: "space-between",
            transition: "0.5s",
            "&:hover": {
                cursor: "pointer",
                background: background
            },
        }}>
            <Typography sx={{
                color: txtColor,
                fontSize: "16px"
            }}>{item.name}</Typography>
            <Box><ArrowForwardIosIcon sx={{
                color: txtColor
            }} /></Box>
        </Box>
    )
}

function Dashboard({ component }) {

    let navigate = useNavigate();

    return (
        <Box sx={{
            height: "100vh",
            background: "#000C2A"
        }}>
            <Box sx={{
                height: "100%",
                background: "#000C2A",
                display: "flex",
                justifyContent: "right",
                background: "url(https://cdn.pixabay.com/photo/2020/04/22/12/12/background-5077810_1280.png)",
                backgroundSize: "100% 100%"
            }}>
                <Box sx={{
                    width: "20%",
                    display: "flex",
                    flexDirection: "column",
                }}>
                    <Box sx={{
                        height: "25%",
                        display: "flex",
                        alignItems: "flex-end"
                    }}>
                        <Box onClick={() => {
                            navigate("/dashboard");
                        }} sx={{
                            padding: "12px",
                            borderTop: "1px solid white",
                            width: "100%",
                            display: "flex",
                            gap: "16px",
                            alignItems: "center",
                            "&:hover": {
                                cursor: "pointer"
                            },
                        }}>
                            <BarChartIcon sx={{
                                color: "white"
                            }} />
                            <Typography sx={{
                                color: "white",
                                fontSize: "18px",
                            }}>COMPANY OVERVIEW</Typography>
                        </Box>
                    </Box>
                    <Box sx={{
                        height: "65%",
                        borderTop: "1px solid white",
                        display: "flex",
                        padding: "15% 16px 0px 16px",
                        justifyContent: "center"
                    }}>
                        <Box sx={{
                            width: "90%",
                            borderRadius: "16px",
                            overflow: "hidden",
                            height: "max-content",
                            background: "#163172"
                        }}>
                            {
                                links.map((item) => {
                                    return (
                                        <Link key={item.name} item={item} />
                                    )
                                })
                            }
                        </Box>
                    </Box>
                    {/* <Box sx={{
                        height: "10%",
                        padding: "16px",
                        borderTop: "1px solid white",
                        display: "flex",
                        justifyContent: "center"
                    }}>
                        <Box sx={{
                            width: "70%"
                        }}>
                            <SettingsIcon fontSize='large' sx={{
                                color: "white",
                                "&:hover": {
                                    cursor: "pointer"
                                }
                            }} />
                        </Box>
                    </Box> */}
                </Box>
                <Box sx={{
                    width: "80%",
                    // background: "rgba(226, 234, 255, 0.5)",
                    background: "rgba(0,0,0,0.2)",
                    margin: "16px 16px 16px 0px",
                    borderRadius: "16px",
                    display: "flex",
                    flexDirection: "column"
                }}>
                    <Box sx={{
                        display: "flex",
                        gap: "32px",
                        padding: "16px 32px",
                        justifyContent: "right",
                        alignItems: "center",
                        color: "black"
                    }}>
                        <NotificationsIcon />
                        <AccountCircleIcon fontSize='large' />
                    </Box>
                    <Box sx={{
                        padding: "16px",
                        flexGrow: "1"
                    }}>
                        {component}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Dashboard;