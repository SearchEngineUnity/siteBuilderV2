import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import SectionTextBlock from '../portableText/serializer/FullIndentSerializer';
import HeroSectionHeader from '../sections/HeroSectionHeader';
import HeroSectionFooter from '../sections/HeroSectionFooter';

function SectionBlock({
  hasSectionHeading,
  hasSectionSubheading,
  hasSectionSubtitle,
  hasSectionFooter,
  heading,
  subheading,
  subtitle,
  sectionText,
  footer,
  headerAlignment,
  textAlignment,
  footerAlignment,
  headingColor,
  subheadingColor,
  subtitleColor,
  footerColor,
}) {
  return (
    <Grid container spacing={{ xs: 2, sm: 3 }} direction="column">
      {(heading || subheading || subtitle) && (
        <Grid xs={12}>
          <HeroSectionHeader
            heading={heading}
            subheading={subheading}
            subtitle={subtitle}
            align={headerAlignment}
            hasSectionHeading={hasSectionHeading}
            hasSectionSubheading={hasSectionSubheading}
            hasSectionSubtitle={hasSectionSubtitle}
            headingColor={headingColor}
            subheadingColor={subheadingColor}
            subtitleColor={subtitleColor}
          />
        </Grid>
      )}
      {sectionText && (
        <Grid xs={12}>
          <Box sx={{ textAlign: textAlignment }}>
            <SectionTextBlock blocks={sectionText} />
          </Box>
        </Grid>
      )}
      {footer && (
        <Grid xs={12}>
          <HeroSectionFooter
            footer={footer}
            footerColor={footerColor}
            align={footerAlignment}
            hasSectionFooter={hasSectionFooter}
          />
        </Grid>
      )}
    </Grid>
  );
}
export default SectionBlock;
