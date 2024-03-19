import React from 'react';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Link } from 'gatsby';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
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
                variant="outlined"
                shape="rounded"
                showFirstButton
                showLastButton
                page={currentpage}
                count={numPages}
                renderItem={(item) => (
                  <PaginationItem
                    component={Link}
                    to={`/${slug}${item.page === 1 ? '' : `/${item.page}`}`}
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
