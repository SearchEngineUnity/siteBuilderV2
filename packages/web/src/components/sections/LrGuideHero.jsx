import loadable from '@loadable/component';
import React, { forwardRef } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { mapFluidImgBlockToProps } from '../../lib/mapToProps';
import { useDisclaimerText } from '../../hooks/useDisclaimerText';

// feature options
const ImgBlock = loadable(() => import('../blocks/FluidImgBlock'));
const Video = loadable(() => import('../portableText/insertable/Video'));

// optional texts
const Subtitle = loadable(() => import('../portableText/serializer/H1SubtitleSerializer'));
const Disclaimer = loadable(() => import('../portableText/serializer/DisclaimerSerializer'));

const featureComponentMapping = {
  image: ImgBlock,
  video: Video,
  featureless: null,
};

const propsMapping = (type, props) => {
  switch (type) {
    case 'image':
      return props.image
        ? {
            ...mapFluidImgBlockToProps(props.image),
            loading: 'eager',
          }
        : null;
    case 'video':
      return { ...props.video };
    default:
      return props;
  }
};

function ErrorImage() {
  return (
    <img
      src="https://cdn.sanity.io/images/ki8bqxrw/production/224a3d526d428e538ee88ef68df5c27b00f20e04-1280x720.png"
      loading="eager"
      alt=""
      width="100%"
    />
  );
}

const LrGuideHeroWithRef = forwardRef(function LrGuideHero(
  { featureType, h1, subtitle, date, feature, includeDisclaimer },
  ref,
) {
  const lastUpdatedDate = date ? new Date(date.replace(/-/g, '/')) : null;
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  // currently commented out as not in use
  // const heroAlignment = useSpGuideHero();
  const disclaimerText = useDisclaimerText();
  const Feature = featureComponentMapping[featureType];
  const values = propsMapping(featureType, feature);
  // const errorMessage = 'No matching Feature component';

  return (
    <Box
      ref={ref}
      sx={{
        bgcolor: 'primary.main',
        color: 'primary.contrastText',
        py: { xs: '16px', md: '40px' },
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
      id="hero"
      component="header"
    >
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={{ xs: 2, sm: 3 }}
        >
          <Grid md={6} xs={12}>
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
          </Grid>
          <Grid md={6} xs={12}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              {Feature && values ? <Feature {...values} /> : <ErrorImage />}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
});

export default LrGuideHeroWithRef;
