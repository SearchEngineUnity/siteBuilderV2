import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import StructuredSectionFooter from './StructuredSectionFooter';
import StructuredSectionHeader from './StructuredSectionHeader';
import SectionOuterWrapper from './SectionOuterWrapper';
import SectionInnerWrapper from './SectionInnerWrapper';
import TileSgpListing from '../tiles/TileSgpListing';
import { mapTileFeaturedSgpListingToProps } from '../../lib/mapToProps';
import { determineColor } from '../../lib/helperFunctions';

function CustomTilesSection({
  idTag,
  heading,
  subheading,
  subtitle,
  footer,
  headerAlignment,
  footerAlignment,
  designSettings,
  customTiles,
}) {
  const headingColor = determineColor(designSettings?.heading?.color) || 'text.primary';
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
            {customTiles.map((tile) => (
              <Grid xs={12} sm={6} md={3} key={tile._id}>
                <TileSgpListing {...mapTileFeaturedSgpListingToProps(tile)} />
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

export default CustomTilesSection;
