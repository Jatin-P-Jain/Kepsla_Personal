import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
} from "@mui/material";
import { useGridCardStyles } from "./gridCard.styles";

interface GridCardProps {
  title: string;
  content: React.ReactNode; // Supports text, elements, or components
  isDragging?: boolean; // Optional prop, defaults to false
  subheader?: string; // Optional subheader support
  actions?: React.ReactNode; // Optional actions (e.g., buttons, icons)
  sx?: object; // Allow overriding styles dynamically
}

const GridCard: React.FC<GridCardProps> = ({
  title,
  content,
  isDragging = false,
  subheader,
  actions,
  sx,
}) => {
  const styles = useGridCardStyles(); // Use the custom hook

  return (
    <Card sx={{ ...styles.card(isDragging), ...sx }}>
      <CardHeader title={title} subheader={subheader} sx={styles.cardHeader} />
      <CardContent sx={{ ...styles.cardContent, flexGrow: 1 }}>
        {content}
      </CardContent>

      {actions && (
        <>
          <Divider />
          <CardActions sx={styles.cardActions}>{actions}</CardActions>
        </>
      )}
    </Card>
  );
};

export default GridCard;
