import React, { useState } from "react";
import {
  Box,
  CssBaseline,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CustomAppBar from "./AppBar";
import CustomDrawer from "./Drawer";
interface AppBarDrawerProps {
  children?: React.ReactNode; // Accept children as navigation routes
}

const AppBarDrawer: React.FC<AppBarDrawerProps> = ({ children }) => {
  const [open, setOpen] = useState(true);
  const theme = useTheme();
  const [drawerWidth, setDrawerWidth] = useState("20%");
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleDrawerToggle = () => {
    // setOpen((prev) => !prev);
    // setDrawerWidth((prev) => {
    //   if (prev == "60px") {
    //     return "240px";
    //   } else {
    //     return "60px";
    //   }
    // });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        height: "100vh",
        // background: "yellow",
      }}
    >
      <CssBaseline />
      {/* AppBar */}
      <CustomAppBar isMobile={isMobile} drawerWidth={drawerWidth} />
      {/* Drawer */}
      <CustomDrawer
        open={open}
        handleDrawerToggle={handleDrawerToggle}
        isMobile={isMobile}
        drawerWidth={drawerWidth}
      />

      {/* Main Content */}
      {/* <Box sx={{ flexGrow: 1 }} /> */}
      <Toolbar />
      <Box
        component="main"
        sx={{
          // backgroundColor: "grey",
          padding: 3,
          marginLeft: drawerWidth,
          transition: "margin-left 0.3s ease-in-out",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          flexGrow: 1,
          justifyContent: "space-between",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default AppBarDrawer;
