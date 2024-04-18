// Tile #6
import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { GatsbyImage } from 'gatsby-plugin-image';

function TileImageTitle({ image, alt, title }) {
  return (
    <Card square elevation={0} sx={{ height: '100%', backgroundColor: 'transparent' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <GatsbyImage
          objectFit="contain"
          image={image}
          alt={alt || ''}
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        />
      </Box>
      <Box sx={{ py: 2 }}>
        <Box sx={{ fontSize: '20px', fontWeight: 400, textAlign: 'center' }}>
          <div>{title}</div>
        </Box>
      </Box>
    </Card>
  );
}

export default TileImageTitle;
