import { useTheme, Theme } from "@mui/material/styles";

export const useDrawerStyles = () => {
  const theme: Theme = useTheme(); // Get the theme globally

  return {
    drawerPaper: (drawerWidth: string) => ({
      width: drawerWidth,
      transition: "width 0.3s ease-in-out",
      flexShrink: 0,
      boxSizing: "border-box",
      overflow: "hidden",
      backgroundColor: theme.palette.customColors.darkFill.ink,
    }),
    logoBox: {
      height: "100%",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      justifyItems: "center",
      marginTop: 1,
    },
    listContainer: { paddingTop: 0, marginTop: 0 },
    listItem: (active: boolean, depth: number) => ({
      paddingLeft: depth > 0 ? depth * 3 : "8%",
      transition: "padding-left 0.4s ease",
      marginTop: depth > 0 ? "1%" : "5%",
      color: theme.palette.primary.contrastText,
      marginInline: "5%",
      borderRadius: "8px",
      background: active ? theme.palette.secondary.main : "transparent",
      "&:hover": {
        paddingLeft: depth > 0 ? "13%" : "10%",
        background: active
          ? theme.palette.secondary.light
          : theme.palette.action.hover,
      },
    }),
    listItemIcon: {
      color: "inherit",
    },
    listItemText: {
      marginLeft: "-5%",
    },
  };
};
