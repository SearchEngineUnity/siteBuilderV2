// Tile 4

import React from 'react';
import { Typography, Card, CardContent } from '@mui/material';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage } from 'gatsby-plugin-image';
import sanityConfig from '../../lib/sanityConfig';
import ConditionalCardActionArea from '../cardActionArea/ConditionalCardActionArea';

function TileImageRecSqr({ image, alt, link, title, text }) {
  const imageData = getGatsbyImageData(
    image,
    {
      layout: 'fullWidth',
    },
    sanityConfig,
  );

  const linkType = link ? link._type : 'noLink';

  return (
    <Card elevation={link ? 8 : 0} square sx={{ border: '1px solid #acb4b8', height: '100%' }}>
      <ConditionalCardActionArea condition={linkType} link={link}>
        <GatsbyImage image={imageData} alt={alt || ''} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="div">
            {text}
          </Typography>
        </CardContent>
      </ConditionalCardActionArea>
    </Card>
  );
}

export default TileImageRecSqr;
