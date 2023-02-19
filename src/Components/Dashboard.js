// import React, { useEffect, useLayoutEffect, useState } from "react";
// import { Box, styled, Typography } from "@mui/material";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import SettingsIcon from "@mui/icons-material/Settings";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import BarChartIcon from "@mui/icons-material/BarChart";
// import ArrowRightIcon from "@mui/icons-material/ArrowRight";
// import DropDownLink from "./DropDownLink";

// const links = [
//   {
//     name: "PRODUCTS",
//     link: "/dashboard/products",
//     drop: [
//       {
//         name: "PRODUCT LISTING",
//         link: "/dashboard/products",
//       },
//       {
//         name: "DISTRIBUTION",
//         link: "/dashboard/products",
//       },
//     ],
//     height: "97px",
//   },
//   {
//     name: "INVENTORY",
//     link: "/dashboard/inventory",
//     drop: [
//       {
//         name: "STOCK LEVEL",
//         link: "/dashboard/inventory",
//       },
//       {
//         name: "STOCK ALERT",
//         link: "/dashboard/inventory",
//       },
//     ],
//     height: "97px",
//   },
//   {
//     name: "EXPENSE",
//     link: "/dashboard/expense",
//     drop: [
//       {
//         name: "ESTIMATE SELL",
//         link: "/dashboard/expense",
//       },
//       {
//         name: "SOLD",
//         link: "/dashboard/expense",
//       },
//       {
//         name: "LEFT STOCK",
//         link: "/dashboard/expense",
//       },
//     ],
//     height: "144.5px",
//   },
// ];

// const Container = styled(Box)(({ theme }) => ({
//   [theme.breakpoints.down("md")]: {
//     height: "100%",
//   },
// }));

// function Links({ item }) {
//   let navigate = useNavigate();
//   let location = useLocation();
//   const background = "rgba(186, 215, 233, 0.5)";
//   const [txtColor, setTxtColor] = useState("white");
//   const [dropdown, setDropdown] = useState(false);
//   const [style, setStyle] = useState({
//     height: "0px",
//     display: "none",
//   });
//   const [style2, setStyle2] = useState({
//     transform: "rotate(0deg)",
//   });

//   useLayoutEffect(() => {
//     if (location.pathname === `/dashboard/${item.name.toLowerCase()}`) {
//       setTxtColor("#000C2A");
//       setDropdown(true);
//     } else {
//       setTxtColor("white");
//       setDropdown(false);
//     }
//   }, [location.pathname]);

//   useEffect(() => {
//     if (dropdown) {
//       setStyle({
//         height: item.height,
//         display: "block",
//       });
//       setStyle2({
//         transform: "rotate(90deg)",
//       });
//     } else {
//       setStyle({
//         height: "0px",
//         display: "none",
//       });
//       setStyle2({
//         transform: "rotate(0deg)",
//       });
//     }
//   }, [dropdown]);

//   return (
//     <Box>
//       <Box
//         onMouseEnter={() => {
//           setTxtColor("#000C2A");
//         }}
//         onMouseLeave={() => {
//           if (location.pathname !== `/dashboard/${item.name.toLowerCase()}`) {
//             setTxtColor("white");
//           }
//         }}
//         onClick={() => {
//           navigate(item.link);
//           setDropdown(!dropdown);
//         }}
//         sx={
//           location.pathname === `/dashboard/${item.name.toLowerCase()}`
//             ? {
//                 padding: "12px",
//                 display: "flex",
//                 justifyContent: "space-between",
//                 transition: "0.5s",
//                 background: background,
//                 "&:hover": {
//                   cursor: "pointer",
//                   background: background,
//                 },
//               }
//             : {
//                 padding: "12px",
//                 display: "flex",
//                 justifyContent: "space-between",
//                 transition: "0.5s",
//                 "&:hover": {
//                   cursor: "pointer",
//                   background: background,
//                 },
//               }
//         }
//       >
//         <Typography
//           sx={{
//             color: txtColor,
//             fontSize: "16px",
//           }}
//         >
//           {item.name}
//         </Typography>
//         <Box>
//           <ArrowForwardIosIcon
//             sx={{
//               color: txtColor,
//               ...style2,
//               transition: "0.3s",
//             }}
//           />
//         </Box>
//       </Box>
//       <Box
//         sx={{
//           height: style.height,
//           transition: "0.3s",
//         }}
//       >
//         {item.drop.map((data, index) => {
//           return (
//             <DropDownLink
//               name={item.name}
//               display={style.display}
//               data={data}
//               key={index}
//             />
//           );
//         })}
//       </Box>
//     </Box>
//   );
// }

