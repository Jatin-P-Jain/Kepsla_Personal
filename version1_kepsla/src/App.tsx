import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Box, ThemeProvider, createTheme } from "@mui/material";
import theme from "./theme/theme";
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import './index.css'; // Ensure this CSS file includes the override
import NavigationRoutes from "./routes/NavigationRoutes";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const handleThemeToggle = () => {
    setDarkMode((prev) => !prev);
  };
  // const theme = createTheme({
  //   palette: {
  //     mode: darkMode ? "dark" : "light",
  //   },
  //   cssVariables: {
  //     colorSchemeSelector: "data-toolpad-color-scheme",
  //   },
  //   breakpoints: {
  //     values: {
  //       xs: 0,
  //       sm: 600,
  //       md: 600,
  //       lg: 1200,
  //       xl: 1536,
  //     },
  //   },
  // });
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavigationRoutes />
      </Router>
    </ThemeProvider>
  );
};

export default App;
