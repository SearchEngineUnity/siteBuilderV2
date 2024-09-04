import loadable from '@loadable/component';
import React from 'react';
import Box from '@mui/material/Box';
import { mapFluidImgBlockToProps } from '../../lib/mapToProps';
import { useDisclaimerText } from '../../hooks/useDisclaimerText';

// feature options
const ImgBlock = loadable(() => import('../blocks/FluidImgBlock'));
const Video = loadable(() => import('../portableText/insertable/Video'));

// optional texts
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
            align: 'start',
          }
        : null;
    case 'video':
      return { ...props.video };
    default:
      return props;
  }
};

function MainColumnFeature({ featureType, feature, includeDisclaimer }) {
  let Feature = null;
  let values;
  const disclaimerText = useDisclaimerText();

  if (
    (feature.image && featureType === 'image') ||
    (feature.video && featureType === 'video') ||
    featureType === 'featureless'
  ) {
    Feature = featureComponentMapping[featureType];
    values = propsMapping(featureType, feature);
  }

  return includeDisclaimer || Feature ? (
    <Box
      sx={{
        mb: { xs: '24px', sm: '32px', md: '48px' },
        bgcolor: 'transparent',
      }}
      component="div"
    >
      {Feature && (
        <Box sx={{ mb: '24px' }}>
          <Feature {...values} />
        </Box>
      )}
      {includeDisclaimer && disclaimerText && (
        <Box sx={{ color: 'text.disabled' }}>
          <Disclaimer blocks={disclaimerText} />
        </Box>
      )}
    </Box>
  ) : null;
}

export default MainColumnFeature;
