import React from 'react';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Link } from 'gatsby';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import StructuredSectionFooter from './StructuredSectionFooter';
import StructuredSectionHeader from './StructuredSectionHeader';
import SectionOuterWrapper from './SectionOuterWrapper';
import SectionInnerWrapper from './SectionInnerWrapper';
import { determineColor } from '../../lib/helperFunctions';

function LatestWithPaginationSection({
  idTag,
  heading,
  subheading,
  subtitle,
  footer,
  headerAlignment,
  footerAlignment,
  designSettings,
  spgTilesContent,
  numPages,
  currentpage,
  slug,
}) {
  const headingColor = determineColor(designSettings?.heading?.color) || 'inherit';
  const subheadingColor = determineColor(designSettings?.subheading?.color) || 'inherit';
  const subtitleColor = determineColor(designSettings?.subtitle?.color) || 'inherit';
  const footerColor = determineColor(designSettings?.footer?.color) || 'inherit';

  return (
    <SectionOuterWrapper idTag={idTag} designSettings={designSettings}>
      <SectionInnerWrapper designSettings={designSettings}>
        <Grid container spacing={6} direction="column">
          {(heading || subheading || subtitle) && (
            <Grid xs={12}>
              <StructuredSectionHeader
                heading={heading}
                subheading={subheading}
                subtitle={subtitle}
                headingColor={headingColor}
                subheadingColor={subheadingColor}
                subtitleColor={subtitleColor}
                align={headerAlignment}
              />
            </Grid>
          )}
          <Grid container spacing={6}>
            {spgTilesContent.map((tile) => (
              <Grid key={tile.node.slug.current}>
                <div>{tile.node.slug.current}</div>
                <div>{tile.node.displayDate}</div>
                <div>
                  {tile.node.hero.feature === 'video' && tile.node.hero?.video?.url
                    ? 'spg has video'
                    : 'no video'}
                </div>
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
                color="primary"
                showFirstButton
                showLastButton
                page={currentpage}
                count={numPages}
                siblingCount={2}
                boundaryCount={0}
                renderItem={(item) => (
                  <PaginationItem
                    sx={{}}
                    component={Link}
                    to={`/${slug}${item.page === 1 ? '' : `/${item.page}`}`}
                    slots={{ first: SkipPreviousIcon, last: SkipNextIcon }}
                    {...item}
                  />
                )}
              />
            </Grid>
          )}
          {footer && (
            <Grid xs={12}>
              <StructuredSectionFooter
                footer={footer}
                footerColor={footerColor}
                align={footerAlignment}
              />
            </Grid>
          )}
        </Grid>
      </SectionInnerWrapper>
    </SectionOuterWrapper>
  );
}

export default LatestWithPaginationSection;
