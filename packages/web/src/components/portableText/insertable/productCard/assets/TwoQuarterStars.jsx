import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

function TwoQuarterStars() {
  return (
    <StaticImage
      src="../../../../../images/rating-stars-grey-background-2.25-of-5.png"
      alt="star-rating"
      height={24}
      width={120}
      loading="lazy"
    />
  );
}

export default TwoQuarterStars;
