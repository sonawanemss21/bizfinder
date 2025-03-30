import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import CustomNavbar from "../navbar/CustomNavbar";
import { useTheme } from "@mui/material/styles";

export default function Base({ children }) {
  const theme = useTheme();
  const username = "Guest"; // You can later fetch this from Context

  return (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: theme.palette.background.default,
        color: theme.palette.background.white,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Navbar */}
      <CustomNavbar />
      {children}
    </Box>
  );
}
