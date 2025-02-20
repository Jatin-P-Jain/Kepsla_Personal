import { styled } from "@mui/material/styles"; // Correct import
import { Link as RouterLink } from "react-router-dom";

// Styled breadcrumb link component with body2 typography
export const StyledBreadcrumbLink = styled(RouterLink)(({ theme }) => ({
  ...(theme.typography?.body2 || {}), // Ensure theme.typography is defined
  color: theme.palette.text.secondary,
  textDecoration: "none",
  display: "flex",
}));

// Breadcrumb container styles
export const breadcrumbStyles = {
  container: {
    flexGrow: 1,
  },
  "& .MuiBreadcrumbs-separator": {
    mx: 0, 
    color: "primary.main", 
    fontSize: "16px",
    fontWeight: 600,
  },
};
