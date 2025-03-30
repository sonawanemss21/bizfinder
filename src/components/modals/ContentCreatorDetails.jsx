import React, { useState, useEffect } from "react";
import {
  Stack,
  Typography,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Box,
} from "@mui/material";

export default function ContentCreatorDetails({ onDataChange }) {
  const [platforms, setPlatforms] = useState({
    youtube: false,
    instagram: false,
    blog: false,
    podcast: false,
    other: false,
  });

  const [categories, setCategories] = useState({
    fashion: false,
    travel: false,
    food: false,
    health: false,
    education: false,
    entertainment: false,
    other: false,
  });

  const [collaborations, setCollaborations] = useState({
    brand: false,
    affiliate: false,
    guest: false,
    review: false,
    other: false,
  });

  useEffect(() => {
    const formData = {
      primaryPlatforms: [...Object.keys(platforms).filter((k) => platforms[k])],
      contentCategories: [
        ...Object.keys(categories).filter((k) => categories[k]),
      ],
      collaborationTypes: [
        ...Object.keys(collaborations).filter((k) => collaborations[k]),
      ],
    };
    onDataChange?.(formData);
  }, [platforms, categories, collaborations, onDataChange]);

  const handleCheckboxChange = (setter) => (e) => {
    setter((prev) => ({ ...prev, [e.target.name]: e.target.checked }));
  };

  return (
    <Stack spacing={3}>
      <Box
        sx={{
          display: "flex",
          gap: 4,
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography variant="subtitle1" fontWeight={600}>
            Content Creation Platforms:
          </Typography>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={platforms.youtube}
                  onChange={handleCheckboxChange(setPlatforms)}
                  name="youtube"
                />
              }
              label="YouTube"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={platforms.instagram}
                  onChange={handleCheckboxChange(setPlatforms)}
                  name="instagram"
                />
              }
              label="Instagram"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={platforms.blog}
                  onChange={handleCheckboxChange(setPlatforms)}
                  name="blog"
                />
              }
              label="Blog/Website"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={platforms.podcast}
                  onChange={handleCheckboxChange(setPlatforms)}
                  name="podcast"
                />
              }
              label="Podcast"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={platforms.other}
                  onChange={handleCheckboxChange(setPlatforms)}
                  name="Other"
                />
              }
              label="Other"
            />
          </FormGroup>
        </Box>

        <Box sx={{ flex: 1 }}>
          <Typography variant="subtitle1" fontWeight={600}>
            Content Focus:
          </Typography>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={categories.fashion}
                  onChange={handleCheckboxChange(setCategories)}
                  name="fashion"
                />
              }
              label="Fashion"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={categories.travel}
                  onChange={handleCheckboxChange(setCategories)}
                  name="travel"
                />
              }
              label="Travel"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={categories.food}
                  onChange={handleCheckboxChange(setCategories)}
                  name="food"
                />
              }
              label="Food & Beverage"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={categories.health}
                  onChange={handleCheckboxChange(setCategories)}
                  name="health"
                />
              }
              label="Health & Wellness"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={categories.education}
                  onChange={handleCheckboxChange(setCategories)}
                  name="education"
                />
              }
              label="Education"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={categories.entertainment}
                  onChange={handleCheckboxChange(setCategories)}
                  name="entertainment"
                />
              }
              label="Entertainment"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={categories.other}
                  onChange={handleCheckboxChange(setCategories)}
                  name="Other"
                />
              }
              label="Other"
            />
          </FormGroup>
        </Box>

        <Box sx={{ flex: 1 }}>
          <Typography variant="subtitle1" fontWeight={600}>
            Collaboration Interests:
          </Typography>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={collaborations.brand}
                  onChange={handleCheckboxChange(setCollaborations)}
                  name="brand"
                />
              }
              label="Brand Partnerships"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={collaborations.affiliate}
                  onChange={handleCheckboxChange(setCollaborations)}
                  name="affiliate"
                />
              }
              label="Affiliate Marketing"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={collaborations.guest}
                  onChange={handleCheckboxChange(setCollaborations)}
                  name="guest"
                />
              }
              label="Guest Features"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={collaborations.review}
                  onChange={handleCheckboxChange(setCollaborations)}
                  name="review"
                />
              }
              label="Product Reviews"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={collaborations.other}
                  onChange={handleCheckboxChange(setCollaborations)}
                  name="Other"
                />
              }
              label="Other"
            />
          </FormGroup>
        </Box>
      </Box>
    </Stack>
  );
}
