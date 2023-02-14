import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage } from 'gatsby-plugin-image';
import { CardActionArea } from 'gatsby-theme-material-ui';
import sanityConfig from '../../lib/sanityConfig';

function TileImageRecSqr({ image, alt, url, title, text, date }) {
  const lastUpdatedDate = date ? new Date(date.replace(/-/g, '/')) : null;
  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  const imageData = getGatsbyImageData(
    image,
    {
      layout: 'fullWidth',
    },
    sanityConfig,
  );

  return (
    <Card elevation={8} square sx={{ height: '100%' }}>
      {/* the link probably cannot be spread in the same way as from regular tiles */}
      <CardActionArea to={`/${url}`}>
        <Grid container spacing={2}>
          <Grid md={4} sm={3} xs={12}>
            <GatsbyImage
              image={imageData}
              alt={alt || ''}
              style={{
                width: '100%',
                height: '100%',
              }}
              imgStyle={{
                objectFit: 'cover',
              }}
            />
          </Grid>
          <Grid md={8} sm={9} xs={12}>
            <CardContent sx={{ paddingRight: { xs: '16px', sm: '32px' } }}>
              <Box fontSize="1.6rem" fontWeight="800" mb={1}>
                {title}
              </Box>
              <Typography variant="body1" color="textSecondary" component="p" gutterBottom>
                <em>{lastUpdatedDate.toLocaleDateString('en-US', options)}</em>
              </Typography>
              <Typography variant="body1" component="p">
                {text}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  );
}

export default TileImageRecSqr;
