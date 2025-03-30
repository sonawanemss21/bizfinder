import { Slider } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function CustomSlider({
  value,
  onChange,
  marks,
  valueLabelFormat,
}) {
  const theme = useTheme();
  return (
    <Slider
      value={value}
      onChange={onChange}
      step={1}
      min={1}
      max={4}
      marks={marks}
      valueLabelDisplay="auto"
      valueLabelFormat={valueLabelFormat}
      sx={{
        color: theme.palette.tertiary.main, // main track color
        "& .MuiSlider-thumb": {
          backgroundColor: theme.palette.primary.default,
        },
        "& .MuiSlider-track": {
          backgroundColor: theme.palette.tertiary.main,
        },
        "& .MuiSlider-rail": {
          backgroundColor: theme.palette.primary.main,
        },
        "& .MuiSlider-markLabel": {
          color: theme.palette.primary.default, // 🎯 label color
          fontWeight: 500,
        },
      }}
    />
  );
}
