import React from 'react';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import StructuredSectionFooter from './StructuredSectionFooter';
import StructuredSectionHeader from './StructuredSectionHeader';
import SectionOuterWrapper from './SectionOuterWrapper';
import SectionInnerWrapper from './SectionInnerWrapper';
import { determineColor } from '../../lib/helperFunctions';
import TileSgpListing from '../tiles/TileSgpListing';
import { mapTileSgpListingToProps } from '../../lib/mapToProps';
import SubjectTagButton from '../buttons/SubjectTagButton';

function LatestXSection({
  idTag,
  heading,
  subheading,
  subtitle,
  footer,
  headerAlignment,
  footerAlignment,
  designSettings,
  subjectName,
  count,
  sgpsForAllLatestXSections,
  subjectListingPages,
}) {
  const headingColor = determineColor(designSettings?.heading?.color) || 'inherit';
  const subheadingColor = determineColor(designSettings?.subheading?.color) || 'inherit';
  const subtitleColor = determineColor(designSettings?.subtitle?.color) || 'inherit';
  const footerColor = determineColor(designSettings?.footer?.color) || 'inherit';

  const sectionTiles = sgpsForAllLatestXSections
    .filter((sgp) => {
      if (
        sgp.node.primarySubcategory?.name === subjectName ||
        sgp.node.primarySubcategory?.category?.name === subjectName ||
        sgp.node.topicTags.map((tag) => tag.name).includes(subjectName)
      ) {
        return true;
      }
      return false;
    })
    .slice(0, count);

  const slug = subjectListingPages.filter((x) => x?.node?.subject?.name === subjectName)[0]?.node
    ?.slug?.current;

  const subjectLink = slug === '/' ? '/' : `/${slug}`;

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
          <Grid sx={{ alignSelf: 'flex-end' }}>
            <SubjectTagButton to={subjectLink} variant="outlined" fontSize="h5">
              View all
            </SubjectTagButton>
          </Grid>
          <Grid container direction="row" spacing={3}>
            {sectionTiles.map((tile) => (
              <Grid xs={12} sm={6} md={3} key={tile._key}>
                <TileSgpListing {...mapTileSgpListingToProps(tile)} />
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

export default LatestXSection;
