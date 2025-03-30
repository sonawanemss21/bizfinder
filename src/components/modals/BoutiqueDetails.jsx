import {
  Stack,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  Radio,
  Box
} from "@mui/material";
import React, { useState, useEffect } from "react";

export default function BoutiqueDetails({ onDataChange }) {
  const [styles, setStyles] = useState({ casual: false, formal: false, other: false });
  const [accessoryInterest, setAccessoryInterest] = useState("");
  const [shoppingMethod, setShoppingMethod] = useState("");

  useEffect(() => {
    const data = {
      preferredStyles: Object.keys(styles).filter((key) => styles[key]),
      accessoryInterest,
      shoppingMethod,
    };
    onDataChange?.(data);
  }, [styles, accessoryInterest, shoppingMethod, onDataChange]);

  const handleStyleChange = (e) => {
    setStyles({ ...styles, [e.target.name]: e.target.checked });
  };

  return (
    <Stack spacing={3}>
      <Box sx={{ display: "flex", gap: 4, flexDirection: { xs: "column", md: "row" } }}>
        <Box>
          <Typography variant="subtitle1" fontWeight={600}>
            Style Preferences:
          </Typography>
          <FormGroup row>
            <FormControlLabel
              control={<Checkbox name="casual" checked={styles.casual} onChange={handleStyleChange} />}
              label="Casual"
            />
            <FormControlLabel
              control={<Checkbox name="formal" checked={styles.formal} onChange={handleStyleChange} />}
              label="Formal"
            />
            <FormControlLabel
              control={<Checkbox name="other" checked={styles.other} onChange={handleStyleChange} />}
              label="Other"
            />
          </FormGroup>
        </Box>

        <Box>
          <Typography variant="subtitle1" fontWeight={600}>
            Accessory Interests:
          </Typography>
          <RadioGroup
            row
            value={accessoryInterest}
            onChange={(e) => setAccessoryInterest(e.target.value)}
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </Box>

        <Box>
          <Typography variant="subtitle1" fontWeight={600}>
            Shopping Preferences:
          </Typography>
          <RadioGroup
            row
            value={shoppingMethod}
            onChange={(e) => setShoppingMethod(e.target.value)}
          >
            <FormControlLabel value="In-Store" control={<Radio />} label="In-Store" />
            <FormControlLabel value="Online" control={<Radio />} label="Online" />
            <FormControlLabel value="Both" control={<Radio />} label="Both" />
          </RadioGroup>
        </Box>
      </Box>
    </Stack>
  );
}
