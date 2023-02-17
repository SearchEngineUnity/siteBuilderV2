import React from 'react';
import { Typography } from '@mui/material';
import Content from '../../serializer/ProductCardGridTileSerializer';

function ProductCardGridPtTile({ title, headingLevel, content }) {
  return (
    <>
      <Typography component={headingLevel} variant="h5" gutterBottom>
        {title}
      </Typography>
      <Content blocks={content} />
    </>
  );
}

export default ProductCardGridPtTile;
