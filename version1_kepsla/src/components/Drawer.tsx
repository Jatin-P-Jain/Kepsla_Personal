import React, { useState } from "react";
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
  useTheme,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import menuConfig, { MenuItem, menuPathMap } from "./NavigationMenuConfig";
import { useLocation, useNavigate } from "react-router-dom";
import KepSLASVG from "../assets/KePSLA.svg";

interface DrawerProps {
  open: boolean;
  handleDrawerToggle: () => void;
  isMobile: boolean;
  drawerWidth: string;
  children?: React.ReactNode; // Add children here
}

const CustomDrawer: React.FC<DrawerProps> = ({
  open,
  handleDrawerToggle,
  isMobile,
  drawerWidth,
  children,
}) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [activeItem, setActiveItem] = useState<string | undefined>(undefined);

  const currentUrl: string = location.pathname;

  const handleNavigation = (route: string | undefined) => {
    if (route) {
      const urlTitle = menuPathMap.get(route);
      setActiveItem(urlTitle);
      navigate(route);
    } else {
      console.log("Route not set.");
    }
  };
  const handleMenuClick = (menuText: string) => {
    setOpenMenu(openMenu === menuText ? null : menuText); // Toggle the selected submenu
    const parentUrl = currentUrl.split("/").filter(Boolean)[0];
    const parentUrlTitle = menuPathMap.get("/" + parentUrl);
    const childUrlTitle = menuPathMap.get(currentUrl);
    openMenu ? setActiveItem(parentUrlTitle) : setActiveItem(childUrlTitle);
  };

  const renderMenuItems = (items: MenuItem[], depth = 0) => {
    return items.map((item, index) => (
      <div key={index}>
        <ListItemButton
          onClick={() => {
            item.children && handleMenuClick(item?.text);
            // handleDrawerToggle(true);
            depth > 0 && handleNavigation(item?.path);
          }}
          sx={[
            depth > 0
              ? {
                  pl: depth * 3, // Indent based on depth
                  transition: "padding-left 0.4s ease", // Smooth transition
                  "&:hover": {
                    paddingLeft: "13%", // Hover effect to move the item to the right
                  },
                  marginTop: "1%",
                }
              : { marginTop: "5%", paddingLeft: "8%" },
            {
              color: "secondary.contrastText",
              marginInline: "5%",
              borderRadius: "8px",
              background:
                item.text == activeItem
                  ? `${theme.customColors.drawerItemBackground}`
                  : "",
              "&:hover": {
                background:
                  item.text == activeItem
                    ? `${theme.customColors.drawerItemBackground}`
                    : "",
              },
            },
          ]}
        >
          {item?.icon && (
            <ListItemIcon sx={{ color: "inherit" }}>{item.icon}</ListItemIcon>
          )}
          <ListItemText
            sx={{ marginLeft: "-5%" }}
            primary={<Typography noWrap>{item.text}</Typography>}
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
              {/* Recursive call for nested items */}
            </List>
          </Collapse>
        )}
      </div>
    ));
  };

  return (
    <Drawer
      variant={isMobile ? "temporary" : "permanent"}
      open={open}
      onClose={isMobile ? handleDrawerToggle : undefined}
      sx={{
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          transition: "width 0.3s ease-in-out",
          flexShrink: 0,
          boxSizing: "border-box",
          overflow: "hidden",
          backgroundColor: "secondary.main",
        },
      }}
    >
      <Toolbar>
        {/* <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton> */}
        <Box
          component="img"
          src={KepSLASVG} // Replace with your image path
          alt="KePSLA"
          sx={
            {
              // width: 300, // Set the width of the image
              // height: "auto", // Maintain aspect ratio
              // boxShadow: 3, // Optional: Add shadow for depth
            }
          }
        />
      </Toolbar>
      <List>{renderMenuItems(menuConfig)}</List>
      {children} {/* If the Drawer has children to render inside */}
    </Drawer>
  );
};

export default CustomDrawer;
