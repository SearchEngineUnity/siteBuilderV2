import React, { forwardRef } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ImgBlock from '../blocks/FluidImgBlock';
import Video from '../portableText/insertable/Video';
import ProductGrid from '../portableText/insertable/productGrid/ProductGrid';
import Subtitle from '../portableText/serializer/H1SubtitleSerializer';
import Disclaimer from '../portableText/serializer/DisclaimerSerializer';
import {
  mapFluidImgBlockToProps,
  mapProductGridToProps,
  mapVideoToProps,
} from '../../lib/mapToProps';
import { useDisclaimerText } from '../../hooks/useDisclaimerText';

const featureComponentMapping = {
  image: ImgBlock,
  video: Video,
  productGrid: ProductGrid,
  featureless: null,
};

const propsMapping = (type, props) => {
  switch (type) {
    case 'image':
      return {
        ...mapFluidImgBlockToProps(props.image),
        loading: 'eager',
      };
    case 'video':
      return { ...mapVideoToProps(props.video), stackHero: 'true' };
    case 'productGrid':
      return { ...mapProductGridToProps(props.productGrid) };
    default:
      return props;
  }
};

const StackGuideHeroWithRef = forwardRef(function StackGuideHero(
  { featureType, h1, subtitle, date, feature, includeDisclaimer },
  ref,
) {
  const lastUpdatedDate = date ? new Date(date.replace(/-/g, '/')) : null;
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const disclaimerText = useDisclaimerText();

  const Feature = featureComponentMapping[featureType];

  const values = propsMapping(featureType, feature);

  const errorMessage = 'No matching Feature component';

  return (
    <Box
      ref={ref}
      id="hero"
      component="header"
      sx={{
        color: 'primary.contrastText',
        '& .pt-link': {
          color: 'primary.contrastText',
          textDecorationColor: 'currentcolor',
        },
        '& .caption-text': {
          color: 'primary.contrastText',
        },
        '& .caption-link': {
          color: 'primary.contrastText',
          textDecorationColor: 'currentcolor',
        },
      }}
    >
      <Box
        sx={{
          bgcolor: 'primary.main',
          py: { xs: '16px', md: '40px' },
        }}
      >
        <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
          <Typography variant="h1">{h1}</Typography>
          {subtitle && <Subtitle blocks={subtitle} />}
          {lastUpdatedDate && (
            <Typography variant="body1" component="p" mt={1}>
              Last updated: {lastUpdatedDate.toLocaleDateString('en-US', options)}
            </Typography>
          )}
          {includeDisclaimer && disclaimerText && (
            <Box mt={6}>
              <Disclaimer blocks={disclaimerText} />
            </Box>
          )}
        </Container>
      </Box>
      <Box
        sx={(theme) => ({
          py: { xs: '16px', md: '40px' },
          background: {
            xs: `linear-gradient(${theme.palette.primary.main} 0%, ${theme.palette.primary.main} ${
              featureType === 'productGrid' ? '10%' : '30%'
            }, ${theme.palette.background.default} ${
              featureType === 'productGrid' ? '10%' : '30%'
            }, ${theme.palette.background.default} 100%)`,
            lg: `linear-gradient(${theme.palette.primary.main} 0%, ${theme.palette.primary.main} 30%, ${theme.palette.background.default} 30%, ${theme.palette.background.default} 100%)`,
          },
          color: 'text.primary',
          '& .caption-text': {
            color: 'text.primary',
          },
          '& .caption-link': {
            color: 'text.primary',
            textDecorationColor: 'inherit',
          },
        })}
      >
        <Container maxWidth="lg">{Feature ? <Feature {...values} /> : errorMessage}</Container>
      </Box>
    </Box>
  );
});

export default StackGuideHeroWithRef;
