// import React from 'react';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import TextBlock from '../portableText/serializer/FullIndentSerializer';

// function StepsBlock({ steps }) {
//   return (
//     <Box sx={{ containerType: 'inline-size' }}>
//       {/* tablet-mobile and up */}
//       <Box
//         component="ol"
//         sx={{
//           listStyle: 'none',
//           padding: 0,
//           margin: 0,
//           display: 'none',
//           '@container (min-width: 600px)': {
//             display: 'block',
//           },
//         }}
//       >
//         {steps.map((step) => (
//           <Typography
//             key={step._key}
//             component="li"
//             sx={{
//               display: 'flex',
//               gap: '1.875rem',
//             }}
//           >
//             <Box
//               sx={{
//                 backgroundImage: (theme) =>
//                   `linear-gradient(${theme.palette.primary.main}, ${theme.palette.primary.main})`,
//                 backgroundSize: '3px 100%',
//                 backgroundRepeat: 'no-repeat',
//                 backgroundPosition: 'center center',
//                 '&:before': {
//                   counterIncrement: 'list-item',
//                   content: 'counter(list-item)',
//                   fontSize: '2.3125rem',
//                   fontWeight: 900,
//                   width: '72px',
//                   height: '72px',
//                   backgroundColor: 'primary.main',
//                   flex: '0 0 auto',
//                   borderRadius: '50%',
//                   color: 'common.white',
//                   display: 'flex',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                 },
//               }}
//             />
//             <Box
//               sx={{
//                 padding: '24px 0',
//               }}
//             >
//               <Typography variant="h3" gutterBottom>
//                 {step.title}
//               </Typography>
//               <TextBlock blocks={step.text} />
//             </Box>
//           </Typography>
//         ))}
//       </Box>
//       {/* mobile */}
//       <Box
//         component="ol"
//         sx={{
//           listStyle: 'none',
//           padding: 0,
//           margin: 0,
//           display: 'none',
//           '@container (max-width: 600px)': {
//             display: 'block',
//           },
//         }}
//       >
//         {steps.map((step) => (
//           <Typography
//             key={step._key}
//             component="li"
//             sx={{
//               display: 'flex',
//               gap: '1.875rem',
//               padding: '24px 0',
//               '&:first-of-type': {
//                 paddingTop: '0',
//               },
//               '&:last-of-type': {
//                 paddingBottom: '0',
//               },
//             }}
//           >
//             <Box>
//               <Box
//                 sx={{
//                   display: 'flex',
//                   gap: '8px',
//                   paddingBottom: '1rem',
//                 }}
//               >
//                 <Box
//                   component="span"
//                   sx={{
//                     '&:before': {
//                       counterIncrement: 'list-item',
//                       content: 'counter(list-item)',
//                       fontSize: '1.25rem',
//                       fontWeight: 900,
//                       width: '35px',
//                       height: '35px',
//                       backgroundColor: 'primary.main',
//                       borderRadius: '50%',
//                       color: 'common.white',
//                       display: 'flex',
//                       justifyContent: 'center',
//                       alignItems: 'center',
//                     },
//                   }}
//                 />
//                 <Typography variant="h3" gutterBottom sx={{ paddingTop: '3px' }}>
//                   {step.title}
//                 </Typography>
//               </Box>
//               <TextBlock blocks={step.text} />
//             </Box>
//           </Typography>
//         ))}
//       </Box>
//     </Box>
//   );
// }
// export default StepsBlock;
