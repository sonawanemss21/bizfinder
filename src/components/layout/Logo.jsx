import { Box, Typography } from "@mui/material";
import logoIcon from "../../assets/logo.png";
import { useTheme } from "@mui/material/styles";

export default function Logo() {
  const theme = useTheme();

  return (
    <Box
      mb={3}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <img
        src={logoIcon}
        alt="Logo"
        style={{
          width: 300, // 🔼 Made image bigger
          height: 300,
          marginBottom: 25,
          borderRadius: theme.palette.logo.borderRadius,
        }}
      />
      <Typography
        variant="caption1"
        sx={{ fontStyle: "italic", fontSize: "17px", maxWidth: 400 }}
      >
        Easily discover trusted businesses tailored to your needs. From tech to
        tailoring, find the right service at the right place — all in one
        directory.
      </Typography>
    </Box>
  );
}
