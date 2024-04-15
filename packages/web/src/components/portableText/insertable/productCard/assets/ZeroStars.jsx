import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

function ZeroStars() {
  return (
    <StaticImage
      src="../../../../../images/rating-stars-grey-background-0-of-5.png"
      alt="star-rating"
      height={24}
      width={120}
      loading="lazy"
    />
  );
}

export default ZeroStars;
