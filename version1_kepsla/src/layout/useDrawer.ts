import { useState } from "react";
import { useTheme, useMediaQuery } from "@mui/material";

const useDrawer = () => {
  const [open, setOpen] = useState(true);
  const [drawerWidth, setDrawerWidth] = useState("20%");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleDrawerToggle = () => {
    setOpen((prev) => !prev);
    setDrawerWidth((prev) => (prev === "60px" ? "240px" : "60px"));
  };

  return { open, drawerWidth, isMobile, handleDrawerToggle };
};

export default useDrawer;
