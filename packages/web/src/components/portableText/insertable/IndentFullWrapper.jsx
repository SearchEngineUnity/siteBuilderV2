import React from 'react';
import Box from '@mui/material/Box';

function IndentFullWrapper({ children }) {
  return <Box sx={{ mx: { xs: 2.5, md: 5 } }}>{children}</Box>;
}

export default IndentFullWrapper;
