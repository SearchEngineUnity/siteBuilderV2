import React from 'react';
import Box from '@mui/material/Box';

function VerticalSpacingWrapper({ children }) {
  return (
    <Box sx={{ mt: 2, mb: 2, '&:first-child': { mt: 0 }, '&:last-child': { mb: 0 } }}>
      {children}
    </Box>
  );
}

export default VerticalSpacingWrapper;
