// Tile #8
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage } from 'gatsby-plugin-image';
import sanityConfig from '../../lib/sanityConfig';

export default function TileBorderSmImageTopTitleText({ image, alt, title, text }) {
  const imageData = getGatsbyImageData(
    image,
    {
      layout: 'fullWidth',
    },
    sanityConfig,
  );

  return (
    <Box sx={{ paddingTop: '30px', height: '100%', display: 'flex' }}>
      <Box
        sx={{
          border: (theme) => `solid 4px ${theme.palette.primary.main}`,
          position: 'relative',
          padding: '54px 24px 24px',
          width: '100%',
        }}
      >
        <GatsbyImage
          image={imageData}
          alt={alt || ''}
          style={{
            height: '72px',
            width: '72px',
            position: 'absolute',
            top: '-36px',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        />
        <Typography variant="h3" gutterBottom sx={{ textAlign: 'center' }}>
          {title}
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          component="p"
          sx={{ textAlign: 'center' }}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
}
