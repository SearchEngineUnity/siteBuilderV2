// tile 2

import React from 'react';
import { Card } from '@mui/material';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage } from 'gatsby-plugin-image';
import sanityConfig from '../../lib/sanityConfig';
import ConditionalCardActionArea from '../cardActionArea/ConditionalCardActionArea';

function TileImageCircle({ image, alt, link }) {
  const imageData = getGatsbyImageData(
    image,
    {
      layout: 'fullWidth',
    },
    sanityConfig,
  );

  const linkType = link ? link._type : 'noLink';

  return (
    <Card square elevation={link ? 8 : 0} sx={{ borderRadius: '10000px' }}>
      <ConditionalCardActionArea condition={linkType} link={link}>
        <GatsbyImage image={imageData} alt={alt || ''} />
      </ConditionalCardActionArea>
    </Card>
  );
}

export default TileImageCircle;
