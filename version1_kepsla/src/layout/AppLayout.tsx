import React from "react";
import { Box, CssBaseline, Toolbar } from "@mui/material";
import { layoutStyles } from "./layout.styles";
import useDrawer from "./useDrawer";
import CustomAppBar from "./CustomAppBar";
import CustomDrawer from "./CustomDrawer";
import { Outlet } from "react-router-dom";

interface AppLayoutProps {
    children?: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
    const { drawerWidth, isMobile } = useDrawer();

    return (
        <Box sx={layoutStyles.container}>
            <CssBaseline />
            {/* AppBar */}
            <CustomAppBar isMobile={isMobile} drawerWidth={drawerWidth} />

            {/* Drawer */}
            <CustomDrawer
                isMobile={isMobile}
                drawerWidth={drawerWidth}
            />

            {/* Main Content */}
            <Toolbar />
            <Box component="main" sx={layoutStyles.mainContent(drawerWidth)}>
                <Outlet />
            </Box>
        </Box>
    );
};

export default AppLayout;
