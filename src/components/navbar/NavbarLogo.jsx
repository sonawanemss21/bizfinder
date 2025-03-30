import { Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LogoIcon from "../../assets/logo.png";
export default function NavbarLogo() {
  const theme = useTheme();

  return (
    <Box display="flex" alignItems="center" gap={1}>
      <img src={LogoIcon} alt="Logo" style={{ width: 50, height: 50, borderRadius: theme.palette.logo.borderRadius }} />
      <Typography
        variant="h6"
        color="primary"
        sx={{
          ml: 1,
          color: theme.palette.logo.navbarLogoColor,
        //   fontWeight: theme.palette.logo.fontWeight,
        //   fontSize: theme.palette.logo.fontSize,
        }}
        fontWeight={600}
      >
        Biz Finder
      </Typography>
    </Box>
  );
}
