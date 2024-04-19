import React from 'react';
import Box from '@mui/material/Box';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage } from 'gatsby-plugin-image';
import sanityConfig from '../../../lib/sanityConfig';
import CaptionContent from '../serializer/CaptionSerializer';

function Illustration({ illustration, loading }) {
  const { hasFrame } = illustration;
  const imageId = illustration?.asset?._ref || illustration?.asset?._id;
  const fluidProps = getGatsbyImageData(imageId, {}, sanityConfig);
  const loadingSetting = loading || 'lazy';
  const customMaxHeight = illustration.maxHeight || 'auto';
  const customMaxWidth = illustration.maxWidth || 'auto';
  const imageWidth = fluidProps.width;
  const imgAspectRatio = fluidProps.width / fluidProps.height;

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

  return (
    <Box sx={{ display: 'flex', justifyContent: illustration.align }}>
      <Box
        component="figure"
        sx={{ maxWidth: hasFrame ? `${minMaxWidth + 2}px` : `${minMaxWidth}px`, m: 0 }}
      >
        <Box
          sx={[
            hasFrame && {
              border: '1px solid #ABB8C3',
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
