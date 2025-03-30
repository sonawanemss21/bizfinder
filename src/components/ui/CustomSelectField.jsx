import React from "react";
import { TextField, MenuItem } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function CustomSelectField({
  label,
  value,
  onChange,
  options = [],
  required = false,
  sx = {},
  ...props
}) {
  const theme = useTheme();
  return (
    <TextField
      select
      label={label}
      value={value}
      onChange={onChange}
      required={required}
      fullWidth
      variant="outlined"
      InputLabelProps={{
        sx: {
          color: theme.palette.secondary.main, // blue label
          "&.Mui-focused": {
            color: theme.palette.secondary.main, // label stays blue when focused
          },
        },
      }}
      MenuProps={{
        PaperProps: {
          sx: {
            backgroundColor: theme.palette.secondary.default, // Dropdown background
            color: theme.palette.secondary.main, // Text color in dropdown
          },
        },
      }}
      sx={{
        minWidth: 200,
        backgroundColor: theme.palette.background.grey,
        borderRadius: 1,
        "& .MuiOutlinedInput-root": {
          "& fieldset": { borderColor: theme.palette.primary.default },
          "&:hover fieldset": { borderColor: theme.palette.secondary.default },
          "&.Mui-focused fieldset": {
            borderColor: theme.palette.tertiary.main,
          },
        },
        ...sx,
      }}
      {...props}
    >
      {options.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  );
}
