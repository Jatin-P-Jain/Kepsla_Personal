import React from "react";
import { AppBar, Box, Toolbar } from "@mui/material";
import { appBarStyles } from "./appBar.styles";
import DynamicBreadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import IconButtonWithTooltip from "../components/IconButtonWithTooltip";
import { Icons } from "../assets/icons";
import DateDisplay from "../components/DateDisplay/DateDisplay";

interface AppBarProps {
    isMobile: boolean;
    drawerWidth: string;
    children?: React.ReactNode;
}

const CustomAppBar: React.FC<AppBarProps> = ({ drawerWidth, children }) => {
    return (
        <AppBar position="fixed" elevation={4} sx={appBarStyles.appBar(drawerWidth)}>
            <Toolbar>
                <DynamicBreadcrumbs />
                <Box sx={{ flexGrow: 1 }} />

                <IconButtonWithTooltip
                    title="You can Search here... WIP!"
                    icon={<Icons.AppBar.SearchIcon />}
                />
                <IconButtonWithTooltip
                    title="You can change the language from here... WIP!"
                    icon={<Icons.AppBar.TranslateIcon />}
                />
                <IconButtonWithTooltip
                    title="You can see your notifications from here... WIP!"
                    icon={<Icons.AppBar.NotificationIcon />}
                />

                <DateDisplay />
                {children}
            </Toolbar>
        </AppBar>
    );
};

export default CustomAppBar;
