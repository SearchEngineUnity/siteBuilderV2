import React from 'react';
import Box from '@mui/material/Box';
import { GatsbyImage } from 'gatsby-plugin-image';
import CaptionContent from '../portableText/serializer/CaptionSerializer';

function FluidImgBlock({ id, image, alt, loading, maxHeight, maxWidth, caption, align }) {
  const loadingSetting = loading || 'lazy';
  const customMaxHeight = maxHeight || 'auto';
  const customMaxWidth = maxWidth || 'auto';
  const imageWidth = image.width;
  const imgAspectRatio = image.width / image.height;

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
    <Box
      component="figure"
      id={id}
      sx={{ justifyContent: align || 'center', m: 0, display: 'flex' }}
    >
      <Box sx={{ maxWidth: minMaxWidth }}>
        <GatsbyImage
          image={image}
          // eslint-disable-next-line no-unneeded-ternary
          alt={alt ? alt : ''}
          loading={loadingSetting}
          objectFit="contain"
          style={{
            display: 'block',
          }}
        />
        {caption && <CaptionContent blocks={caption} />}
      </Box>
    </Box>
  );
}

export default FluidImgBlock;
