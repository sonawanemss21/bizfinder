import { useParams } from "react-router-dom";
import { useContext } from "react";
import BusinessContext from "../../store/BusinessContext";
import {
  Box,
  Typography,
  Avatar,
  Divider,
  Paper,
  Grid,
  Chip,
  Rating,
  IconButton,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import LanguageIcon from "@mui/icons-material/Language";
import Base from "../layout/Base";
import CustomButton from "../ui/CustomButton";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

export default function BusinessDetailPage() {
  const theme = useTheme();
  const navigate = useNavigate();
  const { id } = useParams();
  const { businesses } = useContext(BusinessContext);
  const business = businesses.find((b) => b.id === parseInt(id));

  if (!business) {
    return <Typography>Business not found</Typography>;
  }

  return (
    <Base>
      <Box
        sx={{
          p: 4,
          height: "90vh",
          overflow: "hidden",
          boxSizing: "border-box",
        }}
      >
        <Paper
          elevation={6}
          sx={{
            p: 4,
            borderRadius: 3,
            backgroundColor: theme.palette.background.white,
            height: "calc(85vh - 64px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ flexGrow: 1, overflowY: "auto", pr: 1 }}>
          
            <Grid container spacing={4}>
              <Grid item xs={12} md={5}>
                <Avatar
                  variant="rounded"
                  src={business.image}
                  alt={business.name}
                  sx={{ width: 150, height: 150, borderRadius: 3, mb: 2 }}
                />
                <Rating value={business.rating} readOnly precision={0.1} />
                <Typography
                  variant="caption"
                  display="block"
                  color="text.secondary"
                >
                  Verified: {business.isVerified ? "✅ Yes" : "❌ No"}
                </Typography>
              </Grid>

              <Grid item xs={12} md={7}>
                <Typography variant="h4" fontWeight={700} color={theme.palette.secondary.main}>
                  {business.name}
                </Typography>
                <Chip
                  label={business.category.toUpperCase()}
                  sx={{
                    mt: 1,
                    backgroundColor: theme.palette.secondary.default,
                    color: theme.palette.background.white,
                    fontWeight: 600,
                  }}
                />

                <Box sx={{ mt: 3 }}>
                  <Typography
                    variant="body1"
                    sx={{ display: "flex", alignItems: "center", mb: 1 }}
                  >
                    <LocationOnIcon sx={{ mr: 1, color: theme.palette.tertiary.main }} />{" "}
                    {business.address}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ display: "flex", alignItems: "center", mb: 1 }}
                  >
                    <PhoneIcon sx={{ mr: 1, color: theme.palette.secondary.default }} />{" "}
                    {business.phone}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <LanguageIcon sx={{ mr: 1, color: theme.palette.secondary.main }} />{" "}
                    {business.website}
                  </Typography>
                </Box>
              </Grid>
            </Grid>

            <Box sx={{ mt: 4 }}>
              <Typography variant="h5" gutterBottom color={theme.palette.secondary.main}>
                About the Business
              </Typography>
              <Typography paragraph>{business.description}</Typography>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Box
              sx={{
                backgroundColor: theme.palette.secondary.default,
                pb: 2,
                pt: 1,
                px: 3,
                borderRadius: 2,
              }}
            >
              <Typography variant="h5" gutterBottom color={theme.palette.primary.main}>
                Customer Reviews
              </Typography>
              {business.reviews.length > 0 ? (
                business.reviews.map((review) => (
                  <Paper
                    key={review.id}
                    elevation={2}
                    sx={{
                      p: 2,
                      mb: 2,
                      backgroundColor: theme.palette.background.white,
                      display: "flex",
                    }}
                  >
                    <Typography
                      variant="caption1"
                      color={theme.palette.tertiary.main}
                      fontWeight={600}
                      mr={2}
                    >
                      {review.user}
                    </Typography>
                    <Typography
                      variant="body1"
                      color={theme.palette.secondary.main}
                      mr={4}
                    >
                      {review.comment}
                    </Typography>
                    <Typography
                      variant="body2"
                      color={theme.palette.secondary.main}
                    >
                      {new Date(review.timestamp).toLocaleString()}
                    </Typography>
                  </Paper>
                ))
              ) : (
                <Typography>No reviews yet.</Typography>
              )}
            </Box>

            <Divider sx={{ my: 2 }} />

            <Box
              sx={{
                backgroundColor: theme.palette.secondary.main,
                borderRadius: 2,
              }}
            >
              <Typography
                variant="h6"
                color={theme.palette.primary.main}
                mb={1}
                pt={2}
              >
                Why Choose Us?
              </Typography>
              <Typography
                variant="body2"
                color={theme.palette.primary.main}
                sx={{ mb: 2 }}
              >
                We offer premium quality services backed by years of experience
                and hundreds of happy clients. Our team is dedicated to
                delivering excellence and custom solutions tailored to your
                business needs.
              </Typography>
              <CustomButton sx={{ mb: 2 }}>Contact Now</CustomButton>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Base>
  );
}