// function Dashboard({ component }) {
//   let navigate = useNavigate();
//   const [setting, setSetting] = useState({
//     translate: "0px",
//     transform: "rotate(0deg)",
//   });
//   const [arrow, setArrow] = useState({
//     opacity: "0",
//     translate: "0px",
//   });
//   const [drawer, setDrawer] = useState("-150%");

//   return (
//     <Box
//       sx={{
//         background: "#000C2A",
//         minHeight: "100vh",
//         display: "flex",
//         justifyContent: "right",
//         // background: "url(https://cdn.pixabay.com/photo/2020/04/22/12/12/background-5077810_1280.png)",
//         backgroundSize: "100% 100%",
//       }}
//     >
//       <Container
//         sx={{
//           width: "300px",
//           background: "#000C2A",
//           backgroundSize: "100% 100%",
//           display: "flex",
//           flexDirection: "column",
//           position: {
//             md: "relative",
//             lg: "relative",
//             xl: "relative",
//             sm: "fixed",
//             xs: "fixed",
//           },
//           left: { xs: drawer, sm: drawer, md: "0%", lg: "0%", xl: "0%" },
//           top: "0%",
//           transition: "0.5s",
//         }}
//       >
//         <img
//           style={{
//             position: "absolute",
//             top: "0%",
//             left: "0%",
//             width: "100%",
//             height: "100%",
//             zIndex: "1",
//           }}
//           src="http://www.gstatic.com/mobilesdk/190424_mobilesdk/nav_nachos@2x.png"
//           alt="triangles"
//         />
//         <Box
//           sx={{
//             height: "25%",
//             minHeight: "130px",
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "flex-end",
//             zIndex: "20",
//           }}
//         >
//           <Box
//             onClick={() => {
//               navigate("/dashboard");
//             }}
//             sx={{
//               padding: "12px",
//               borderTop: "1px solid white",
//               display: "flex",
//               gap: "16px",
//               alignItems: "center",
//               "&:hover": {
//                 cursor: "pointer",
//               },
//             }}
//           >
//             <Box
//               sx={{
//                 width: "24px",
//                 height: "24px",
//                 borderRadius: "50%",
//                 overflow: "hidden",
//               }}
//             >
//               <img
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                 }}
//                 src={require("../Assets/logo.png")}
//                 alt="logo"
//               />
//             </Box>
//             <Typography
//               sx={{
//                 color: "white",
//                 fontSize: "18px",
//               }}
//             >
//               COMPANY
//             </Typography>
//           </Box>
//           <Box
//             sx={{
//               borderTop: "1px solid white",
//               width: "100%",
//               display: "flex",
//               alignItems: "center",
//               // padding: "12px"
//             }}
//           >
//             <Box
//               onClick={() => {
//                 navigate("/dashboard");
//               }}
//               sx={{
//                 padding: "12px 8px",
//                 alignItems: "center",
//                 gap: "16px",
//                 display: "flex",
//                 "&:hover": {
//                   cursor: "pointer",
//                 },
//               }}
//             >
//               <BarChartIcon
//                 sx={{
//                   color: "white",
//                   width: "30px",
//                   height: "30px",
//                 }}
//               />
//               <Typography
//                 sx={{
//                   color: "white",
//                   fontSize: "14px",
//                 }}
//               >
//                 COMPANY OVERVIEW
//               </Typography>
//             </Box>
//             <Box
//               onMouseEnter={() => {
//                 setSetting({
//                   translate: "-6px",
//                   transform: "rotate(-45deg)",
//                 });
//                 setArrow({
//                   opacity: "1",
//                   translate: "12px",
//                 });
//               }}
//               onMouseLeave={() => {
//                 setSetting({
//                   translate: "0px",
//                   transform: "rotate(0deg)",
//                 });
//                 setArrow({
//                   opacity: "0",
//                   translate: "0px",
//                 });
//               }}
//               sx={{
//                 margin: "12px",
//                 "&:hover": {
//                   cursor: "pointer",
//                 },
//                 position: "relative",
//                 height: "45%",
//                 flexGrow: "1",
//                 borderLeft: "1px solid white",
//                 paddingLeft: "25px",
//               }}
//             >
//               <Box
//                 sx={{
//                   transition: "0.1s",
//                   ...setting,
//                   position: "absolute",
//                 }}
//               >
//                 <SettingsIcon
//                   sx={{
//                     color: "white",
//                   }}
//                 />
//               </Box>
//               <Box
//                 sx={{
//                   transition: "0.1s",
//                   ...arrow,
//                   position: "absolute",
//                 }}
//               >
//                 <ArrowRightIcon
//                   sx={{
//                     color: "white",
//                   }}
//                 />
//               </Box>
//             </Box>
//           </Box>
//         </Box>
//         <Box
//           sx={{
//             height: "75%",
//             minHeight: "200px",
//             overflowY: "hidden",
//             borderTop: "1px solid white",
//             display: "flex",
//             flexDirection: "column",
//             padding: "15% 16px 16px 16px",
//             justifyContent: "center",
//             zIndex: "20",
//           }}
//         >
//           <Box
//             sx={{
//               width: "90%",
//               borderRadius: "16px",
//               overflow: "hidden",
//               height: "max-content",
//               background: "#163172",
//             }}
//           >
//             {links.map((item, index) => {
//               return <Links key={index} item={item} />;
//             })}
//           </Box>
//           <div className="">
//             <Link to="/"> DASHBOARD </Link>
//             <Link to="/"> INVENTORY </Link>
//             <Link to="/"> EXPENSES </Link>
//             <Link to="/"> CUSTOMERS </Link>
//           </div>
//         </Box>
//       </Container>
//       <Box
//         sx={{
//           flexGrow: "1",
//           background: "rgba(226, 234, 255, 1)",
//           // background: "rgba(0,0,0,0.2)",
//           margin: {
//             md: "16px 16px 16px 0px",
//             lg: "16px 16px 16px 0px",
//             xl: "16px 16px 16px 0px",
//             sm: "16px",
//             xs: "16px",
//           },
//           borderRadius: "16px",
//           display: "flex",
//           flexDirection: "column",
//         }}
//       >
//         <Box
//           sx={{
//             display: "flex",
//             gap: "32px",
//             padding: "16px 32px",
//             justifyContent: "right",
//             alignItems: "center",
//             color: "black",
//           }}
//         >
//           <NotificationsIcon />
//           <AccountCircleIcon fontSize="large" />
//         </Box>
//         <Box
//           sx={{
//             height: "100%",
//             padding: "16px",
//           }}
//         >
//           {component}
//         </Box>
//       </Box>
//     </Box>
//   );
// }

