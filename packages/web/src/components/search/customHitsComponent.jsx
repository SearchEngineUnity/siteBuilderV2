import React from 'react';
import Typography from '@mui/material/Typography';
import { Link } from 'gatsby-theme-material-ui';

function CustomHitsComponent({ slug, title, metaDescription }) {
  return (
    <article>
      <Link
        to={`/${slug}`}
        sx={{
          color: 'inherit',
          '&:hover': {
            color: (theme) => theme.palette.primary.main,
          },
        }}
        underline="none"
      >
        <Typography variant="h5" component="h2" fontWeight={700}>
          {title}
        </Typography>
        <Typography variant="body1">{metaDescription}</Typography>
      </Link>
    </article>
  );
}

export default CustomHitsComponent;
