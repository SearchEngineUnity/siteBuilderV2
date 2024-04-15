import React from 'react';
import Box from '@mui/material/Box';
import Illustration from '../portableText/insertable/Illustration';
import Video from '../portableText/insertable/Video';
import Disclaimer from '../portableText/serializer/DisclaimerSerializer';
import { useDisclaimerText } from '../../hooks/useDisclaimerText';

const featureComponentMapping = {
  image: Illustration,
  video: Video,
  featureless: null,
};

const propsMapping = (type, props) => {
  switch (type) {
    case 'image':
      return {
        illustration: {
          asset: props.image._rawAsset,
        },
        loading: 'eager',
      };
    case 'video':
      return { ...props.video };
    default:
      return props;
  }
};

function MainColumnFeature({ featureType, feature, includeDisclaimer }) {
  const Feature = featureComponentMapping[featureType];
  const values = propsMapping(featureType, feature);
  const disclaimerText = useDisclaimerText();

  return (
    <Box
      sx={{
        mb: '88px',
        bgcolor: 'transparent',
      }}
      component="section"
    >
      {Feature && (
        <Box sx={{ mb: '24px' }}>
          <Feature {...values} />
        </Box>
      )}
      {includeDisclaimer && disclaimerText && (
        <Box sx={{ mb: '24px', color: 'text.disabled' }}>
          <Disclaimer blocks={disclaimerText} />
        </Box>
      )}
    </Box>
  );
}

export default MainColumnFeature;
