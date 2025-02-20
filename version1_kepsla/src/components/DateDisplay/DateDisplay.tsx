import React from "react";
import { Typography } from "@mui/material";

import { formatDate } from "../../utils/dateUtils";
import { useDateDisplayStyles } from "./dateDisplay.styles";

const DateDisplay: React.FC = () => {
  const dateDisplayStyles = useDateDisplayStyles();
  const formattedDate = formatDate(new Date());

  return (
    <Typography variant="subtitle1" sx={dateDisplayStyles.text}>
      {formattedDate}
    </Typography>
  );
};

export default DateDisplay;
