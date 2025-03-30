import React from "react";
import { TextField } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function CustomTextFieldWithLabel({
  label,
  value,
  onChange,
  name = "custom-input",
  autoComplete = "off",
  fullWidth = true,
  variant = "outlined",
  error,
  helperText,
  sx = {},
  ...rest
}) {
  const theme = useTheme();

  return (
    <TextField
      label={label}
      name={name}
      autoComplete={autoComplete}
      value={value}
      onChange={onChange}
      fullWidth={fullWidth}
      variant={variant}
      error={error}
      helperText={helperText}
      sx={{
        mt: 2,
        borderRadius: "12px",
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: theme.palette.textField.borderColor,
          },
          "&:hover fieldset": {
            borderColor: theme.palette.textField.borderColor,
          },
          "&.Mui-focused fieldset": {
            borderColor: theme.palette.textField.borderColor,
            borderWidth: "2px",
          },
          "& .MuiOutlinedInput-input": {
            backgroundColor: theme.palette.background.grey,
            borderRadius: "12px",
          },
        },
        "& .MuiFormHelperText-root": {
          color: theme.palette.tertiary.main,
          fontSize: "0.9rem",
          fontWeight: "bold",
        },
        "& .MuiInputLabel-root": {
          color: theme.palette.secondary.main, // your custom label color
        },
        "& label.Mui-focused": {
          color: theme.palette.textField.labelColor, // Change color when focused
        },
        ...sx,
      }}
      {...rest}
    />
  );
}
