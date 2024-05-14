import React from 'react';
import { Link } from 'gatsby-theme-material-ui';

function SVGNavBrand({ brandGroup, alt }) {
  return (
    <>
      {brandGroup.map((group) => {
        const {
          type,
          brand: {
            logo: {
              asset: { url: imageUrl },
            },
          },
          _key,
          maxHeight,
          maxWidth,
        } = group;

        switch (type) {
          case 'desktop':
            return (
              <Link
                role="menuitem"
                key={_key}
                to="/"
                sx={{
                  display: { xs: 'none', lg: 'block' },
                  height: maxHeight,
                }}
              >
                <img src={imageUrl} height={maxHeight} alt={alt} />
              </Link>
            );
          case 'tablet':
            return (
              <Link
                role="menuitem"
                key={_key}
                to="/"
                sx={{
                  display: { xs: 'none', sm: 'block', md: 'block', lg: 'none', xl: 'none' },
                  height: maxHeight,
                }}
              >
                <img src={imageUrl} height={maxHeight} alt={alt} />
              </Link>
            );
          case 'mobile':
            return (
              <Link
                role="menuitem"
                key={_key}
                to="/"
                sx={{
                  display: { xs: 'block', sm: 'none', md: 'none', lg: 'none', xl: 'none' },
                  height: maxHeight,
                }}
              >
                <img src={imageUrl} height={maxHeight} alt={alt} />
              </Link>
            );

          default:
            return <div>under construction</div>;
        }
      })}
    </>
  );
}

export default SVGNavBrand;
