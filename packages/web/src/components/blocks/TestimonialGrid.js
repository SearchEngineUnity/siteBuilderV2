import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Tile1 from '../testimonialTiles/TestimonialImage';
import Tile2 from '../testimonialTiles/TestimonialPlain';
import { mapTestimonialListToProps } from '../../lib/mapToProps';

function TestimonialGrid({ testimonialList, layout, tileOption }) {
  // number of tiles desktop/tablet/tablet-mobile/mobile: '6/4/2/1' -> {lg: 2, md: 3, sm: 6, xs: 12}
  const colCalculate = (value) => {
    const valueArrStr = value.split('/');
    const valueArrNum = valueArrStr.map((el) => parseInt(el, 10));
    const colObj = {
      lg: 12 / valueArrNum[0],
      md: 12 / valueArrNum[1],
      sm: 12 / valueArrNum[2],
      xs: 12 / valueArrNum[3],
    };
    return colObj;
  };

  const col = colCalculate(layout);

  return (
    <Grid container>
      {testimonialList.map((testimonial) => {
        const tileSelector = (key) => {
          switch (key) {
            case '1':
              return <Tile1 {...mapTestimonialListToProps(testimonial)} />;
            case '2':
              return <Tile2 {...mapTestimonialListToProps(testimonial)} />;
            default:
              return <div> Tile still under development</div>;
          }
        };
        return (
          <Grid key={testimonial._id} {...col}>
            {tileSelector(tileOption)}
          </Grid>
        );
      })}
    </Grid>
  );
}

export default TestimonialGrid;
