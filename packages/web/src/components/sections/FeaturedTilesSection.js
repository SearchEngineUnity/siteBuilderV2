import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import StructuredSectionFooter from './StructuredSectionFooter';
import StructuredSectionHeader from './StructuredSectionHeader';
import SectionOuterWrapper from './SectionOuterWrapper';
import SectionInnerWrapper from './SectionInnerWrapper';
import TileFeaturedSgpListing from '../tiles/TileFeaturedSgpListing';
import { mapTileFeaturedSgpListingToProps } from '../../lib/mapToProps';
import { determineColor } from '../../lib/helperFunctions';

function FeaturedTilesSection({
  idTag,
  heading,
  subheading,
  subtitle,
  footer,
  headerAlignment,
  footerAlignment,
  designSettings,
  featuredTiles,
}) {
  const headingColor = determineColor(designSettings?.heading?.color) || 'text.secondary';
  const subheadingColor = determineColor(designSettings?.subheading?.color) || 'inherit';
  const subtitleColor = determineColor(designSettings?.subtitle?.color) || 'inherit';
  const footerColor = determineColor(designSettings?.footer?.color) || 'inherit';

  return (
    <SectionOuterWrapper idTag={idTag} designSettings={designSettings}>
      <SectionInnerWrapper designSettings={designSettings}>
        <Grid container spacing={{ xs: 2, sm: 3 }} direction="column">
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
          <Grid container direction="row">
            {featuredTiles.map((tile, i) => (
              <Grid xs={12} sm={i === 0 ? 12 : 6} md={4} key={tile._key}>
                <TileFeaturedSgpListing
                  {...mapTileFeaturedSgpListingToProps(tile)}
                  isFirst={i === 0}
                />
              </Grid>
            ))}
          </Grid>
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

export default FeaturedTilesSection;
