import React from "react";
import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function CustomButton({ sx, onClick, children }) {
  const theme = useTheme();
  return (
    <Button
      variant="contained"
      onClick={onClick}
      sx={{
        backgroundColor: theme.palette.secondary.default,
        color: theme.palette.primary.main,
        fontWeight: 600,
        "&:hover": {
          backgroundColor: theme.palette.secondary.default,
        },
        ...sx,
      }}
    >
      {children}
    </Button>
  );
}
