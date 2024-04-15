import React from 'react';
import Box from '@mui/material/Box';

function IndentHalfWrapper({ children }) {
  return <Box sx={{ mx: 2.5 }}>{children}</Box>;
}

export default IndentHalfWrapper;
