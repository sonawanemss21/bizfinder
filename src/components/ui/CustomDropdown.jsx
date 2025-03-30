import React from 'react';
import { FormControl, Select, MenuItem } from '@mui/material';
import { useTheme } from "@mui/material/styles";

export default function CategorySelect({ value, onChange, sx }) {
    const theme = useTheme();
  
  return (
    <FormControl fullWidth>
      <Select
        value={value}
        onChange={onChange}
        displayEmpty
        sx={{
          backgroundColor: theme.palette.secondary.default,
          color: theme.palette.secondary.main,
          fontWeight: 600,
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.secondary.default,
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.secondary.default,
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.secondary.default,
          },
          ...sx
        }}
        MenuProps={{
          PaperProps: {
            sx: {
              backgroundColor: theme.palette.background.grey, // Dropdown background
              color: theme.palette.secondary.main,            // Text color in dropdown
            },
          },
        }}
      >
        <MenuItem value="all">All Categories</MenuItem>
        <MenuItem value="IT">IT</MenuItem>
        <MenuItem value="content creator">Content Creator</MenuItem>
        <MenuItem value="boutique">Boutique</MenuItem>
        <MenuItem value="electrical contractor">Electrical Contractor</MenuItem>
      </Select>
    </FormControl>
  );
}
