import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import TileAToZ from '../tiles/TileAToZ';

function AtoZSection({ letter, list }) {
  const id = letter.toLowerCase();
  const letterMatchedList = list.filter((item) => item.title.toUpperCase().startsWith(letter));

  return (
    <Box id={id} sx={{ my: '36px' }}>
      <Box
        sx={{
          fontSize: { xs: '20px', md: '24px' },
          width: { xs: '36px', md: '48px' },
          height: { xs: '38.67px', md: '48px' },
          fontWeight: 'fontWeightBold',
          padding: 0,
          color: (theme) => theme.palette.common.white,
          backgroundColor: (theme) => theme.palette.primary.main,
          display: 'flex',
          flexWrap: 'wrap',
          borderRadius: '6px',
          alignContent: 'center',
          justifyContent: 'center',
          lineHeight: 1,
        }}
      >
        {letter}
      </Box>
      <Divider
        sx={{
          border: (theme) => `1.5px solid ${theme.palette.primary.main}`,
          my: { xs: '13px', md: '15px' },
        }}
      />
      <Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', columnGap: '60px' }}>
        {letterMatchedList.map((item) => (
          <TileAToZ key={item._key} item={item} />
        ))}
      </Box>
    </Box>
  );
}

export default AtoZSection;
