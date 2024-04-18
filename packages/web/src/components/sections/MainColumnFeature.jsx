import React from 'react';
import Box from '@mui/material/Box';
import ImgBlock from '../blocks/FluidImgBlock';
import Video from '../portableText/insertable/Video';
import Disclaimer from '../portableText/serializer/DisclaimerSerializer';
import { mapFluidImgBlockToProps } from '../../lib/mapToProps';
import { useDisclaimerText } from '../../hooks/useDisclaimerText';

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
