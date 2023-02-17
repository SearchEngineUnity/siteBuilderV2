// import React from 'react';
// import { Typography, Card, CardContent, Grid } from '@mui/material';
// import { makeStyles } from '@mui/material/styles';
// import { getGatsbyImageData } from 'gatsby-source-sanity';
// import { GatsbyImage } from 'gatsby-plugin-image';
// import { CardActionArea } from 'gatsby-theme-material-ui';
// import sanityConfig from '../../../../sanityConfig';

// const useStyles = makeStyles({
//   root: {
//     display: 'flex',
//   },
//   card: {
//     height: '100%',
//   },
//   details: {
//     display: 'flex',
//     flexDirection: 'row',
//   },
//   content: {
//     flex: '1',
//   },
//   cover: {
//     width: '100%',
//     height: '100%',
//   },
// });

// function TileImageRecSqr({ image, alt, url, title, text, date }) {
//   const classes = useStyles();
//   const lastUpdatedDate = date ? new Date(date.replace(/-/g, '/')) : null;
//   const options = { year: 'numeric', month: 'long', day: 'numeric' };

//   const imageData = getGatsbyImageData(
//     image,
//     {
//       layout: 'fullWidth',
//     },
//     sanityConfig,
//   );

//   return (
//     <Card elevation={8} classes={{ root: classes.card }} square>
//       {/* the link probably cannot be spread in the same way as from regular tiles */}
//       <CardActionArea to={`/${url}`}>
//         <Grid container>
//           <Grid item xs={4}>
//             <CardContent className={classes.content}>
//               <Typography gutterBottom variant="h2">
//                 {title}
//               </Typography>
//               <Typography variant="body2" color="textSecondary" component="p">
//                 {lastUpdatedDate.toLocaleDateString('en-US', options)}
//               </Typography>
//             </CardContent>
//           </Grid>
//           <Grid item xs={4}>
//             <CardContent className={classes.content}>
//               <Typography variant="body2" component="p">
//                 {text}
//               </Typography>
//             </CardContent>
//           </Grid>
//           <Grid item xs={4}>
//             <GatsbyImage image={imageData} alt={alt} className={classes.cover} />
//           </Grid>
//         </Grid>
//       </CardActionArea>
//     </Card>
//   );
// }

// export default TileImageRecSqr;
