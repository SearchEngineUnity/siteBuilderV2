/* eslint-disable import/no-cycle */
import React from 'react';
import Grid from '@mui/material/Grid2';
import SiteProductGridTile from './SiteProductGridTile';

function ProductGrid({ id, pageJumpText, tiles, design }) {
  const tileDesignMapping = {
    sites: SiteProductGridTile,
  };

  function Error() {
    return 'Tile design unavailable';
  }
  const Tile = tileDesignMapping[design] || Error;

  return (
    <Grid
      id={id}
      container
      spacing={2}
      component="div"
      className="product-grid"
      sx={{
        justifyContent: 'center',
        alignItems: 'stretch',
      }}
    >
      {tiles &&
        tiles.map((tile, index) => {
          const { _key } = tile;
          return (
            <Grid
              key={_key}
              size={{
                xs: 12,
                lg: 3,
              }}
            >
              <Tile key={_key} pageJumpText={pageJumpText} tile={tile} tilePosition={index} />
            </Grid>
          );
        })}
    </Grid>
  );
}

export default ProductGrid;
