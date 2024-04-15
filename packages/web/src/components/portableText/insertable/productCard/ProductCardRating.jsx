import React from 'react';
import Box from '@mui/material/Box';
import ZeroStars from './assets/ZeroStars';
import QuarterStars from './assets/QuarterStars';
import HalfStars from './assets/HalfStars';
import ThreeQurterStars from './assets/ThreeQuarterStars';
import OneStars from './assets/OneStars';
import OneQuarterStars from './assets/OneQuarterStars';
import OneHalfStars from './assets/OneHalfStars';
import OneThreeQurterStars from './assets/OneThreeQuarterStars';
import TwoStars from './assets/TwoStars';
import TwoQuarterStars from './assets/TwoQuarterStars';
import TwoHalfStars from './assets/TwoHalfStars';
import TwoThreeQuarterStars from './assets/TwoThreeQuarterStars';
import ThreeStars from './assets/ThreeStars';
import ThreeOneQuarterStars from './assets/ThreeOneQuarterStars';
import ThreeHalfStars from './assets/ThreeHalfStars';
import ThreeThreeQuarterStars from './assets/ThreeThreeQuarterStars';
import FourStars from './assets/FourStars';
import FourQuarterStars from './assets/FourQuarterStars';
import FourHalfStars from './assets/FourHalfStars';
import FourThreeQuarterStars from './assets/FourThreeQuarterStars';
import FiveStars from './assets/FiveStars';

function ProductCardRating({ rating }) {
  let ImageRating;
  if (rating <= 0.124) {
    ImageRating = ZeroStars;
  } else if (rating >= 0.125 && rating <= 0.374) {
    ImageRating = QuarterStars;
  } else if (rating >= 0.375 && rating <= 0.624) {
    ImageRating = HalfStars;
  } else if (rating >= 0.625 && rating <= 0.874) {
    ImageRating = ThreeQurterStars;
  } else if (rating >= 0.875 && rating <= 1.124) {
    ImageRating = OneStars;
  } else if (rating >= 1.125 && rating <= 1.374) {
    ImageRating = OneQuarterStars;
  } else if (rating >= 1.375 && rating <= 1.624) {
    ImageRating = OneHalfStars;
  } else if (rating >= 1.625 && rating <= 1.874) {
    ImageRating = OneThreeQurterStars;
  } else if (rating >= 1.875 && rating <= 2.124) {
    ImageRating = TwoStars;
  } else if (rating >= 2.125 && rating <= 2.374) {
    ImageRating = TwoQuarterStars;
  } else if (rating >= 2.375 && rating <= 2.624) {
    ImageRating = TwoHalfStars;
  } else if (rating >= 2.625 && rating <= 2.874) {
    ImageRating = TwoThreeQuarterStars;
  } else if (rating >= 2.875 && rating <= 3.124) {
    ImageRating = ThreeStars;
  } else if (rating >= 3.125 && rating <= 3.374) {
    ImageRating = ThreeOneQuarterStars;
  } else if (rating >= 3.375 && rating <= 3.624) {
    ImageRating = ThreeHalfStars;
  } else if (rating >= 3.625 && rating <= 3.874) {
    ImageRating = ThreeThreeQuarterStars;
  } else if (rating >= 3.875 && rating <= 4.124) {
    ImageRating = FourStars;
  } else if (rating >= 4.125 && rating <= 4.374) {
    ImageRating = FourQuarterStars;
  } else if (rating >= 4.375 && rating <= 4.624) {
    ImageRating = FourHalfStars;
  } else if (rating >= 4.625 && rating <= 4.874) {
    ImageRating = FourThreeQuarterStars;
  } else {
    ImageRating = FiveStars;
  }

  return (
    <Box component="span">
      <ImageRating />
      <Box component="span" sx={{ px: 1, verticalAlign: 'middle', fontSize: '20px' }}>
        {`${rating.toFixed(1)}`}
      </Box>
    </Box>
  );
}

export default ProductCardRating;
