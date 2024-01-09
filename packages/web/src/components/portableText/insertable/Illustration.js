import React from 'react';
import Box from '@mui/material/Box';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage } from 'gatsby-plugin-image';
import sanityConfig from '../../../lib/sanityConfig';
import CaptionContent from '../serializer/CaptionSerializer';

function Illustration({ illustration, loading }) {
  const { hasFrame } = illustration;
  const loadingSetting = loading || 'lazy';
  const imageFluid = illustration?.asset;
  const customMaxHeight = illustration.maxHeight || 'auto';
  const customMaxWidth = illustration.maxWidth || 'auto';
  const imageWidth = imageFluid.metadata.dimensions.width;
  const imgAspectRatio = imageFluid.metadata.dimensions.aspectRatio;

  const calculatedWidthBasedOnCustomMaxWidth =
    customMaxWidth === 'auto' ? imageWidth : customMaxWidth;

  const calculatedWidthBasedOnCustomMaxHeight =
    customMaxHeight === 'auto' ? imageWidth : customMaxHeight * imgAspectRatio;

  const widthArray = [
    imageWidth,
    calculatedWidthBasedOnCustomMaxWidth,
    calculatedWidthBasedOnCustomMaxHeight,
  ];

  const minMaxWidth = Math.min(...widthArray);

  const fluidProps = getGatsbyImageData(imageFluid._id, { maxWidth: minMaxWidth }, sanityConfig);

  return (
    <Box sx={{ display: 'flex', justifyContent: illustration.align }}>
      <Box component="figure" sx={{ maxWidth: `${minMaxWidth}px`, m: 0 }}>
        <Box
          sx={[
            hasFrame && {
              border: '1px solid #abb8c3',
            },
          ]}
        >
          <GatsbyImage image={fluidProps} alt={illustration.alt || ''} loading={loadingSetting} />
        </Box>
        {illustration.caption && <CaptionContent blocks={illustration.caption} />}
      </Box>
    </Box>
  );
}

export default Illustration;
