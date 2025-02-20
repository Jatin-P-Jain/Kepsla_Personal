import { useTheme } from "@mui/material/styles";

export const useGridCardStyles = () => {
  const theme = useTheme();

  return {
    card: (isDragging: boolean) => ({
      height: "100%",
      cursor: isDragging ? "grabbing" : "grab",
      transition: "box-shadow 0.3s ease-in-out",
      boxShadow: theme.shadows[1],
      "&:hover": {
        boxShadow: theme.shadows[4],
      },
    }),
    cardHeader: {
      backgroundColor: theme.palette.background.paper,
      paddingBottom: theme.spacing(1),
      "& .MuiCardHeader-title": {
        ...theme.typography.h3,
        fontSize: "85%",
      },
    },
    cardContent: {
      ...theme.typography.body2,
      paddingTop: 0,
    },
    cardActions: {
      padding: theme.spacing(1),
      display: "flex",
      justifyContent: "flex-end",
    },
  };
};
