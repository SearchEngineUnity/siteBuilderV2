/* eslint-disable import/no-cycle */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Unstable_Grid2';
import CardActionArea from '@mui/material/CardActionArea';
// import { getGatsbyImageData } from 'gatsby-source-sanity';
// import { GatsbyImage } from 'gatsby-plugin-image';
import sanityConfig from '../../../../lib/sanityConfig';
import ProductInfoList from './ProductInfoList';
import ProductCardRating from './ProductCardRating';
import Caption from '../../serializer/CaptionSerializer';
import appStore from './assets/appStore.png';
import googlePlay from './assets/googlePlay.png';

function ProductCardTopApp({ rating, image, infoList, iosLink, googlePlayLink }) {
  // const imageData = getGatsbyImageData(
  //   image,
  //   {
  //     layout: 'constrained',
  //   },
  //   sanityConfig,
  // );

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
            this is PC image
            {/* <GatsbyImage
              image={imageData}
              alt={image?.alt}
              style={{ display: 'block', maxWidth: '100%', maxHeight: '240px' }}
              objectPosition="left"
              objectFit="contain"
            /> */}
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
          item
          xs={12}
          sm={6}
          sx={{
            display: {
              xs: 'none',
              sm: 'inline-flex',
              md: 'inline-flex',
              lg: 'inline-flex',
              xl: 'inline-flex',
            },
          }}
        >
          <Box sx={{ display: 'flex', mr: 3 }}>
            <Card
              elevation={2}
              sx={{
                borderRadis: '4px',
                height: '47.5px',
                width: '160px',
              }}
            >
              <CardActionArea
                href={iosLink}
                rel="nofollow"
                className="product-card__top-btn app-store-btn"
              >
                <img src={appStore} alt="App Store" loading="eager" width="100%" />
              </CardActionArea>
            </Card>
          </Box>

          <Box sx={{ display: 'flex', mr: 3 }}>
            <Card
              elevation={2}
              sx={{
                borderRadis: '4px',
                height: '47.5px',
                width: '160px',
              }}
            >
              <CardActionArea
                href={googlePlayLink}
                rel="nofollow"
                className="product-card__top-btn google-play-btn"
              >
                <img src={googlePlay} alt="Google Play Store" loading="eager" width="100%" />
              </CardActionArea>
            </Card>
          </Box>
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
        <Box sx={{ display: 'flex', mb: 2, justifyContent: 'center' }}>
          <Card
            elevation={2}
            sx={{
              borderRadis: '4px',
              height: '47.5px',
              width: '160px',
            }}
          >
            <CardActionArea
              href={iosLink}
              rel="nofollow"
              className="product-card__top-btn app-store-btn"
            >
              <img src={appStore} alt="App Store" loading="eager" width="100%" />
            </CardActionArea>
          </Card>
        </Box>
        <Box sx={{ display: 'flex', mb: 2, justifyContent: 'center' }}>
          <Card
            elevation={2}
            sx={{
              borderRadis: '4px',
              height: '47.5px',
              width: '160px',
            }}
          >
            <CardActionArea
              href={googlePlayLink}
              rel="nofollow"
              className="product-card__top-btn google-play-btn"
            >
              <img src={googlePlay} alt="Google Play Store" loading="eager" width="100%" />
            </CardActionArea>
          </Card>
        </Box>
      </Box>
      <Box sx={{ mt: { xs: 6, md: 2, lg: 2, xl: 2 } }}>
        <ProductInfoList infoList={infoList} />
      </Box>
    </Box>
  );
}

export default ProductCardTopApp;
