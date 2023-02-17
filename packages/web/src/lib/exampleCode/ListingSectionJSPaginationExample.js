// import React, { useState } from 'react';
// import { Grid, Box, Typography, Container, Button } from '@mui/material';
// import Pagination from '@mui/lab/Pagination';
// import Card1 from '../components/TileImageTitle1';
// import { useSpGuides } from '../hooks/useSpGuides';
// import { useSpGuideHero } from '../hooks/useSpGuideHero';
// // import { mapCardToProps } from '../lib/mapToProps';

// function GridSegment({ idTag, title, subtitle, cards }) {
//   const spGuides = useSpGuides();
//   const spGuideHero = useSpGuideHero();
//   const pageSize = 2;
//   const pageCount = Math.ceil(cards.length / pageSize);
//   const [currentPage, setCurrentPage] = useState(1);

//   const handleChange = (event, value) => {
//     setCurrentPage(value);
//   };

//   return (
//     <Box component="section" id={idTag} py={3}>
//       <Container maxWidth="lg">
//         {title && <Typography variant="h2">{title}</Typography>}
//         {subtitle && (
//           <Typography component="p" variant="body1">
//             {subtitle}
//           </Typography>
//         )}
//         <Grid container spacing={3}>
//           {cards.slice((currentPage - 1) * pageSize, currentPage * pageSize).map((card) => (
//             <>
//               <Grid item key={card._key} xs={12} md={6} lg={4}>
//                 <Card1 {...card} />
//               </Grid>
//             </>
//           ))}
//         </Grid>
//         <Box mt={3}>
//           <Pagination
//             count={pageCount}
//             page={currentPage}
//             variant="outlined"
//             shape="rounded"
//             onChange={handleChange}
//           />
//         </Box>
//       </Container>
//     </Box>
//   );
// }

// export default GridSegment;
