import React from 'react';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import StructuredSectionFooter from './StructuredSectionFooter';
import StructuredSectionHeader from './StructuredSectionHeader';
import SectionOuterWrapper from './SectionOuterWrapper';
import SectionInnerWrapper from './SectionInnerWrapper';
import { determineColor } from '../../lib/helperFunctions';

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
  sgpsExcludesFeatured,
  subjectListingPages,
}) {
  const headingColor = determineColor(designSettings?.heading?.color) || 'inherit';
  const subheadingColor = determineColor(designSettings?.subheading?.color) || 'inherit';
  const subtitleColor = determineColor(designSettings?.subtitle?.color) || 'inherit';
  const footerColor = determineColor(designSettings?.footer?.color) || 'inherit';

  const sectionTiles = sgpsExcludesFeatured
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
          <div>this is for {subjectName}</div>
          <div>
            link to more:{' '}
            {
              subjectListingPages.filter((x) => x?.node?.subject?.name === subjectName)[0]?.node
                ?.slug?.current
            }
          </div>
          <div>there should be {count} tiles</div>
          <div>below are the tile infos title + slug + date</div>
          <Grid>
            {sectionTiles.map((tile, i) => (
              <div
                style={{ border: '1px solid red', padding: '4px', margin: '4px' }}
                key={tile.node.slug.current}
              >
                <div>{tile.node.slug.current}</div>
                <div>{tile.node.displayDate}</div>
                <div>
                  {tile.node.hero.feature === 'video' && tile.node.hero?.video?.url
                    ? 'spg has video'
                    : 'no video'}
                </div>
              </div>
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
