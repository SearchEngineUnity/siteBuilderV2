/* eslint-disable import/no-cycle */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage } from 'gatsby-plugin-image';
import sanityConfig from '../../../../lib/sanityConfig';
import ProductInfoList from './ProductInfoList';
import ProductCardRating from './ProductCardRating';
import ConditionalButton from '../../../buttons/ConditionalButton';
import Caption from '../../serializer/CaptionSerializer';
import { mapMuiBtnToProps } from '../../../../lib/mapToProps';

function ProductCardTopSite({ rating, image, infoList, btnSet }) {
  const imageId = image?.asset?._ref || image?.asset?._id;

  const imageData = getGatsbyImageData(
    imageId,
    {
      layout: 'constrained',
    },
    sanityConfig,
  );

  return (
    <Box sx={{ m: 3 }}>
      <Grid container spacing={2} sx={{ alignItems: 'center' }}>
        <Grid xs={12} sm={6}>
          <Box
            component={Box}
            as="figure"
            sx={{
              m: 0,
              flexDirection: 'column',
              display: { xs: 'flex', sm: 'block', alignItems: 'center' },
            }}
          >
            <GatsbyImage
              image={imageData}
              alt={image?.alt}
              style={{ display: 'block', maxWidth: '100%', maxHeight: '240px' }}
              objectPosition="left"
              objectFit="contain"
            />
            {image.caption && (
              <Box
                component={Caption}
                as="figcaption"
                sx={{
                  '& .pt-link': {
                    color: 'text.primary',
                    textDecorationColor: 'currentcolor',
                  },
                }}
              >
                <Caption blocks={image.caption} />
              </Box>
            )}
          </Box>
        </Grid>
        <Grid
          xs={12}
          sm={6}
          sx={{
            display: {
              xs: 'none',
              sm: 'block',
              md: 'block',
              lg: 'block',
              xl: 'block',
            },
          }}
        >
          {btnSet &&
            btnSet.map((btn) => (
              <Box key={btn._key}>
                <ConditionalButton {...mapMuiBtnToProps(btn)} className="product-card__top-btn" />
              </Box>
            ))}
        </Grid>
      </Grid>
      <Box sx={{ mt: 1, display: { xs: 'flex', sm: 'block', justifyContent: 'center' } }}>
        <ProductCardRating rating={rating} />
      </Box>
      <Box
        sx={{
          mt: 3,
          display: {
            xs: 'block',
            sm: 'none',
            md: 'none',
            lg: 'none',
            xl: 'none',
          },
        }}
      >
        {btnSet &&
          btnSet.map((btn) => (
            <Box sx={{ display: 'flex', mt: 1, justifyContent: 'center' }} key={btn._key}>
              <ConditionalButton {...mapMuiBtnToProps(btn)} className="product-card__top-btn" />
            </Box>
          ))}
      </Box>
      <Box sx={{ mt: { xs: 6, md: 2, lg: 2, xl: 2 } }}>
        <ProductInfoList infoList={infoList} />
      </Box>
    </Box>
  );
}

export default ProductCardTopSite;
