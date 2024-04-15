import React from 'react';
import Box from '@mui/material/Box';
import Footer from '../portableText/serializer/SectionFooterSerializer';

function StructuredSectionFooter({ footer, footerColor, align, hasSectionFooter }) {
  if (!hasSectionFooter && footer) {
    return (
      <Box
        component={hasSectionFooter ? 'div' : 'footer'}
        sx={{ color: footerColor, textAlign: align }}
      >
        <Footer blocks={footer} />
      </Box>
    );
  }
  return null;
}
export default StructuredSectionFooter;
