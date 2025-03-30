import React, { useEffect, useState } from "react";
import {
  Stack,
  Typography,
  Box,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormGroup,
  Checkbox,
} from "@mui/material";
import CustomSlider from "../ui/CustomSlider";

export default function ITDetails({ onDataChange }) {
  const [budget, setBudget] = useState(2);
  const [serviceArea, setServiceArea] = useState("");
  const [engagementType, setEngagementType] = useState("");

  const [softwareOptions, setSoftwareOptions] = useState({
    web: false,
    mobile: false,
    maintenance: false,
    api: false,
  });

  const [aiOptions, setAiOptions] = useState({
    chatbot: false,
    recommender: false,
    vision: false,
    predictive: false,
  });

  const [cloudOptions, setCloudOptions] = useState({
    setup: false,
    migration: false,
    devops: false,
    monitoring: false,
  });

  const budgetMarks = [
    { value: 1, label: "<$1000" },
    { value: 2, label: "$1000-$1500" },
    { value: 3, label: "$1500-$2000" },
    { value: 4, label: ">$2000" },
  ];

  const getBudgetLabel = (val) => {
    return budgetMarks.find((m) => m.value === val)?.label || "";
  };

  useEffect(() => {
    const getChecked = (obj) =>
      Object.keys(obj).filter((key) => obj[key]);

    let specificRequirements = [];
    if (serviceArea === "Software Services") specificRequirements = getChecked(softwareOptions);
    else if (serviceArea === "AI Solutions") specificRequirements = getChecked(aiOptions);
    else if (serviceArea === "Cloud Infrastructure") specificRequirements = getChecked(cloudOptions);

    const data = {
      budget: getBudgetLabel(budget),
      serviceArea,
      specificRequirements,
      engagementType,
    };
    onDataChange?.(data);
  }, [budget, serviceArea, softwareOptions, aiOptions, cloudOptions, engagementType, onDataChange]);

  const handleCheckboxChange = (setter) => (e) => {
    setter((prev) => ({ ...prev, [e.target.name]: e.target.checked }));
  };

  return (
    <Stack spacing={3}>
      <Typography variant="subtitle1" fontWeight={600}>
        Budget Range:
      </Typography>
      <CustomSlider
        value={budget}
        onChange={(e, val) => setBudget(val)}
        marks={budgetMarks}
        valueLabelFormat={getBudgetLabel}
      />

      <Box sx={{ display: "flex", gap: 4, flexDirection: { xs: "column", sm: "row" }, pt: 3 }}>
        <Box>
          <Typography variant="subtitle1" fontWeight={600}>
            Choose Your Service Area:
          </Typography>
          <RadioGroup
            value={serviceArea}
            onChange={(e) => setServiceArea(e.target.value)}
          >
            {["Software Services", "AI Solutions", "Cloud Infrastructure"].map((option) => (
              <FormControlLabel
                key={option}
                value={option}
                control={<Radio />}
                label={option}
              />
            ))}
          </RadioGroup>
        </Box>

        <Box>
          <Typography variant="subtitle1" fontWeight={600}>
            Preferred Engagement Type:
          </Typography>
          <RadioGroup
            value={engagementType}
            onChange={(e) => setEngagementType(e.target.value)}
          >
            {["One-time Project", "Monthly Support", "Not Sure"].map((option) => (
              <FormControlLabel
                key={option}
                value={option}
                control={<Radio />}
                label={option}
              />
            ))}
          </RadioGroup>
        </Box>
      </Box>

      {serviceArea === "Software Services" && (
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={softwareOptions.web} onChange={handleCheckboxChange(setSoftwareOptions)} name="web" />}
            label="Web Application Development"
          />
          <FormControlLabel
            control={<Checkbox checked={softwareOptions.mobile} onChange={handleCheckboxChange(setSoftwareOptions)} name="mobile" />}
            label="Mobile App Development"
          />
          <FormControlLabel
            control={<Checkbox checked={softwareOptions.maintenance} onChange={handleCheckboxChange(setSoftwareOptions)} name="maintenance" />}
            label="Software Maintenance"
          />
          <FormControlLabel
            control={<Checkbox checked={softwareOptions.api} onChange={handleCheckboxChange(setSoftwareOptions)} name="api" />}
            label="API Integration"
          />
        </FormGroup>
      )}

      {serviceArea === "AI Solutions" && (
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={aiOptions.chatbot} onChange={handleCheckboxChange(setAiOptions)} name="chatbot" />}
            label="Chatbot / NLP"
          />
          <FormControlLabel
            control={<Checkbox checked={aiOptions.recommender} onChange={handleCheckboxChange(setAiOptions)} name="recommender" />}
            label="Recommendation Systems"
          />
          <FormControlLabel
            control={<Checkbox checked={aiOptions.vision} onChange={handleCheckboxChange(setAiOptions)} name="vision" />}
            label="Computer Vision"
          />
          <FormControlLabel
            control={<Checkbox checked={aiOptions.predictive} onChange={handleCheckboxChange(setAiOptions)} name="predictive" />}
            label="Predictive Analytics"
          />
        </FormGroup>
      )}

      {serviceArea === "Cloud Infrastructure" && (
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={cloudOptions.setup} onChange={handleCheckboxChange(setCloudOptions)} name="setup" />}
            label="AWS / Azure Setup"
          />
          <FormControlLabel
            control={<Checkbox checked={cloudOptions.migration} onChange={handleCheckboxChange(setCloudOptions)} name="migration" />}
            label="Cloud Migration"
          />
          <FormControlLabel
            control={<Checkbox checked={cloudOptions.devops} onChange={handleCheckboxChange(setCloudOptions)} name="devops" />}
            label="DevOps / CI-CD"
          />
          <FormControlLabel
            control={<Checkbox checked={cloudOptions.monitoring} onChange={handleCheckboxChange(setCloudOptions)} name="monitoring" />}
            label="Server Monitoring"
          />
        </FormGroup>
      )}
    </Stack>
  );
}