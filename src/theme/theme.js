import { createTheme } from "@mui/material/styles";

export const getTheme = (mode = "light") =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: mode === "light" ? "#FAF0CA" : "#0D3B66", // Ivory
        default: mode === "light" ? "#F4D35E" : "#0D3B66", // yellow
      },
      secondary: {
        main: mode === "light" ? "#0D3B66" : "#FAF0CA", //dark blue
        default: mode === "light" ? "#EE964B" : "#0D3B66", // light orange
      },
      tertiary: {
        main: mode === "light" ? "#F95738" : "#FAF0CA", // orange
      },
      background: {
        default: mode === "light" ? "#FAF0CA" : "#121212",
        bottomPaper: mode === "light" ? "#F95738" : "#1e1e1e",
        light: mode === "light" ? "#F5F5F5" : "#F5F5F5",
        white: mode === "light" ? "#ffffff" : "#ffffff",
        blur: mode ==='light' ? "rgba(13, 59, 102, 0.5)": "rgba(13, 59, 102, 0.5)",
        grey: mode === "light" ? "#fffcf2": "#fffcf2"
      },
      border: {
        modal: mode === "light" ? "rgba(255, 255, 255, 0.2)": "rgba(255, 255, 255, 0.2)",
      },
      text: {
        primary: mode === "light" ? "#333333" : "#ffffff",
      },
      logo: {
        color: mode === "light" ? "#0D3B66" : "#ffffff",
        navbarLogoColor: mode === "light" ? "#FAF0CA" : "#0D3B66",
        borderRadius: "8px",
        fontWeight: 800,
        fontSize: "3rem",
      },
      primaryButton: {
        backgroundColor: mode === "light" ? "#0D3B66" : "#FAF0CA",
        color: mode === "light" ? "#FAF0CA" : "#0D3B66",
      },
      textField: {
        borderColor: mode === "light" ? "#F4D35E" : "#F4D35E",
        labelColor: mode === "light" ? "#000000" : "#FAF0CA",
      },
    },
    typography: {
      fontFamily: `'Poppins', 'Open Sans', sans-serif`,
      h1: { fontSize: "2rem", fontWeight: 600 },
      h2: { fontSize: "1.5rem", fontWeight: 500 },
      body1: { fontSize: "1rem" },
    },
    shape: {
      borderRadius: 12,
    },
    spacing: 8,
  });
