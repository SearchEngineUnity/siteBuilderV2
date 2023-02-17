import React from 'react';
import { Box } from '@mui/material';

function IndentFullWrapper({ children }) {
  return <Box mx={{ xs: 2.5, md: 5 }}>{children}</Box>;
}

export default IndentFullWrapper;
