// This is code for a 16/9 image output for the main column image hero it is currently not in use
// import React from 'react';
// import Box from '@mui/material/Box';
// import { getGatsbyImageData } from 'gatsby-source-sanity';
// import { GatsbyImage } from 'gatsby-plugin-image';
// import sanityConfig from '../../lib/sanityConfig';
// import CaptionContent from '../portableText/serializer/CaptionSerializer';

// function MainColumnHeroImage({ illustration, loading }) {
//   const loadingSetting = loading || 'lazy';
//   const imageFluid = illustration?.asset;
//   const fluidProps = getGatsbyImageData(imageFluid._id, { layout: 'fullWidth' }, sanityConfig);

//   return (
//     <Box component="figure" sx={{ m: 0, aspectRatio: '16/9' }}>
//       <GatsbyImage
//         image={fluidProps}
//         alt={illustration.alt || ''}
//         loading={loadingSetting}
//         style={{ height: '100%' }}
//       />
//       {illustration.caption && <CaptionContent blocks={illustration.caption} />}
//     </Box>
//   );
// }

// export default MainColumnHeroImage;
