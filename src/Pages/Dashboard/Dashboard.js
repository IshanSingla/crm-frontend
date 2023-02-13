import React, { useLayoutEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useLocation, useNavigate } from 'react-router-dom';
import BarChartIcon from '@mui/icons-material/BarChart';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

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
    const [setting, setSetting] = useState({
        translate: "0px",
        transform: "rotate(0deg)",
    });
    const [arrow, setArrow] = useState({
        opacity: "0",
        translate: "0px"
    });
    const [drawer, setDrawer] = useState("0%");

    return (
        <Box sx={{
            background: "#000C2A",
            minHeight: "100vh",
            display: "flex",
            justifyContent: "right",
            // background: "url(https://cdn.pixabay.com/photo/2020/04/22/12/12/background-5077810_1280.png)",
            backgroundSize: "100% 100%"
        }}>
            <Box sx={{
                width: "300px",
                background: "#000C2A",
                backgroundSize: "100% 100%",
                display: "flex",
                flexDirection: "column",
                position: {md: "relative", lg: "relative", xl: "relative", sm: "fixed", xs: "fixed"},
                left: "0%",
                top: "0%",
                height: {sm: "100%", xs: "100%", md: "min-content", lg: "min-content", xl: "min-content"}
            }}>
                <img style={{
                    position: "absolute",
                    top: "0%",
                    left: "0%",
                    width: "100%",
                    height: "100%",
                    zIndex: "1"
                }} src="http://www.gstatic.com/mobilesdk/190424_mobilesdk/nav_nachos@2x.png" alt="triangles" />
                <Box sx={{
                    height: "25%",
                    minHeight: "130px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    zIndex: "20"
                }}>
                    <Box onClick={() => {
                        navigate("/dashboard");
                    }} sx={{
                        padding: "12px",
                        borderTop: "1px solid white",
                        display: "flex",
                        gap: "16px",
                        alignItems: "center",
                        "&:hover": {
                            cursor: "pointer"
                        },
                    }}>
                        <Box sx={{
                            width: "24px",
                            height: "24px",
                            borderRadius: "50%",
                            overflow: "hidden"
                        }}>
                            <img style={{
                                width: "100%",
                                height: "100%"
                            }} src={require("../../Assets/logo.png")} alt='logo' />
                        </Box>
                        <Typography sx={{
                            color: "white",
                            fontSize: "18px",
                        }}>COMPANY</Typography>
                    </Box>
                    <Box sx={{
                        borderTop: "1px solid white",
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        // padding: "12px"
                    }}>
                        <Box onClick={() => {
                            navigate("/dashboard");
                        }} sx={{
                            padding: "12px 8px",
                            alignItems: "center",
                            gap: "16px",
                            display: "flex",
                            "&:hover": {
                                cursor: "pointer"
                            }
                        }}>
                            <BarChartIcon sx={{
                                color: "white",
                                width: "30px",
                                height: "30px",
                            }} />
                            <Typography sx={{
                                color: "white",
                                fontSize: "14px",
                            }}>COMPANY OVERVIEW</Typography>
                        </Box>
                        <Box onMouseEnter={() => {
                            setSetting({
                                translate: "-6px",
                                transform: "rotate(-45deg)",
                            });
                            setArrow({
                                opacity: "1",
                                translate: "12px"
                            });
                        }} onMouseLeave={() => {
                            setSetting({
                                translate: "0px",
                                transform: "rotate(0deg)",
                            });
                            setArrow({
                                opacity: "0",
                                translate: "0px",
                            });
                        }} sx={{
                            margin: "12px",
                            "&:hover": {
                                cursor: "pointer"
                            },
                            position: "relative",
                            height: "45%",
                            flexGrow: "1",
                            borderLeft: "1px solid white",
                            paddingLeft: "25px"
                        }}>
                            <Box sx={{
                                transition: "0.1s",
                                ...setting,
                                position: "absolute"
                            }}>
                                <SettingsIcon sx={{
                                    color: "white"
                                }} />
                            </Box>
                            <Box sx={{
                                transition: "0.1s",
                                ...arrow,
                                position: "absolute",
                            }}>
                                <ArrowRightIcon sx={{
                                    color: "white"
                                }} />
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{
                    height: "75%",
                    minHeight: "200px",
                    borderTop: "1px solid white",
                    display: "flex",
                    padding: "15% 16px 0px 16px",
                    justifyContent: "center",
                    zIndex: "20"
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
            </Box>
            <Box sx={{
                flexGrow: "1",
                background: "rgba(226, 234, 255, 1)",
                // background: "rgba(0,0,0,0.2)",
                margin: {md: "16px 16px 16px 0px", lg: "16px 16px 16px 0px", xl: "16px 16px 16px 0px", sm: "16px", xs: "16px"},
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
                    height: "100%",
                    padding: "16px",
                }}>
                    {component}
                </Box>
            </Box>
        </Box>
    )
}

export default Dashboard;