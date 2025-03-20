import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from "./theme/theme";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "./index.css"; // Ensure this CSS file includes the override
import NavigationRoutes from "./routes/NavigationRoutes";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavigationRoutes />
      </Router>
    </ThemeProvider>
  );
};

export default App;
