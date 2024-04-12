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
import HeroTags from './HeroTags';
import PageBreadcrumbs from '../navs/breadcrumbs/PageBreadcrumbs';

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
  {
    featureType,
    h1,
    subtitle,
    date,
    author,
    feature,
    includeDisclaimer,
    topicTags,
    primarySubcategory,
    secondarySubcategory,
    subjectListingPages,
  },
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
        color: 'background.default',
        '& .pt-link': {
          color: 'background.default',
          textDecorationColor: 'currentcolor',
        },
        '& .caption-text': {
          color: 'background.default',
        },
        '& .caption-link': {
          color: 'background.default',
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
          {primarySubcategory && (
            <PageBreadcrumbs
              subject={primarySubcategory}
              subjectListingPages={subjectListingPages}
              isSGP
            />
          )}
          <Typography variant="h1" textAlign="center">
            {h1}
          </Typography>

          <Box sx={{ mx: 'auto', maxWidth: '940px', textAlign: 'center' }}>
            {subtitle && (
              <Box sx={{ mt: '18px' }}>
                <Subtitle blocks={subtitle} />
              </Box>
            )}
            <Box sx={{ mt: '18px' }}>
              <HeroTags
                topicTags={topicTags}
                primarySubcategory={primarySubcategory}
                secondarySubcategory={secondarySubcategory}
                subjectListingPages={subjectListingPages}
                color="background.default"
                borderColor="background.default"
              />
            </Box>
            <Typography variant="h5" component="p" sx={{ mt: '18px' }}>
              {author && (
                <Box
                  component="span"
                  sx={{
                    fontWeight: 'fontWeightBold',
                    '&:after': {
                      content: '" | "',
                      display: {
                        xs: 'none',
                        sm: 'inline',
                      },
                    },
                  }}
                >
                  By {author}
                </Box>
              )}
              {lastUpdatedDate && (
                <Box
                  component="span"
                  sx={{
                    display: { xs: 'block', sm: 'inline-block' },
                    fontWeight: 'fontWeightRegular',
                  }}
                >
                  Updated on {lastUpdatedDate.toLocaleDateString('en-US', options)}
                </Box>
              )}
            </Typography>
            {includeDisclaimer && disclaimerText && (
              <Box
                sx={{
                  mt: '18px',
                  color: '#D5D5D5',
                  '& .pt-link': {
                    color: '#D5D5D5',
                    textDecorationColor: 'currentcolor',
                  },
                }}
              >
                <Disclaimer blocks={disclaimerText} />
              </Box>
            )}
          </Box>
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
