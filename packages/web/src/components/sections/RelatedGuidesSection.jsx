import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TileSgpListing from '../tiles/TileSgpListing';
import { mapTileFeaturedSgpListingToProps } from '../../lib/mapToProps';

function RelatedGuidesSection({ heading, relatedItems }) {
  return (
    <Container
      maxWidth="lg"
      id="more-in-subcategory"
      component="aside"
      sx={{ my: { md: '80px', xs: '40px' } }}
    >
      <Stack spacing={{ xs: 2, sm: 3 }} useFlexGap>
        <Typography variant="h2">{heading}</Typography>
        <Grid container direction="row" spacing={{ xs: 2, sm: 3 }}>
          {relatedItems.map((tile) => (
            <Grid xs={12} sm={6} md={3} key={tile._id}>
              <TileSgpListing {...mapTileFeaturedSgpListingToProps(tile)} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  );
}

export default RelatedGuidesSection;
