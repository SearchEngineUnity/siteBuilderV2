// Tile #6
import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
// import { getGatsbyImageData } from 'gatsby-source-sanity';
// import { GatsbyImage } from 'gatsby-plugin-image';
import sanityConfig from '../../lib/sanityConfig';
import ConditionalCardActionArea from '../cardActionArea/ConditionalCardActionArea';

function TileImageTitle({ image, alt, link, title }) {
  // const imageData = getGatsbyImageData(
  //   image,
  //   {
  //     layout: 'constrained',
  //   },
  //   sanityConfig,
  // );

  return (
    <Card elevation={link ? 8 : 0} sx={{ height: '100%' }}>
      <ConditionalCardActionArea link={link}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          tile image
          {/* <GatsbyImage
            objectFit="contain"
            image={imageData}
            alt={alt || ''}
            style={{ marginLeft: 'auto', marginRight: 'auto' }}
          /> */}
        </Box>
        <Box sx={{ py: 2 }}>
          <Box sx={{ fontSize: '20px', fontWeight: 400, textAlign: 'center' }}>
            <div>{title}</div>
          </Box>
        </Box>
      </ConditionalCardActionArea>
    </Card>
  );
}

export default TileImageTitle;
