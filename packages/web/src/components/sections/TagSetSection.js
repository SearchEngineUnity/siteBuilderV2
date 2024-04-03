import React from 'react';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import StructuredSectionFooter from './StructuredSectionFooter';
import StructuredSectionHeader from './StructuredSectionHeader';
import SectionOuterWrapper from './SectionOuterWrapper';
import SectionInnerWrapper from './SectionInnerWrapper';
import { determineColor } from '../../lib/helperFunctions';
import SubjectTagButton from '../buttons/SubjectTagButton';

function TagSetSection({
  idTag,
  heading,
  subheading,
  subtitle,
  footer,
  headerAlignment,
  footerAlignment,
  designSettings,
  tagSet,
  subjectListingPages,
}) {
  const headingColor = determineColor(designSettings?.heading?.color) || 'text.secondary';
  const subheadingColor = determineColor(designSettings?.subheading?.color) || 'inherit';
  const subtitleColor = determineColor(designSettings?.subtitle?.color) || 'inherit';
  const footerColor = determineColor(designSettings?.footer?.color) || 'inherit';

  return (
    <SectionOuterWrapper idTag={idTag} designSettings={designSettings}>
      <SectionInnerWrapper designSettings={designSettings}>
        <Grid container alignItems="center" spacing={{ xs: 2, sm: 3 }} direction="column">
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
          <Grid sx={{ alignSelf: 'flex-start' }}>
            {tagSet.map((tag) => {
              const { _key, name } = tag || {};
              const currentSlug =
                subjectListingPages.filter((x) => x?.node?.subject?.name === name)[0]?.node?.slug
                  ?.current || '';

              const slug = currentSlug === '/' ? '/' : `/${currentSlug}`;
              return (
                <SubjectTagButton
                  key={_key}
                  to={currentSlug && slug}
                  variant="outlined"
                  fontSize="h5"
                  sx={{ margin: '0px 4px 4px 0px' }}
                >
                  {name}
                </SubjectTagButton>
              );
            })}
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

export default TagSetSection;
