import React from 'react';
import { Box } from '@mui/material';
import Footer from '../portableText/serializer/HeroFooterSerializer';

function StructuredSectionFooter({ footer, footerColor, align, hasSectionFooter }) {
  if (!hasSectionFooter && footer) {
    return (
      <Box
        component={hasSectionFooter ? 'div' : 'footer'}
        color={footerColor}
        mt={{ xs: 2, sm: 4 }}
        textAlign={align}
      >
        <Footer blocks={footer} />
      </Box>
    );
  }
  return null;
}
export default StructuredSectionFooter;
