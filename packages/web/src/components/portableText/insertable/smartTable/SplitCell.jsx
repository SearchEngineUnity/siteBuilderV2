import React from 'react';
import Box from '@mui/material/Box';

function SplitCell({ colHead, rowHead }) {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '100%',
        width: '100%',
        top: 0,
        left: 0,
      }}
    >
      <Box
        sx={{
          float: 'right',
          whiteSpace: 'nowrap',
          fontWeight: 'medium',
          '& .pt-heading': { fontWeight: 'medium' },
        }}
      >
        {colHead}
      </Box>
      <br />
      <Box
        sx={{
          whiteSpace: 'nowrap',
          fontWeight: 'medium',
          '& .pt-heading': { fontWeight: 'medium' },
        }}
      >
        {rowHead}
      </Box>
    </Box>
  );
}

export default SplitCell;
