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

  return (
    <Box
      sx={{
        mb: '88px',
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
        <Box sx={{ mb: '24px', color: 'text.disabled' }}>
          <Disclaimer blocks={disclaimerText} />
        </Box>
      )}
    </Box>
  );
}

export default MainColumnFeature;
