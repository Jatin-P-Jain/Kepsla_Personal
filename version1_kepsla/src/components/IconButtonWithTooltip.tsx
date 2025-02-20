import React from "react";
import { Tooltip, Box } from "@mui/material";
import { appBarStyles } from "../layout/appBar.styles";



interface IconButtonWithTooltipProps {
    title: string;
    icon: React.ReactNode;
}

const IconButtonWithTooltip: React.FC<IconButtonWithTooltipProps> = ({ title, icon }) => {
    return (
        <Tooltip title={title} arrow>
            <Box sx={appBarStyles.iconButton}>{icon}</Box>
        </Tooltip>
    );
};

export default IconButtonWithTooltip;
