import React from 'react';
import Box from '@mui/material/Box';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage } from 'gatsby-plugin-image';
import sanityConfig from '../../../lib/sanityConfig';

function NavBrand({ url, brandGroup, alt }) {
  return (
    <>
      {brandGroup.map((group) => {
        const { type, brand, _key, maxHeight, maxWidth } = group;

        const image = brand.logo._rawAsset;

        const imageData = getGatsbyImageData(image, {}, sanityConfig);
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

        switch (type) {
          case 'desktop':
            return (
              <Box
                sx={{
                  display: { xs: 'none', lg: 'flex', xl: 'flex' },
                  justifyContent: 'flex-start',
                }}
                key={_key}
                role="none"
              >
                <Box component="a" href={url} role="menuitem" sx={{ maxWidth: minMaxWidth }}>
                  <GatsbyImage
                    image={imageData}
                    // eslint-disable-next-line no-unneeded-ternary
                    alt={alt ? alt : ''}
                    loading="eager"
                    objectFit="contain"
                    style={{
                      display: 'block',
                      maxHeight: customMaxHeight,
                      maxWidth: customMaxWidth,
                    }}
                  />
                </Box>
              </Box>
            );
          case 'tablet':
            return (
              <Box
                sx={{
                  display: { xs: 'none', sm: 'flex', md: 'flex', lg: 'none', xl: 'none' },
                  justifyContent: { sm: 'center', md: 'flex-start' },
                }}
                key={_key}
                role="none"
              >
                <Box component="a" href={url} role="menuitem" sx={{ maxWidth: minMaxWidth }}>
                  <GatsbyImage
                    image={imageData}
                    // eslint-disable-next-line no-unneeded-ternary
                    alt={alt ? alt : ''}
                    loading="eager"
                    objectFit="contain"
                    style={{
                      display: 'block',
                      maxHeight: customMaxHeight,
                      maxWidth: customMaxWidth,
                    }}
                  />
                </Box>
              </Box>
            );
          case 'mobile':
            return (
              <Box
                sx={{
                  display: { xs: 'flex', sm: 'none', md: 'none', lg: 'none', xl: 'none' },
                  justifyContent: 'center',
                }}
                key={_key}
                role="none"
              >
                <Box component="a" href={url} role="menuitem" sx={{ maxWidth: minMaxWidth }}>
                  <GatsbyImage
                    image={imageData}
                    // eslint-disable-next-line no-unneeded-ternary
                    alt={alt ? alt : ''}
                    loading="eager"
                    objectFit="contain"
                    style={{
                      display: 'block',
                      maxHeight: customMaxHeight,
                      maxWidth: customMaxWidth,
                    }}
                  />
                </Box>
              </Box>
            );

          default:
            return <div>under construction</div>;
        }
      })}
    </>
  );
}

export default NavBrand;
