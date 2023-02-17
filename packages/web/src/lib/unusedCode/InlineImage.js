// import React from 'react';
// import { Box } from '@mui/material';
// import { getGatsbyImageData } from 'gatsby-source-sanity';
// import { GatsbyImage } from 'gatsby-plugin-image';
// import styled from 'styled-components';
// import sanityConfig from '../../../../sanityConfig';
// import { useWindowSize } from '../../../hooks/useWindowSize';

// const StyledGI = styled(GatsbyImage)`
//   /* Color the border and text with theme.main */
//   max-height: ${(props) => `${props.custommaxheight}px`};
// `;

// function InlineImage({ image, alt }) {
//   const imageFluid = image?.asset;
//   const fluidProps = getGatsbyImageData(imageFluid, {}, sanityConfig);
//   const windowSize = useWindowSize();
//   const windowHeight = windowSize.height;
//   const imageHeight = image?.asset?.metadata?.dimensions?.height;
//   const customHeight = image?.height ? (image?.height / 100) * windowHeight : undefined;
//   const maxHeight = customHeight && customHeight < imageHeight ? customHeight : imageHeight;

//   return (
//     <Box component="figure" justify="center">
//       <StyledGI
//         image={fluidProps}
//         alt={alt}
//         style={{ display: 'block' }}
//         objectFit="contain"
//         custommaxheight={maxHeight}
//       />
//     </Box>
//   );
// }

// export default InlineImage;
