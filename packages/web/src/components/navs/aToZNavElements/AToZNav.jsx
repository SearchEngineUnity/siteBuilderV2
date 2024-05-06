import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AToZButton from './AToZButton';

function AToZNav({ alphabet, firstLetterArrayFromList, instruction }) {
  return (
    <Box sx={{ my: '36px' }}>
      <Typography variant="body1" textAlign="center" gutterBottom>
        {instruction}
      </Typography>
      <Box
        component="nav"
        sx={{
          display: 'flex',
          maxWidth: '832px',
          gap: '12px',
          direction: 'row',
          flexWrap: 'wrap',
          mx: 'auto',
          justifyContent: 'center',
        }}
      >
        {alphabet.map((x, i) => {
          if (firstLetterArrayFromList.find((y) => y === x)) {
            return <AToZButton key={`a-to-z-btn-${x}`} letter={x} />;
          }
          return <AToZButton key={`a-to-z-btn-${x}`} letter={x} disabled />;
        })}
      </Box>
    </Box>
  );
}

export default AToZNav;
