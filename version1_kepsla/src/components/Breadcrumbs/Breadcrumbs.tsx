import React from "react";
import { useLocation } from "react-router-dom";
import { Breadcrumbs, Typography } from "@mui/material";
import { findBreadcrumbLabel } from "./breadcrumbUtils";
import { StyledBreadcrumbLink, breadcrumbStyles } from "./breadcrumb.styles";
import { menuConfig } from "../../config/navigationConfig";

const DynamicBreadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  const breadcrumbs = [{ href: "/", label: "Home" }];
  let currentPath = "";

  pathnames.forEach((segment) => {
    currentPath += `/${segment}`;
    const breadcrumbLabel = findBreadcrumbLabel(currentPath, menuConfig);
    if (breadcrumbLabel) {
      breadcrumbs.push({ href: currentPath, label: breadcrumbLabel });
    }
  });

  return (
    <Breadcrumbs aria-label="breadcrumb" sx={[breadcrumbStyles.container,breadcrumbStyles["& .MuiBreadcrumbs-separator"]]}>
      {/* Render previous breadcrumbs as links */}
      {breadcrumbs.slice(1, -1).map((breadcrumb, index) => (
        <StyledBreadcrumbLink key={index} to={breadcrumb.href}>
          {breadcrumb.label}
        </StyledBreadcrumbLink>
      ))}

      {/* Render last breadcrumb as plain text (current page) */}
      {breadcrumbs.length > 1 && (
        <Typography variant="body2" color="textPrimary">
          {breadcrumbs[breadcrumbs.length - 1].label}
        </Typography>
      )}
    </Breadcrumbs>
  );
};

export default DynamicBreadcrumbs;
