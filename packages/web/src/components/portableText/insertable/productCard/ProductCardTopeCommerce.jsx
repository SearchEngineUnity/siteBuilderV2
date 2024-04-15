'use client';

/* eslint-disable import/no-cycle */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Modal from '@mui/material/Modal';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage } from 'gatsby-plugin-image';
import sanityConfig from '../../../../lib/sanityConfig';
import ProductInfoList from './ProductInfoList';
import ProductCardRating from './ProductCardRating';
import ConditionalButton from '../../../buttons/ConditionalButton';
import Caption from '../../serializer/CaptionSerializer';
import { mapMuiBtnToProps } from '../../../../lib/mapToProps';
import ProductCardTopOriginal from './ProductCardTopOriginal';

function ProductCardTopeCommerce(props) {
  const { name, headingLevel, rating, image, infoList, btnSet } = props;
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const imageData = getGatsbyImageData(
    image,
    {
      layout: 'constrained',
    },
    sanityConfig,
  );

  return (
    <>
      <ProductCardTopOriginal {...props} />
      <Box
        sx={{ m: 3, display: { xl: 'none', lg: 'none', md: 'block', sm: 'block', xs: 'block' } }}
      >
        <Grid container spacing={2} alignItems="center">
          <Grid xs={12} sm={4}>
            <Box component={Box} as="figure" sx={{ m: 0, display: { xs: 'none', sm: 'block' } }}>
              <ButtonBase
                type="button"
                onClick={handleOpen}
                focusVisibleClassName={{}}
                sx={{
                  border: 'none',
                  background: 'none',
                  height: 'auto',
                  width: '100%',
                  cursor: 'pointer',
                }}
              >
                <GatsbyImage
                  image={imageData}
                  alt={image?.alt}
                  style={{ display: 'block', maxWidth: '100%', maxHeight: '240px' }}
                  objectFit="contain"
                />
                <Box
                  sx={(theme) => ({
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    bgcolor: 'common.black',
                    opacity: 0,
                    width: '100%',
                    transition: theme.transitions.create('opacity'),
                    color: 'white',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    '&:hover': {
                      zIndex: 1,
                      opacity: 0.4,
                    },
                  })}
                >
                  <ZoomInIcon sx={{ fontSize: '120px' }} />
                </Box>
              </ButtonBase>

              {image.caption && (
                <Box
                  component={Caption}
                  as="figcaption"
                  sx={{
                    textAlign: 'center',
                    '& .pt-link': {
                      color: 'text.primary',
                      textDecorationColor: 'currentcolor',
                    },
                  }}
                >
                  <Caption blocks={image.caption} />
                </Box>
              )}
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    width: { xs: '80vw', md: '50vw' },
                    height: { xs: '80vh', md: '50vh' },
                    bgcolor: 'background.paper',
                    border: 'none',
                    boxShadow: 5,
                    p: 2,
                    justifyContent: 'center',
                  }}
                >
                  <GatsbyImage
                    image={imageData}
                    alt={image?.alt}
                    objectFit="contain"
                    style={{ display: 'block', maxWidth: '100%', height: 'auto' }}
                  />
                </Box>
              </Modal>
            </Box>
            <Box
              component={Box}
              as="figure"
              sx={{
                m: 0,
                display: { xs: 'block', sm: 'none', md: 'none', lg: 'none', xl: 'none' },
              }}
            >
              <GatsbyImage
                image={imageData}
                alt={image?.alt}
                style={{ display: 'block', maxWidth: '100%', maxHeight: '240px' }}
                objectFit="contain"
              />
              {image.caption && (
                <Box
                  component={Caption}
                  as="figcaption"
                  sx={{
                    textAlign: 'center',
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
          <Grid xs={12} sm={8}>
            <Typography component={headingLevel || 'p'} variant="h4">
              {name}
            </Typography>
            <ProductCardRating rating={rating} />
            <Box
              sx={{
                mt: 3,
                display: {
                  xs: 'none',
                  sm: 'inline-flex',
                  md: 'inline-flex',
                  lg: 'inline-flex',
                  xl: 'inline-flex',
                },
              }}
            >
              {btnSet &&
                btnSet.map((btn, index) => (
                  <Box sx={{ mr: 3 }} key={btn._key}>
                    <ConditionalButton
                      {...mapMuiBtnToProps(btn)}
                      className={`product-card__top-btn btn_position_${index}`}
                    />
                  </Box>
                ))}
            </Box>
            <Box
              sx={{
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
                btnSet.map((btn, index) => (
                  <Box sx={{ display: 'flex', mt: 3, justifyContent: 'center' }} key={btn._key}>
                    <ConditionalButton
                      {...mapMuiBtnToProps(btn)}
                      className={`product-card__top-btn btn_position_${index}`}
                    />
                  </Box>
                ))}
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ mt: { xs: 6, md: 3, lg: 3, xl: 3 } }}>
          <ProductInfoList infoList={infoList} />
        </Box>
      </Box>
    </>
  );
}

export default ProductCardTopeCommerce;
