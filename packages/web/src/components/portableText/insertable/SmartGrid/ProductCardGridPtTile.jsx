/* eslint-disable import/no-cycle */
import React from 'react';
import Typography from '@mui/material/Typography';
import Content from '../../serializer/NoIndentSerializer';

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
