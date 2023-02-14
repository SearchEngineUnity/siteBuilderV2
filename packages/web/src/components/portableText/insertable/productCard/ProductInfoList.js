import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

function ProductInfoList({ infoList }) {
  return (
    <>
      {infoList.map((item) => (
        <Grid container spacing={0} key={item._key}>
          <Grid xs={4} sm={5} md={4} lg={4}>
            <Box component="p" fontSize="body1.fontSize" mb={0} lineHeight="1.2rem">
              {item.label}:
            </Box>
          </Grid>
          <Grid xs={8} sm={7} md={8} lg={8}>
            <Box component="p" fontSize="body1.fontSize" mb={0} lineHeight="1.2rem">
              {item.text}
            </Box>
          </Grid>
        </Grid>
      ))}
    </>
  );
}

export default ProductInfoList;
