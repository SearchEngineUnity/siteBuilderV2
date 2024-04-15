// Tile #7
import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage } from 'gatsby-plugin-image';
import sanityConfig from '../../lib/sanityConfig';
import ConditionalCardActionArea from '../cardActionArea/ConditionalCardActionArea';

function TileImageTitleSubtitleTextListing({ image, alt, link, title, text, subtitle }) {
  const imageData = getGatsbyImageData(
    image,
    {
      layout: 'fullWidth',
    },
    sanityConfig,
  );

  return (
    <Card square elevation={link ? 8 : 0} sx={{ display: 'flex' }}>
      <ConditionalCardActionArea link={link}>
        <Box sx={{ display: 'flex' }}>
          <Box
            sx={{
              height: { lg: '236px', md: '248px', xs: '0px' },
              width: { lg: '379px', md: '248px', xs: '0px' },
              flexGrow: 1,
              flexShrink: 0,
            }}
          >
            <GatsbyImage
              image={imageData}
              alt={alt || ''}
              style={{ width: '100%', height: '100%' }}
            />
          </Box>
          <Box sx={{ paddingLeft: { md: 3, sm: 0 } }}>
            <Typography gutterBottom variant="h3" component="p">
              {title}
            </Typography>
            <Typography gutterBottom variant="h5" component="p" sx={{ fontStyle: 'italic' }}>
              {subtitle}
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
              {text}
            </Typography>
          </Box>
        </Box>
      </ConditionalCardActionArea>
    </Card>
  );
}

export default TileImageTitleSubtitleTextListing;
