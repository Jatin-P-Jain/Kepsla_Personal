import React from "react";
import { AppBar, Box, Toolbar, Tooltip } from "@mui/material";
import DateDisplay from "./TodayDate";
import { Icons } from "../assets/icons";
import DynamicBreadcrumbs from "./Breadcrumbs";

interface AppBarProps {
  isMobile: boolean;
  drawerWidth: string;
  children?: React.ReactNode; // Ensure children is accepted
}

const CustomAppBar: React.FC<AppBarProps> = ({ drawerWidth, children }) => {
  return (
    <AppBar
      position="fixed"
      elevation={4}
      sx={{
        width: `calc(100vw - ${drawerWidth})`,
        transition: "width 0.3s ease-in-out",
        backgroundColor: "background.paper",
      }}
    >
      <Toolbar>
        <DynamicBreadcrumbs />
        <Box sx={{ flexGrow: 1 }} />
        <Tooltip title={"You can Search here... WIP!"} arrow>
          <Box
            sx={{
              marginInline: 1,
              cursor: "pointer",
              alignItems: "center",
              justifyItems: "center",
              display: "flex",
            }}
          >
            <Icons.AppBar.SearchIcon />
          </Box>
        </Tooltip>
        <Tooltip title={"You can change the language from here... WIP!"} arrow>
          <Box
            sx={{
              marginInline: 1,
              cursor: "pointer",
              alignItems: "center",
              justifyItems: "center",
              display: "flex",
            }}
          >
            <Icons.AppBar.TranslateIcon />
          </Box>
        </Tooltip>
        <Tooltip
          title={"You can see your notifications from here... WIP!"}
          arrow
        >
          <Box
            sx={{
              marginInline: 1,
              cursor: "pointer",
              alignItems: "center",
              justifyItems: "center",
              display: "flex",
            }}
          >
            <Icons.AppBar.NotificationIcon />
          </Box>
        </Tooltip>
        <DateDisplay />
        {children} {/* If you have children to render inside AppBar */}
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
