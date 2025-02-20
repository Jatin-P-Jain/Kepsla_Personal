import { createTheme, ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    customColors: {
      darkFill: Record<string, string>;
      whiteFill: Record<string, string>;
      secondaryFill: Record<string, string>;
      secondaryFillLight: Record<string, string>;
      secondaryFillNegative: Record<string, string>;
      gradientFill: Record<string, string[]>;
      shadowLevels: string[];
    };
  }
  interface PaletteOptions {
    customColors?: {
      darkFill?: Record<string, string>;
      whiteFill?: Record<string, string>;
      secondaryFill?: Record<string, string>;
      secondaryFillLight?: Record<string, string>;
      secondaryFillNegative?: Record<string, string>;
      gradientFill?: Record<string, string[]>;
      shadowLevels?: string[];
    };
  }
}

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: "#263959",
      light: "#637381",
      dark: "#161D25",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#F76816",
      light: "#F4724C",
      dark: "#DC2727",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#F5F5F5",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#202020",
      secondary: "#637381",
    },
    customColors: {
      darkFill: {
        title: "#161D25",
        ink: "#212B36",
        light: "#454F5B",
        lighter: "#637381",
        lightest: "#919EAB",
      },
      whiteFill: {
        darkLight: "#C4CDD5",
        sky: "#DEE3E8",
        enoughLight: "#F4F6F8",
        lighter: "#F9FAFB",
      },
      secondaryFill: {
        pink: "#E460A1",
        red: "#DC2727",
        orange: "#F4724C",
        yellow: "#F8B607",
        blue: "#3C56B1",
        green: "#4CAD80",
      },
      secondaryFillLight: {
        pink: "#E460A1",
        red: "#DC2727",
        orange: "#F4724C",
        yellow: "#F8B607",
        blue: "#3C56B1",
        green: "#4CAD80",
      },
      secondaryFillNegative: {
        pink: "#C3B3CD",
        red: "#D5AAAM",
        orange: "#E0CDAF",
        yellow: "#F1E1BA",
        blue: "#A2D4F3",
        green: "#B0CABE",
      },
      gradientFill: {
        blue: ["#3562DE", "#1737A9"],
        greenPurple: ["#50BC88", "#6730ED"],
        orangeRed: ["#F4724C", "#DC4827"],
      },
      shadowLevels: [
        "0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.24)", // Level 1
        "0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23)", // Level 2
        "0px 10px 20px rgba(0, 0, 0, 0.19), 0px 6px 6px rgba(0, 0, 0, 0.23)", // Level 3
        "0px 15px 25px rgba(0, 0, 0, 0.22), 0px 10px 10px rgba(0, 0, 0, 0.24)", // Level 4
        "0px 20px 40px rgba(0, 0, 0, 0.25), 0px 15px 12px rgba(0, 0, 0, 0.22)", // Level 5
      ],
    },
  },
  typography: {
    fontFamily: "'Poppins', 'Open Sans', sans-serif",
    h1: {
      fontFamily: "'Open Sans', sans-serif",
      fontSize: "60px",
      fontWeight: 700,
      letterSpacing: "-1.5%",
    },
    h2: {
      fontFamily: "'Open Sans', sans-serif",
      fontSize: "48px",
      fontWeight: 600,
      letterSpacing: "-1.5%",
    },
    h3: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: "32px",
      fontWeight: 600,
      letterSpacing: "0%",
    },
    body1: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: "24px",
      fontWeight: 400,
      letterSpacing: "0.25%",
    },
    body2: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: "16px",
      fontWeight: 400,
      letterSpacing: "0.25%",
    },
    subtitle1: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: "12px",
      fontWeight: 400,
      letterSpacing: "0.25%",
    },
    caption: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: "10px",
      fontWeight: 600,
      letterSpacing: "0.25%",
    },
    button: {
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
        },
      },
    },
  },
};

const theme = createTheme(themeOptions);

export default theme;
