import React from 'react';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TileSgpListing from '../tiles/TileSgpListing';
import { mapTileSgpListingToProps } from '../../lib/mapToProps';
import SubjectTagButton from '../buttons/SubjectTagButton';

function MoreInSection({ subjectListingPages, spgTilesContent, subjectName, relatedItems }) {
  const slug = subjectListingPages.filter((x) => x?.node?.subject?.name === subjectName)[0]?.node
    ?.slug?.current;

  let relatedItemsSlugArr;
  let listingTiles = spgTilesContent;

  if (relatedItems) {
    relatedItemsSlugArr = relatedItems.map((x) => x.slug.current);

    listingTiles = spgTilesContent.filter(
      (x) => !relatedItemsSlugArr.includes(x.node.slug.current),
    );
  }

  const subjectLink = slug === '/' ? '/' : `/${slug}`;
  return (
    <Container
      maxWidth="lg"
      id="more-in-subcategory"
      component="aside"
      sx={{ my: { md: '80px', xs: '40px' }, pt: { xs: '8px', sm: '12px' } }}
    >
      <Grid container direction="column" spacing={{ xs: 2, sm: 3 }}>
        <Grid size={12}>
          <Typography variant="h2">More in {subjectName}</Typography>
        </Grid>
        <Grid container direction="row" spacing={{ xs: 2, sm: 3 }}>
          {listingTiles.slice(0, 8).map((tile) => (
            <Grid
              key={tile.node.id}
              size={{
                xs: 12,
                sm: 6,
                md: 3,
              }}
            >
              <TileSgpListing {...mapTileSgpListingToProps(tile)} />
            </Grid>
          ))}
        </Grid>
        <Grid sx={{ display: 'flex', '& a': { flex: '0 1 200px' }, justifyContent: 'center' }}>
          <SubjectTagButton to={subjectLink} variant="outlined" fontSize="h5">
            View all
          </SubjectTagButton>
        </Grid>
      </Grid>
    </Container>
  );
}

export default MoreInSection;
