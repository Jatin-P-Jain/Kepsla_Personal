// DynamicBreadcrumbs.tsx
import React from "react";
import { useLocation, Link as RouterLink } from "react-router-dom"; // Import necessary components from React Router
import { Breadcrumbs, Typography, useTheme } from "@mui/material"; // Material-UI Breadcrumbs and Typography
import menuConfig from "./NavigationMenuConfig";
import { styled } from "@mui/system";

// Recursive function to find breadcrumb text by matching the path segment
const findBreadcrumbLabel = (path: string, menuItems: any[]): string | null => {
  for (const item of menuItems) {
    // Check if the path exactly matches
    if (item.path === path) {
      return item.text; // Return the text label if the path matches
    }
    // Check if item has children and search recursively
    if (item.children) {
      const childLabel = findBreadcrumbLabel(path, item.children);
      if (childLabel) {
        return `${childLabel}`; // Combine parent and child labels if needed
      }
    }
  }
  return null;
};

// DynamicBreadcrumbs component to generate breadcrumbs based on URL and menuConfig
const DynamicBreadcrumbs: React.FC = () => {
  const StyledLink = styled(RouterLink)(({ theme }) => ({
    color: `${theme.palette.text.secondary}`, // Default color for links
    textDecoration: "none", // Remove underline
  }));
  const theme = useTheme();
  const location = useLocation(); // Get current location (URL)
  const pathnames = location.pathname.split("/").filter(Boolean); // Split the pathname into segments

  // Start with the Home breadcrumb
  const breadcrumbs = [{ href: "/", label: "Home" }];

  let currentPath = "";
  // Iterate through each part of the path and find the breadcrumb label
  pathnames.forEach((segment) => {
    currentPath += `/${segment}`;
    const breadcrumbLabel = findBreadcrumbLabel(currentPath, menuConfig);
    if (breadcrumbLabel) {
      breadcrumbs.push({ href: currentPath, label: breadcrumbLabel });
    }
  });

  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{ flexGrow: 1 }}>
      {/* Home link */}
      {/* <Link color="inherit" to="/">
        <HomeIcon />
      </Link> */}

      {/* Map and display parent breadcrumbs as links */}
      {breadcrumbs.slice(1, breadcrumbs.length - 1).map((breadcrumb, index) => (
        <StyledLink key={index} color="inherit" to={breadcrumb.href}>
          {breadcrumb.label}
        </StyledLink>
      ))}

      {/* Current page label (last breadcrumb) */}
      {breadcrumbs.length > 1 && (
        <Typography color="textPrimary">
          {breadcrumbs[breadcrumbs.length - 1].label}
        </Typography>
      )}
    </Breadcrumbs>
  );
};

export default DynamicBreadcrumbs;
