import React from 'react';
import Grid from '@mui/material/Grid2';
import SellIcon from '@mui/icons-material/Sell';
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
  const headingColor = determineColor(designSettings?.heading?.color) || 'text.primary';
  const subheadingColor = determineColor(designSettings?.subheading?.color) || 'inherit';
  const subtitleColor = determineColor(designSettings?.subtitle?.color) || 'inherit';
  const footerColor = determineColor(designSettings?.footer?.color) || 'inherit';

  return (
    <SectionOuterWrapper idTag={idTag} designSettings={designSettings}>
      <SectionInnerWrapper designSettings={designSettings}>
        <Grid
          container
          spacing={{ xs: 2, sm: 3 }}
          direction="column"
          sx={{
            alignItems: 'center',
          }}
        >
          {(heading || subheading || subtitle) && (
            <Grid size={12}>
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
          <Grid
            sx={{
              alignSelf: 'flex-start',
              display: 'flex',
              flexWrap: 'wrap',
              flexDirection: 'row',
              gap: '10px',
              alignItems: 'center',
            }}
          >
            <SellIcon
              sx={{
                transform: 'rotate(100deg)',
                verticalAlign: 'middle',
                display: 'flex',
                color: '#535353',
                fontSize: '24px',
              }}
            />
            {tagSet.map((tag) => {
              const { _id, name } = tag || {};
              const currentSlug =
                subjectListingPages.filter((x) => x?.node?.subject?.name === name)[0]?.node?.slug
                  ?.current || '';

              const slug = currentSlug === '/' ? '/' : `/${currentSlug}`;
              return (
                <SubjectTagButton
                  key={_id}
                  to={currentSlug && slug}
                  variant="outlined"
                  fontSize="h5"
                >
                  {name}
                </SubjectTagButton>
              );
            })}
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

export default TagSetSection;
