import { useState, useEffect } from "react";
import { useTheme, useMediaQuery } from "@mui/material";

const useDrawer = () => {
  const [open, setOpen] = useState(false); // Default to closed on mobile
  const [drawerWidth, _setDrawerWidth] = useState("240px");
  const [showToggleIcon, setShowToggleIcon] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleDrawerToggle = () => {
    setOpen((prev) => !prev); // Toggle the drawer state
  };

  const closeDrawer = () => {
    setOpen(false); // Close the drawer
  };

  const toggleIconVisibility = (visible: boolean) => {
    setShowToggleIcon(visible);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const drawerElement = document.querySelector(".MuiDrawer-paper");
      if (drawerElement && !drawerElement.contains(event.target as Node)) {
        closeDrawer();
      }
    };

    if (isMobile && open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobile, open]);

  return {
    open,
    drawerWidth: isMobile ? (open ? "240px" : "0px") : drawerWidth, // Adjust width for mobile
    isMobile,
    showToggleIcon,
    handleDrawerToggle,
    toggleIconVisibility,
    closeDrawer, // Expose closeDrawer method
  };
};

export default useDrawer;
