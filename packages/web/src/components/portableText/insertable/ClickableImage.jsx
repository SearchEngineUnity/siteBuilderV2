import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage } from 'gatsby-plugin-image';
import sanityConfig from '../../../lib/sanityConfig';
import ConditionalCardActionArea from '../../cardActionArea/ConditionalCardActionArea';

function ClickableImage({ image, alignment, link, borderRadius }) {
  const imageFluid = image?.asset;
  const imageData = getGatsbyImageData(imageFluid, { layout: 'constrained' }, sanityConfig);
  const height = image?.asset?.height;
  const width = image?.asset?.width;

  return (
    <Box sx={{ display: 'flex', justifyContent: alignment }}>
      <Card elevation={2} sx={{ borderRadius, maxHeight: `${height}px`, maxWidth: `${width}px` }}>
        <ConditionalCardActionArea link={link[0]}>
          <GatsbyImage image={imageData} alt={image.alt || ''} />
        </ConditionalCardActionArea>
      </Card>
    </Box>
  );
}

export default ClickableImage;
