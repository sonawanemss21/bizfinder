import React from 'react';
import { Button } from '@mui/material';
import { useTheme } from "@mui/material/styles";

export default function PrimaryButton({
  children,
  onClick,
  variant = 'contained',
  fullWidth = false,
  sx,
  ...rest
}) {
  const theme = useTheme()

  return (
    <Button
      variant={variant}
      onClick={onClick}
      fullWidth={fullWidth}
      sx={{
        borderRadius: 2,
        fontWeight: 600,
        textTransform: 'none',
        px: 3,
        py: 1.5,
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Button>
  );
}