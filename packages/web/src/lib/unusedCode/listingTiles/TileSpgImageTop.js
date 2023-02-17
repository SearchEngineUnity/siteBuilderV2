// import React from 'react';
// import { Typography, Card, CardContent } from '@mui/material';
// import { makeStyles } from '@mui/material/styles';
// import { getGatsbyImageData } from 'gatsby-source-sanity';
// import { GatsbyImage } from 'gatsby-plugin-image';
// import { CardActionArea } from 'gatsby-theme-material-ui';
// import sanityConfig from '../../../sanityConfig';

// const useStyles = makeStyles({
//   card: {
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
//         <GatsbyImage image={imageData} alt={alt} />
//         <CardContent>
//           <Typography gutterBottom variant="h2">
//             {title}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
//             {lastUpdatedDate.toLocaleDateString('en-US', options)}
//           </Typography>
//           <Typography variant="body2" component="p">
//             {text}
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//     </Card>
//   );
// }

// export default TileImageRecSqr;
