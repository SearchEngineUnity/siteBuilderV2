// import React from 'react';
// import Grid from '@mui/material/Unstable_Grid2';
// import StructuredSectionFooter from './StructuredSectionFooter';
// import StructuredSectionHeader from './StructuredSectionHeader';
// import SectionOuterWrapper from './SectionOuterWrapper';
// import SectionInnerWrapper from './SectionInnerWrapper';
// import { determineColor } from '../../lib/helperFunctions';
// import TileImageLeft from '../listingTile/TileSpgImageLeft';
// import Pagination from '../ListingPagination';

// function PaginatedListingSection({
//   idTag,
//   heading,
//   subheading,
//   subtitle,
//   footer,
//   layout,
//   headerAlignment,
//   footerAlignment,
//   designSettings,
//   currentpage,
//   numPages,
//   slug,
//   listingItems,
// }) {
//   // number of tiles desktop/tablet/tablet-mobile/mobile: '6/4/2/1' -> {lg: 2, md: 3, sm: 6, xs: 12}
//   const colCalculate = (value) => {
//     const valueArrStr = value.split('/');
//     const valueArrNum = valueArrStr.map((el) => parseInt(el, 10));
//     const colObj = {
//       lg: 12 / valueArrNum[0],
//       md: 12 / valueArrNum[1],
//       sm: 12 / valueArrNum[2],
//       xs: 12 / valueArrNum[3],
//     };
//     return colObj;
//   };

//   const col = colCalculate(layout);
//   const headingColor = determineColor(designSettings?.heading?.color) || 'inherit';
//   const subheadingColor = determineColor(designSettings?.subheading?.color) || 'inherit';
//   const subtitleColor = determineColor(designSettings?.subtitle?.color) || 'inherit';
//   const footerColor = determineColor(designSettings?.footer?.color) || 'inherit';
//   const paginationColor = designSettings?.foreground?.color;

//   return (
//     <SectionOuterWrapper idTag={idTag} designSettings={designSettings}>
//       <SectionInnerWrapper designSettings={designSettings}>
//         <StructuredSectionHeader
//           heading={heading}
//           subheading={subheading}
//           subtitle={subtitle}
//           headingColor={headingColor}
//           subheadingColor={subheadingColor}
//           subtitleColor={subtitleColor}
//           align={headerAlignment}
//         />
//         <Grid container spacing={6}>
//           {listingItems.map((item) => (
//             <Grid key={item._key} {...col}>
//               <TileImageLeft {...item} />
//             </Grid>
//           ))}
//         </Grid>
//         {numPages > 1 && (
//           <Pagination
//             currentpage={currentpage}
//             numPages={numPages}
//             slug={slug}
//             color={paginationColor}
//           />
//         )}
//         <StructuredSectionFooter
//           footer={footer}
//           footerColor={footerColor}
//           align={footerAlignment}
//         />
//       </SectionInnerWrapper>
//     </SectionOuterWrapper>
//   );
// }

// export default PaginatedListingSection;
