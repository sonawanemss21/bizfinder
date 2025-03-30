import {
  Button,
  TextField,
  Box,
  Collapse,
  Divider,
  Typography,
} from "@mui/material";
import CustomButton from "../ui/CustomButton";
import { useState, useContext } from "react";
import { useTheme } from "@mui/material/styles";
import CustomMultilineTextField from "../ui/CustomMultilineTextField";
import BusinessContext from "../../store/BusinessContext";
export default function ReviewsCard({ isOpen, business }) {
  const theme = useTheme();
  const [newReview, setNewReview] = useState("");
  const { addReview, username, setUsername } = useContext(BusinessContext);

  const handleAddReview = () => {
    if (newReview.trim()) {
      setNewReview(newReview);
      addReview(business.id, newReview, 5);
      setNewReview("");
    }
  };

  return (
    <Collapse in={isOpen}>
      <Box
        sx={{
          mt: 2,
          p: 3,
          borderRadius: 2,
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.primary.main,
        }}
      >
        <Typography variant="subtitle1" fontWeight={600} color={theme.palette.primary.default}>
          Add a Review
        </Typography>

        <CustomMultilineTextField
          fullWidth
          multiline
          rows={2}
          placeholder="Write your review here..."
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          sx={{
            mt: 1,
            mb: 2,
            backgroundColor: theme.palette.primary.main,
          }}
        />

        <CustomButton variant="contained" onClick={handleAddReview}>
          Submit
        </CustomButton>

        <Divider sx={{ my: 2, borderColor: theme.palette.primary.default }} />
        <Typography variant="subtitle2" gutterBottom color={theme.palette.primary.default}>
          All Reviews:
        </Typography>
        {business.reviews.map((rev) => (
          <Box key={rev.id} sx={{ mb: 1, display: "flex", gap: 1 }}>
            <Typography variant="body2" fontWeight={500} color={theme.palette.primary.default}>
              {rev.user}:
            </Typography>
            <Typography
              variant="body2"
              sx={{ ml: 1, color: theme.palette.primary.main }}
            >
              {rev.comment}
            </Typography>
          </Box>
        ))}
      </Box>
    </Collapse>
  );
}
