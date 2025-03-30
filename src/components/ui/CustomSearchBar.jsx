import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";

export default function CustomSearchBar({
  value,
  onChange,
  fullWidth = true,
  placeholder = "Search businesses...",
}) {
  const theme = useTheme();

  return (
    <TextField
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      size="small"
      variant="outlined"
      fullWidth={fullWidth}
      InputProps={{
        startAdornment: (
          <InputAdornment position="end">
            <SearchIcon sx={{ color: theme.palette.secondary.default }} />
          </InputAdornment>
        ),
      }}
      sx={{
        backgroundColor: theme.palette.primary.main,
        borderRadius: 1,
        input: {
          color: theme.palette.secondary.main,
          fontWeight: 500,
        },
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.secondary.default,
        },
        "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.secondary.default,
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
          {
            borderColor: theme.palette.secondary.default,
          },
      }}
    />
  );
}
