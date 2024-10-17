import React from 'react';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import StructuredSectionFooter from './StructuredSectionFooter';
import SectionOuterWrapper from './SectionOuterWrapper';
import SectionInnerWrapper from './SectionInnerWrapper';
import { determineColor } from '../../lib/helperFunctions';
import TileSgpListing from '../tiles/TileSgpListing';
import { mapTileSgpListingToProps } from '../../lib/mapToProps';
import SubjectTagButton from '../buttons/SubjectTagButton';

function LatestXSection({
  idTag,
  heading,
  footer,
  headerAlignment,
  footerAlignment,
  designSettings,
  subjectName,
  count,
  sgpsForAllLatestXSections,
  subjectListingPages,
}) {
  const headingColor = determineColor(designSettings?.heading?.color) || 'text.primary';
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
        <Grid container spacing={{ xs: 2, sm: 3 }} direction="column">
          {heading && (
            <Grid
              container
              direction="row"
              wrap="wrap"
              sx={{
                justifyContent: 'space-between',
                alignItems: 'flex-end',
              }}
            >
              <Grid component={heading ? 'header' : 'div'} sx={{ textAlign: headerAlignment }}>
                {heading && (
                  <Typography variant="h2" gutterBottom sx={{ color: headingColor }}>
                    {heading}
                  </Typography>
                )}
              </Grid>
              <Grid sx={{ display: { xs: 'none', sm: 'flex' } }}>
                <SubjectTagButton
                  to={subjectLink}
                  variant="outlined"
                  fontSize="h5"
                  sx={{ width: { sm: 'auto', md: '200px' }, padding: '4px 24px' }}
                >
                  View all
                </SubjectTagButton>
              </Grid>
            </Grid>
          )}
          <Grid container direction="row">
            {sectionTiles.map((tile) => (
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
          <Grid
            sx={{
              display: { xs: 'flex', sm: 'none' },
              '& a': { flex: '0 1 200px' },
              justifyContent: 'center',
            }}
            size={12}
          >
            <SubjectTagButton to={subjectLink} variant="outlined" fontSize="h5">
              View all
            </SubjectTagButton>
          </Grid>
          {footer && (
            <Grid size={12}>
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
