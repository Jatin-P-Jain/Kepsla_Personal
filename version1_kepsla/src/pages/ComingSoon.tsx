import React from "react";
import { Box, Typography } from "@mui/material";

interface PageProps {
  pageName: string;
}

const ComingSoon: React.FC<PageProps> = ({ pageName }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        justifyContent: "center", // Centers grey box vertically
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h3">{pageName}</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 3, // Adds some padding for better spacing
          flexGrow: 1,
        }}
      >
        <Typography variant="h5">Hang in There!</Typography>
        <Typography variant="h6">
          We’re working hard to bring this page to you. Stay tuned – coming
          soon!
        </Typography>
      </Box>
    </Box>
  );
};

export default ComingSoon;
