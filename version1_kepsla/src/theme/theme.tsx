// theme.ts
import { createTheme } from "@mui/material/styles";
import "@fontsource/poppins";

// Extend Material-UI theme to add custom design tokens
declare module "@mui/material/styles" {
  interface Theme {
    customColors: {
      cardBackground: string;
      buttonHover: string;
      drawerBackground?: string;
      drawerItemBackground?: string;
    };
  }
  interface ThemeOptions {
    customColors?: {
      cardBackground?: string;
      buttonHover?: string;
      drawerBackground?: string;
      drawerItemBackground?: string;
    };
  }
}

// Centralized theme definition
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
      light: "#63a4ff",
      dark: "#004ba0",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#202020",
      light: "#ff5c8d",
      dark: "#9a0036",
      contrastText: "#ffffff",
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
    text: {
      primary: "#000000",
      secondary: "#757575",
      disabled: "#bdbdbd",
    },
    error: {
      main: "#f44336",
    },
    warning: {
      main: "#ff9800",
    },
    info: {
      main: "#2196f3",
    },
    success: {
      main: "#4caf50",
    },
  },
  spacing: 8, // Base spacing unit
  shape: {
    borderRadius: 8, // Default border radius
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    h1: {
      fontSize: "40px",
      fontWeight: 600,
      "@media (max-width:600px)": {
        fontSize: "32px",
      },
    },
    h2: {
      fontSize: "32px",
      fontWeight: 500,
      "@media (max-width:600px)": {
        fontSize: "28px",
      },
    },
    body1: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "20px",
      "@media (max-width:600px)": {
        fontSize: "14px",
      },
    },
  },
  customColors: {
    cardBackground: "#f0f0f0",
    buttonHover: "#f5a623",
    drawerBackground: "#202020",
    drawerItemBackground: "#FF6816",
  },
});

export default theme;
