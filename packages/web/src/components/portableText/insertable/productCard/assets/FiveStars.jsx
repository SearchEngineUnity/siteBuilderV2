import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

function FiveStars() {
  return (
    <StaticImage
      src="../../../../../images/rating-stars-grey-background-5-of-5.png"
      alt="star-rating"
      height={24}
      width={120}
      loading="lazy"
    />
  );
}

export default FiveStars;
