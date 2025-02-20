import React from "react";
import {
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  Collapse,
  ListItemButton,
  Toolbar,
  Box,
  Typography,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import useDrawerMenu from "./useDrawerMenu";
import { MenuItem } from "../config/navigationTypes";
import { menuConfig } from "../config/navigationConfig";
import { Logos } from "../assets/logo";
import { useDrawerStyles } from "./drawer.styles";

interface DrawerProps {
  isMobile: boolean;
  drawerWidth: string;
  children?: React.ReactNode;
}

const CustomDrawer: React.FC<DrawerProps> = ({
  isMobile,
  drawerWidth,
  children,
}) => {
  const drawerStyles = useDrawerStyles();
  const { openMenu, activeItem, handleNavigation, handleMenuClick } =
    useDrawerMenu();

  const renderMenuItems = (items: MenuItem[], depth = 0) => {
    return items.map((item, index) => (
      <div key={index}>
        <ListItemButton
          onClick={() => {
            item.children && handleMenuClick(item.text);
            depth > 0 && handleNavigation(item.path);
          }}
          sx={drawerStyles.listItem(item.text === activeItem, depth)}
        >
          {item.icon && (
            <ListItemIcon sx={drawerStyles.listItemIcon}>
              {item.icon}
            </ListItemIcon>
          )}
          <ListItemText
            sx={drawerStyles.listItemText}
            primary={
              <Typography variant="body2" noWrap>
                {item.text}
              </Typography>
            }
          />
          {item.children ? (
            openMenu === item.text ? (
              <ExpandLess />
            ) : (
              <ExpandMore />
            )
          ) : null}
        </ListItemButton>
        {item.children && (
          <Collapse in={openMenu === item.text} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {renderMenuItems(item.children, depth + 1)}
            </List>
          </Collapse>
        )}
      </div>
    ));
  };

  return (
    <Drawer
      variant={isMobile ? "temporary" : "permanent"}
      sx={{
        "& .MuiDrawer-paper": drawerStyles.drawerPaper(drawerWidth),
      }}
    >
      <Toolbar>
        <Box sx={drawerStyles.logoBox}>
          <Logos.KepslaInlineWhite height={"80%"} width={"80%"} />
        </Box>
      </Toolbar>
      <List sx={drawerStyles.listContainer}>{renderMenuItems(menuConfig)}</List>
      {children}
    </Drawer>
  );
};

export default CustomDrawer;
