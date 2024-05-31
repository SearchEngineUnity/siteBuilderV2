import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Link } from 'gatsby';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Typography from '@mui/material/Typography';
import TileSgpListing from '../tiles/TileSgpListing';
import { mapTileSgpListingToProps } from '../../lib/mapToProps';

function ContributorGuidesSection({ spgTilesContent, name, numPages, currentpage, slug }) {
  return (
    <Grid
      container
      direction="column"
      spacing={{ xs: 2, sm: 3 }}
      sx={{ paddingTop: currentpage === 1 && { md: '60px', xs: '30px' } }}
    >
      <Grid xs={12}>
        <Typography variant="h2">
          Recent Guides Written by {name}
          {currentpage !== 1 && ` - Page ${currentpage} of ${numPages}`}
        </Typography>
      </Grid>
      <Grid container direction="row" spacing={{ xs: 2, sm: 3 }}>
        {spgTilesContent.map((tile) => (
          <Grid xs={12} sm={6} md={3} key={tile.node.id}>
            <TileSgpListing {...mapTileSgpListingToProps(tile)} />
          </Grid>
        ))}
      </Grid>
      {numPages > 1 && (
        <Grid xs={12}>
          <Pagination
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              '& .MuiPaginationItem-root': {
                fontSize: {
                  xs: '0.875rem',
                  sm: '0.875rem',
                  md: '1.0714285714285714rem',
                },
                borderRadius: {
                  xs: '13px',
                  sm: '16px',
                  md: '20px',
                },
                minWidth: {
                  xs: '26px',
                  sm: '32px',
                  md: '40px',
                },
                height: {
                  xs: '26px',
                  sm: '32px',
                  md: '40px',
                },
                padding: {
                  xs: '0 4px',
                  sm: '0 6px',
                  md: '0 10px',
                },
                margin: {
                  xs: '0 1px',
                  sm: '0 3px',
                  md: '0 3px',
                },
              },
              '& .MuiPaginationItem-icon': {
                fontSize: {
                  xs: '1.2857142857142856rem',
                  sm: '1.4285714285714284rem',
                  md: '1.5714285714285714rem',
                },
              },
            }}
            showFirstButton
            showLastButton
            page={currentpage}
            count={numPages}
            siblingCount={2}
            boundaryCount={0}
            renderItem={(item) => {
              const link = `/${slug}${item.page === 1 ? '' : `/${item.page}`}`;
              const isDisabled = item.disabled;
              return (
                <PaginationItem
                  sx={{ color: 'text.primary' }}
                  component={Link}
                  to={isDisabled ? '' : link}
                  slots={{ first: SkipPreviousIcon, last: SkipNextIcon }}
                  {...item}
                />
              );
            }}
          />
        </Grid>
      )}
    </Grid>
  );
}

export default ContributorGuidesSection;
