import React, { useState, useContext, useEffect } from "react";
import { Box, Typography, Paper, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Logo from "../layout/Logo";
import PrimaryButton from "../ui/PrimaryButton";
import CustomTextFieldWithLabel from "../ui/CustomTextFieldWithLabel";
import { useNavigate, useLocation } from "react-router-dom";
import BusinessContext from "../../store/BusinessContext";
export default function StartPage() {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const { username, setUsername } = useContext(BusinessContext);
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState("");

  useEffect(() => {
    setUsername("");
  }, []);

  const handleChange = (value) => {
    setUsername(value.trim());
  };

  const handleStart = () => {
    if (!username) {
      setError(true);
      setHelperText("Name is required");
      setUsername("");
    } else if (username.length < 5) {
      setError(true);
      setHelperText("Minimum 5 characters");
      setUsername("");
    } else {
      setError(false);
      setHelperText("");
      const nextPath = `${location.pathname.replace(/\/$/, "")}/home`;
      navigate(nextPath);
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden", // Prevent scroll
        backgroundColor: theme.palette.background.grey,
      }}
    >
      {/* Top Content */}
      <Container
        maxWidth="sm"
        sx={{
          flex: 1,
          pt: 8, // distance from top
          pb: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Logo />

          <CustomTextFieldWithLabel
            label="Enter your name"
            value={username}
            onChange={(e) => handleChange(e.target.value)}
            sx={{ mt: 2, backgroundColor: theme.palette.background.grey }}
            error={error}
            required
            helperText={helperText}
          />
          <PrimaryButton
            onClick={handleStart}
            variant="contained"
            sx={{
              backgroundColor: theme.palette.primaryButton.backgroundColor,
              color: theme.palette.primaryButton.color,
              width: "50%",
              mt: 3,
            }}
          >
            Let's Get Started
          </PrimaryButton>
        </Box>
      </Container>

      {/* Fixed Height Bottom Description */}
      <Paper
        elevation={3}
        sx={{
          height: 30, // fixed height
          px: 3,
          py: 2,
          textAlign: "center",
          backgroundColor: theme.palette.secondary.main,
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        }}
      >
        <Typography variant="body1" fontSize={14} color={theme.palette.primary.main}>
          Discover and review local businesses easily with Biz Finder. Browse
          categories, read reviews, and find contact information all in one place.
        </Typography>
      </Paper>
    </Box>
  );
}
