import React from "react";
import { Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTheme } from "@mui/material/styles";
export default function SecondaryButton({ endIcon, onClick, children }) {
  const theme = useTheme();
  return (
    <Button
      endIcon={endIcon}
      onClick={onClick}
      sx={{
        color: theme.palette.secondary.main,
        border: "none",
        // borderBottom: "1px solid #0D3B66",
        borderRadius: 0,
        backgroundColor: "transparent",
        textTransform: "none",
        fontWeight: 500,
        fontSize: "0.95rem",
        minWidth: "auto",
        paddingX: 0,
        "&:hover": {
          backgroundColor: "transparent",
          //   borderBottom: "1px solid #0D3B66",
          textDecoration: "none",
        },
      }}
    >
      {children}
    </Button>
  );
}
