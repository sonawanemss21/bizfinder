import { useContext } from "react";
import { AppBar, Toolbar, Chip, Avatar, IconButton, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import NavbarLogo from "./NavbarLogo";
import BusinessContext from "../../store/BusinessContext";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
export default function CustomNavbar() {
  const theme = useTheme();
  const { username } = useContext(BusinessContext);
  const navigate = useNavigate();
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: theme.palette.secondary.main,
      }}
      elevation={0}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 2,
          py: 1,
        }}
      >
        {/* Left: Logo + Brand */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            px: 2,
            py: 1,
          }}
        >
          <IconButton
            onClick={() => navigate(-1)}
            sx={{
              color: theme.palette.primary.main,
              backgroundColor: theme.palette.secondary.main,
              "&:hover": {
                backgroundColor: theme.palette.secondary.main,
              },
            }}
          >
            <ArrowBackIcon />
          </IconButton>
          <NavbarLogo />
        </Box>
        {/* Right: Username */}
        <Chip
          avatar={
            <Avatar
              src="/broken-image.jpg"
              sx={{ backgroundColor: theme.palette.secondary.default }}
            />
          }
          label={username}
          sx={{
            backgroundColor: theme.palette.primary.default,
            color: theme.palette.secondary.main,
            // fontWeight: 600,
            fontSize: "1rem",
            // height: 40,
            // px: 1.5, // horizontal padding
          }}
        />
      </Toolbar>
    </AppBar>
  );
}
