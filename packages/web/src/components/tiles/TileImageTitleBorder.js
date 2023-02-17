// Tile 3

import React from 'react';
import { Box, Card } from '@mui/material';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage } from 'gatsby-plugin-image';
import sanityConfig from '../../lib/sanityConfig';
import ConditionalCardActionArea from '../cardActionArea/ConditionalCardActionArea';

function TileImageRecSqr({ image, alt, link, title }) {
  const imageData = getGatsbyImageData(
    image,
    {
      layout: 'fullWidth',
    },
    sanityConfig,
  );

  const linkType = link ? link._type : 'noLink';

  return (
    <Card
      elevation={link ? 8 : 0}
      sx={{ border: '1px solid #acb4b8', borderRadius: '0.25rem', height: '100%' }}
    >
      <ConditionalCardActionArea condition={linkType} link={link}>
        <Box pt={2}>
          <GatsbyImage
            image={imageData}
            alt={alt || ''}
            style={{
              width: '50%',
              height: 'auto',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          />
        </Box>
        <Box py={2} px={1}>
          <Box fontSize="20px" fontWeight="700" textAlign="center">
            <div>{title}</div>
          </Box>
        </Box>
      </ConditionalCardActionArea>
    </Card>
  );
}

export default TileImageRecSqr;
