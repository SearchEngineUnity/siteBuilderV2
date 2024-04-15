/* eslint-disable import/no-cycle */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ProductCardSegment from '../../serializer/NoIndentSerializer';

function ProductCardFlexSegment({ title, headingLevel, content, hide }) {
  const { hideOnDesktop, hideOnTablet, hideOnTabletMobile, hideOnMobile } = hide;

  const display = {
    xs: hideOnMobile ? 'none' : 'block',
    sm: hideOnTabletMobile ? 'none' : 'block',
    md: hideOnTablet ? 'none' : 'block',
    lg: hideOnDesktop ? 'none' : 'block',
  };

  return (
    <Box sx={{ m: 3, display }} className="product-card-segment">
      <Divider sx={{ my: 3 }} />
      {title && (
        <Typography component={headingLevel || 'p'} variant="h5" gutterBottom>
          {title}
        </Typography>
      )}
      <ProductCardSegment blocks={content} />
    </Box>
  );
}

export default ProductCardFlexSegment;
