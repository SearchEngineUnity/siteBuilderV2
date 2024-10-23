// Tile #7
import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { GatsbyImage } from 'gatsby-plugin-image';

function TileImageTitleSubtitleTextListing({ image, alt, title, text, subtitle }) {
  return (
    <Card square elevation={0} sx={{ backgroundColor: 'transparent' }}>
      <Box sx={{ display: 'flex' }}>
        <Box
          sx={{
            height: { lg: '236px', md: '248px', xs: '0px' },
            width: { lg: '379px', md: '248px', xs: '0px' },
          }}
        >
          <GatsbyImage image={image} alt={alt || ''} style={{ width: '100%', height: '100%' }} />
        </Box>
        <Box sx={{ paddingLeft: { md: 3, sm: 0 } }}>
          <Typography
            gutterBottom
            variant="h3"
            component="p"
            sx={{
              fontWeight: 900,
            }}
          >
            {title}
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="p"
            sx={{ fontStyle: 'italic', fontWeight: 600 }}
          >
            {subtitle}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            {text}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}

export default TileImageTitleSubtitleTextListing;
