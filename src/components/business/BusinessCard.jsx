import React, { useState, useContext } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  Avatar,
  Collapse,
  Divider,
  Paper,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BusinessContext from "../../store/BusinessContext";
import CardHeader from "./CardHeader";
import { useTheme } from "@mui/material/styles";
import CustomButton from "../ui/CustomButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ReviewsCard from "./ReviewsCard";
import EmailUsModal from "../modals/EmailModal";
import SecondaryButton from "../ui/SecondaryButton";
export default function BusinessCard({ business }) {
  const { reviewCardOpenId, setReviewCardOpenId } = useContext(BusinessContext);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  const theme = useTheme();
  const isOpen = reviewCardOpenId === business.id;

  const toggleReviewSection = () => {
    setReviewCardOpenId(isOpen ? null : business.id);
  };

  return (
    <Card variant="outlined" sx={{ maxWidth: 600, m: 2 }}>
      <CardContent>
        {/* Header */}
        <CardHeader business={business} />

        {/* Description */}
        <Paper
          elevation={2}
          sx={{ backgroundColor: theme.palette.background.light, mt: 1, mb: 5, py: 3 }}
        >
          <Typography
            variant="body1"
            fontWeight={600}
            color={theme.palette.secondary.main}
          >
            {business.description}
          </Typography>
        </Paper>

        {/* Footer */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 1,
            flexWrap: "wrap",
          }}
        >
          <CustomButton
            variant="outlined"
            onClick={() => setIsEmailModalOpen(true)}
          >
            Email Us
          </CustomButton>

          <Box sx={{ display: "flex", gap: 3 }}>
            <CustomButton variant="outlined" onClick={toggleReviewSection}>
              Add Review
            </CustomButton>
            <SecondaryButton
              variant="text"
              endIcon={
                isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />
              }
              onClick={toggleReviewSection}
            >
              {business.reviews.length} Reviews
            </SecondaryButton>
          </Box>
        </Box>

        {/* Toggleable Review Section */}
        <ReviewsCard isOpen={isOpen} business={business} />
      </CardContent>
      <EmailUsModal
        open={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
        business={business}
      />
    </Card>
  );
}
