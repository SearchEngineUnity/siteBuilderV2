import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Subtitle from '../portableText/serializer/H1SubtitleSerializer';

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
      <Box component="div" sx={{ textAlign: align }}>
        {!hasSectionHeading && heading && (
          <Typography variant="h1" gutterBottom sx={{ color: headingColor }}>
            {heading}
          </Typography>
        )}
        {!hasSectionSubheading && subheading && (
          <Typography variant="h2" gutterBottom sx={{ color: subheadingColor }}>
            {subheading}
          </Typography>
        )}
        {!hasSectionSubtitle && subtitle && (
          <Box sx={{ color: subtitleColor }}>
            <Subtitle blocks={subtitle} />
          </Box>
        )}
      </Box>
    );
  }
  return null;
}
export default StructuredSectionHeader;
