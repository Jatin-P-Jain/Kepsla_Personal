// DateDisplay.tsx
import React from "react";
import { Typography } from "@mui/material"; // Material UI Typography component
import { format } from "date-fns"; // Import date-fns for date formatting

// DateDisplay component to display the date in "Day, Month Date Year" format
const DateDisplay: React.FC = () => {
  const currentDate = new Date(); // Get the current date

  // Format the current date to "Day, Month Date Year" format
  const formattedDate = format(currentDate, "EEEE, MMMM dd, yyyy");

  return (
    <Typography component="div" color="text.secondary">
      {formattedDate}
    </Typography>
  );
};

export default DateDisplay;
