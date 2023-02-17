// import React from 'react';
// import { Typography, Card, CardContent } from '@mui/material';
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
//     width: 400,
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
//         <div className={classes.details}>
//           <CardContent className={classes.content}>
//             <Typography gutterBottom variant="h2">
//               {title}
//             </Typography>
//             <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
//               {lastUpdatedDate.toLocaleDateString('en-US', options)}
//             </Typography>
//             <Typography variant="body2" component="p">
//               {text}
//             </Typography>
//           </CardContent>
//           <GatsbyImage image={imageData} alt={alt} className={classes.cover} />
//         </div>
//       </CardActionArea>
//     </Card>
//   );
// }

// export default TileImageRecSqr;
