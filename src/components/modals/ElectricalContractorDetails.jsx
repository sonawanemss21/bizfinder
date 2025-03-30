import {
  Stack,
  TextField,
  MenuItem,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
  Box,
} from "@mui/material";
import CustomTextFieldWithLabel from "../ui/CustomTextFieldWithLabel";
import React, { useState, useEffect } from "react";
import CustomSelectField from "../ui/CustomSelectField";
export default function ElectricalContractorDetails({ onDataChange }) {
  const [wireBrand, setWireBrand] = useState("");
  const [switchBrand, setSwitchBrand] = useState("");
  const [services, setServices] = useState({
    automation: false,
    solar: false,
    lighting: false,
    panel: false,
  });

  useEffect(() => {
    const formData = {
      wireBrand,
      switchBrand,
      additionalServices: Object.keys(services).filter((key) => services[key]),
    };
    onDataChange?.(formData);
  }, [wireBrand, switchBrand, services, onDataChange]);

  const handleServiceChange = (e) => {
    setServices({ ...services, [e.target.name]: e.target.checked });
  };

  return (
    <Stack spacing={2}>
      <Typography variant="subtitle1" fontWeight={600}>
        Service Preferences:
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Box sx={{ flex: 1 }}>
          <CustomSelectField
            label="Preferred Wire Brand"
            value={wireBrand}
            onChange={(e) => setWireBrand(e.target.value)}
            options={["Brand A", "Brand B", "Brand C", "Other"]}
          />
        </Box>

        <Box sx={{ flex: 1 }}>
          <CustomSelectField
            label="Preferred Switch Brand"
            value={switchBrand}
            onChange={(e) => setSwitchBrand(e.target.value)}
            options={["Brand X", "Brand Y", "Brand Z", "Other"]}
          />
        </Box>
      </Box>

      <Typography variant="subtitle2" fontWeight={500}>
        Additional Services:
      </Typography>

      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={services.automation}
              onChange={handleServiceChange}
              name="automation"
            />
          }
          label="Home Automation"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={services.solar}
              onChange={handleServiceChange}
              name="solar"
            />
          }
          label="Solar Connection"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={services.lighting}
              onChange={handleServiceChange}
              name="lighting"
            />
          }
          label="Smart Lighting"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={services.panel}
              onChange={handleServiceChange}
              name="panel"
            />
          }
          label="Electrical Panel Upgrade"
        />
      </FormGroup>
    </Stack>
  );
}
