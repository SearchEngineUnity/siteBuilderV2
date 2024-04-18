// Title #2
import React from 'react';
import Card from '@mui/material/Card';
import { GatsbyImage } from 'gatsby-plugin-image';
import ConditionalCardActionArea from '../cardActionArea/ConditionalCardActionArea';

function TileImageCircle({ image, alt, link }) {
  const { width, height } = image;
  const minDimension = Math.min(width, height);

  return (
    <Card
      square
      elevation={link ? 8 : 0}
      sx={{ width: minDimension, height: minDimension, borderRadius: '50%' }}
    >
      <ConditionalCardActionArea link={link}>
        <GatsbyImage
          image={image}
          alt={alt || ''}
          style={{ width: minDimension, height: minDimension }}
        />
      </ConditionalCardActionArea>
    </Card>
  );
}

export default TileImageCircle;
