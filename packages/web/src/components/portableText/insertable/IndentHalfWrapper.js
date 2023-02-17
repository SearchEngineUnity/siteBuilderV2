import React from 'react';
import { Box } from '@mui/material';

function IndentHalfWrapper({ children }) {
  return <Box mx={2.5}>{children}</Box>;
}

export default IndentHalfWrapper;
