// Tile #1
import React from 'react';
import Card from '@mui/material/Card';
import { GatsbyImage } from 'gatsby-plugin-image';
import ConditionalCardActionArea from '../cardActionArea/ConditionalCardActionArea';

function TileImageRecSqr({ image, alt, link }) {
  return (
    <Card square elevation={link ? 8 : 0}>
      <ConditionalCardActionArea link={link}>
        <GatsbyImage image={image} alt={alt || ''} style={{ width: '100%', height: '100%' }} />
      </ConditionalCardActionArea>
    </Card>
  );
}

export default TileImageRecSqr;
