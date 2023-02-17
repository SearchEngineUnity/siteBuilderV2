import React from 'react';
import { Box, Typography } from '@mui/material';
import ProductCardSegment from '../../serializer/ProductCardSerializer';

function ProductCardFlexSegment({ title, headingLevel, content }) {
  return (
    <Box ma={3}>
      <Typography component={headingLevel} variant="h5" gutterBottom>
        {title}
      </Typography>
      <ProductCardSegment blocks={content} />
    </Box>
  );
}

export default ProductCardFlexSegment;
