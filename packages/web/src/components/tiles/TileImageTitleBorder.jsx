// Tile #3
import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { GatsbyImage } from 'gatsby-plugin-image';
import ConditionalCardActionArea from '../cardActionArea/ConditionalCardActionArea';

function TileImageTitleBorder({ image, alt, link, title }) {
  return (
    <Card
      elevation={link ? 8 : 0}
      sx={{ border: '1px solid #acb4b8', borderRadius: '0.25rem', height: '100%' }}
    >
      <ConditionalCardActionArea link={link}>
        <Box sx={{ pt: 2 }}>
          <GatsbyImage
            image={image}
            alt={alt || ''}
            style={{
              width: '50%',
              height: 'auto',
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          />
        </Box>
        <Box sx={{ py: 2, px: 1 }}>
          <Box sx={{ fontSize: '20px', fontWeight: 700, textAlign: 'center' }}>
            <div>{title}</div>
          </Box>
        </Box>
      </ConditionalCardActionArea>
    </Card>
  );
}

export default TileImageTitleBorder;
