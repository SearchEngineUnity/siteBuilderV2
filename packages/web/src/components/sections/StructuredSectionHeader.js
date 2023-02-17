import React from 'react';
import { Box, Typography } from '@mui/material';
import Subtitle from '../portableText/serializer/H2SubtitleSerializer';

function StructuredSectionHeader({
  heading,
  subheading,
  subtitle,
  headingColor,
  subheadingColor,
  subtitleColor,
  align,
  hasSectionHeading,
  hasSectionSubheading,
  hasSectionSubtitle,
}) {
  if (
    (!hasSectionHeading && heading) ||
    (!hasSectionSubheading && subheading) ||
    (!hasSectionSubtitle && subtitle)
  ) {
    return (
      <Box component={heading ? 'header' : 'div'} mb={{ xs: 2, sm: 4 }} textAlign={align}>
        {!hasSectionHeading && heading && (
          <Box component={Typography} variant="h2" gutterBottom color={headingColor}>
            {heading}
          </Box>
        )}
        {!hasSectionSubheading && subheading && (
          <Box component={Typography} variant="h3" gutterBottom color={subheadingColor}>
            {subheading}
          </Box>
        )}
        {!hasSectionSubtitle && subtitle && (
          <Box color={subtitleColor}>
            <Subtitle blocks={subtitle} />
          </Box>
        )}
      </Box>
    );
  }
  return null;
}
export default StructuredSectionHeader;
