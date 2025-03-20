import React, { useEffect } from "react";
import { Box, CssBaseline, Toolbar } from "@mui/material";
import { layoutStyles } from "./layout.styles";
import useDrawer from "./useDrawer";
import CustomAppBar from "./CustomAppBar";
import CustomDrawer from "./CustomDrawer";
import { Outlet } from "react-router-dom";

const AppLayout: React.FC = () => {
  const {
    drawerWidth,
    isMobile,
    showToggleIcon,
    handleDrawerToggle,
    toggleIconVisibility,
    open,
  } = useDrawer();

  useEffect(() => {
    toggleIconVisibility(isMobile); // Update icon visibility based on screen size
  }, [isMobile, toggleIconVisibility]);

  return (
    <Box sx={layoutStyles.container}>
      <CssBaseline />
      {/* AppBar */}
      <CustomAppBar
        isMobile={isMobile}
        drawerWidth={drawerWidth}
        showToggleIcon={showToggleIcon}
        onToggleDrawer={handleDrawerToggle}
      />

      {/* Drawer */}
      <CustomDrawer isMobile={isMobile} drawerWidth={drawerWidth} open={open} />

      {/* Main Content */}
      <Toolbar />
      <Box
        component="main"
        sx={layoutStyles.mainContent(isMobile ? "0px" : drawerWidth)} // Adjust margin for mobile
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default AppLayout;
