import React from 'react';
import Box from '@mui/material/Box';
// import { getGatsbyImageData } from 'gatsby-source-sanity';
// import { GatsbyImage } from 'gatsby-plugin-image';
import sanityConfig from '../../lib/sanityConfig';
import CaptionContent from '../portableText/serializer/CaptionSerializer';

function FluidImgBlock({ id, image, alt, loading, maxHeight, maxWidth, caption }) {
  const loadingSetting = loading || 'lazy';
  // const imageData = getGatsbyImageData(image, {}, sanityConfig);
  const customMaxHeight = maxHeight || 'auto';
  const customMaxWidth = maxWidth || 'auto';
  const imageWidth = image.metadata.dimensions.width;
  const imgAspectRatio = image.metadata.dimensions.aspectRatio;

  const calculatedWidthBasedOnCustomMaxWidth =
    customMaxWidth === 'auto' ? imageWidth : customMaxWidth;

  const calculatedWidthBasedOnCustomMaxHeight =
    customMaxHeight === 'auto' ? imageWidth : customMaxHeight * imgAspectRatio;

  const widthArray = [
    imageWidth,
    calculatedWidthBasedOnCustomMaxWidth,
    calculatedWidthBasedOnCustomMaxHeight,
  ];

  const minMaxWidth = `${Math.min(...widthArray)}px`;

  return (
    <Box component="figure" id={id} sx={{ justifyContent: 'center', m: 0, display: 'flex' }}>
      <Box sx={{ maxWidth: minMaxWidth }}>
        {/* <GatsbyImage
          image={imageData}
          // eslint-disable-next-line no-unneeded-ternary
          alt={alt ? alt : ''}
          loading={loadingSetting}
          objectFit="contain"
          style={{
            display: 'block',
            maxHeight: `${customMaxHeight}px`,
            maxWidth: `${customMaxWidth}px`,
          }}
        /> */}
        this is fluid image block
        {caption && <CaptionContent blocks={caption} />}
      </Box>
    </Box>
  );
}

export default FluidImgBlock;
