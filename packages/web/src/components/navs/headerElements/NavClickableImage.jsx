import React from 'react';
import Card from '@mui/material/Card';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage } from 'gatsby-plugin-image';
import sanityConfig from '../../../lib/sanityConfig';
import ConditionalCardActionArea from '../../cardActionArea/ConditionalCardActionArea';

function NavClickableImage({ image, link }) {
  const imageFluid = image?.asset;
  const imageData = getGatsbyImageData(imageFluid, { layout: 'constrained' }, sanityConfig);

  return (
    <Card elevation={0}>
      <ConditionalCardActionArea link={link[0]}>
        <GatsbyImage image={imageData} loading="eager" alt={image.alt || ''} />
      </ConditionalCardActionArea>
    </Card>
  );
}

export default NavClickableImage;