// export default Dashboard;

import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard({ component }) {
  return (
    <div className="flex flex-row bg-[#000C2A] w-full h-screen py-3 pr-3 over">
      <div className="w-[16%] py-8">
        <div className="flex space-x-2 p-2 text-white border-y border-blue-100">
          <img
            className="w-7 rounded-full"
            src={require("../Assets/logo.png")}
            alt=""
          />
          <p> Company </p>
        </div>
        <div className="flex justify-between space-x-2 p-2 text-white border-b border-blue-100">
          <div className="flex flex-row space-x-3">
            <img
              src={require("../Assets/chart.svg").default}
              className="w-7"
              alt=""
            />
            <p> Overview </p>
          </div>
          <img
            src={require("../Assets/setting.svg").default}
            className="w-5 "
            alt=""
          />
        </div>

        {/* Links */}
        <div className="flex flex-col bg-[#163172] text-blue-100 text-md mt-4 m-3 rounded-2xl">
          <Link
            to={"./dashboard"}
            className="flex justify-between px-3 py-2 transition-all hover:bg-black hover:bg-opacity-30 rounded-t-2xl"
          >
            <p>Dashboard</p>
            <img
              src={require("../Assets/rightArr.svg").default}
              className="w-5 "
              alt=""
            />
          </Link>
          <Link
            to={"./inventory"}
            className="flex justify-between px-3 py-2 transition-all hover:bg-black hover:bg-opacity-30 "
          >
            <p>Inventory</p>
            <img
              src={require("../Assets/rightArr.svg").default}
              className="w-5 "
              alt=""
            />
          </Link>
          <Link
            to={"./expense"}
            className="flex justify-between px-3 py-2 transition-all hover:bg-black hover:bg-opacity-30 rounded-b-2xl"
          >
            <p>Expenses</p>
            <img
              src={require("../Assets/rightArr.svg").default}
              className="w-5 "
              alt=""
            />
          </Link>
          {/* <div className="flex justify-between px-2 transition-all hover:bg-black hover:bg-opacity-30 rounded-b-2xl py-2">
            <p>Customers</p>
            <img
              src={require("../Assets/rightArr.svg").default}
              className="w-5 "
              alt=""
            />
          </div> */}
        </div>
      </div>

      <div className="bg-[#F6F7F9] w-[84%] rounded-3xl p-2 overflow-hidden">
        <div className=" flex flex-row items-center space-x-3 justify-end">
          <img
            src={require("../Assets/bell.svg").default}
            className="w-6 "
            alt=""
          />
          <img
            src={require("../Assets/user.svg").default}
            className="w-8 "
            alt=""
          />
        </div>
        <div className=" mt-10 h-4/6 box-border">{component}</div>
      </div>
    </div>
  );
}

//
// transaction
// trans details
