import React from "react";
import { TextField } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function CustomMultilineTextField({ sx = {}, ...props }) {
  const theme = useTheme();
  return (
    <TextField
      variant="outlined"
      InputProps={{
        style: {
          color: theme.palette.secondary.main,
          fontWeight: 500,
        },
      }}
      InputLabelProps={{
        style: { color: theme.palette.secondary.main },
      }}
      sx={{
        backgroundColor: theme.palette.primary.main,
        borderRadius: 1,
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.primary.default,
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.secondary.default,
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.tertiary.main,
        },
        ...sx,
      }}
      {...props}
    />
  );
}
