import { Typography, Avatar, Box, Chip } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";
import LanguageIcon from "@mui/icons-material/Language";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import StarRateIcon from "@mui/icons-material/StarRate";
export default function CardHeader({ business }) {
  const theme = useTheme();

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/business/${business.id}`);
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: 3,
        alignItems: "center",
        p: 2,
        backgroundColor: theme.palette.background.light,
        borderRadius: 2,
        border: "1px solid #DDD",
      }}
    >
      <Avatar
        variant="rounded"
        src={business.image}
        sx={{
          width: 90,
          height: 90,
          border: "2px solid",
          borderColor: theme.palette.background.main,
          backgroundColor: theme.palette.background.white,
          cursor: "pointer",
        }}
        onClick={handleClick}
      />
      <Box sx={{ textAlign: "left" }}>
        <Typography
          variant="h6"
          fontWeight={700}
          color={theme.palette.secondary.main}
          sx={{ cursor: "pointer" }}
          onClick={handleClick}
        >
          {business.name}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 2,
            // color: "#444",
          }}
        >
          <Chip
            label={business.category.toUpperCase()}
            sx={{
              my: 1,
              backgroundColor: theme.palette.secondary.main,
              color: theme.palette.primary.main,
              fontWeight: 600,
            }}
          />
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              lineHeight: 1,
            }}
          >
            {business.rating}
            <StarRateIcon
              sx={{
                color: "#f7b801",
                ml: "3px",
                fontSize: "19px",
                verticalAlign: "middle",
              }}
            />
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            color: "#444",
          }}
        >
          <PlaceIcon
            fontSize="small"
            sx={{ color: theme.palette.secondary.default }}
          />{" "}
          {business.address}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            color: "#444",
          }}
        >
          <PhoneIcon
            fontSize="small"
            sx={{ color: theme.palette.tertiary.main }}
          />{" "}
          {business.phone}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            color: "#444",
          }}
        >
          <LanguageIcon
            fontSize="small"
            sx={{ color: theme.palette.secondary.main }}
          />{" "}
          {business.website}
        </Typography>
      </Box>
    </Box>
  );
}
