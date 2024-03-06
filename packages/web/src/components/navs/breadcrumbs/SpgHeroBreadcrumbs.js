import React from 'react';
import { Link } from 'gatsby-theme-material-ui';
import Box from '@mui/material/Box';

function SpgHeroBreadcrumbs({ primarySubcategory }) {
  const {
    name: subcategoryName,
    category: { name: categoryName },
  } = primarySubcategory;

  const categorySlug = primarySubcategory?.category?.listingPage?.slug?.current || '';
  const subcategorySlug = primarySubcategory?.listingPage?.slug?.current || '';

  return (
    <nav aria-label="Breadcrumb">
      <Box component="ol" sx={{ margin: 0, paddingLeft: 0, listStyle: 'none' }}>
        <Box
          component="li"
          sx={{
            display: 'inline',
            '&:after': {
              display: 'inline-block',
              content: '" > "',
              whiteSpace: 'pre',
            },
          }}
        >
          <Link to="/" underline="hover">
            Home
          </Link>
        </Box>
        <Box
          component="li"
          sx={{
            display: 'inline',
            '&:after': {
              display: 'inline-block',
              content: '" > "',
              whiteSpace: 'pre',
            },
          }}
        >
          <Link to={`/${categorySlug}`} underline="hover">
            {categoryName}
          </Link>
        </Box>
        <Box component="li" sx={{ display: 'inline' }}>
          <Link to={`/${subcategorySlug}`} underline="hover">
            {subcategoryName}
          </Link>
        </Box>
      </Box>
    </nav>
  );
}

export default SpgHeroBreadcrumbs;
