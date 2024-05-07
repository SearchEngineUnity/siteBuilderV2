import React from 'react';
import { Link } from 'gatsby-theme-material-ui';
import Typography from '@mui/material/Typography';

function TileAToZ({ item }) {
  const { title, link } = item;

  const isExternal = link.startsWith('http');

  return (
    <Link to={link} underline="none" color="text.primary" target={isExternal ? '_blank' : '_self'}>
      <Typography
        variant="body1"
        sx={{
          fontWeight: 'fontWeightBold',
          width: '220px',
          py: '10px',
          borderBottom: '0.5px solid #ABABAB',
          textTransform: 'capitalize',
          '&:hover': {
            color: 'primary.main',
          },
          '@media (max-width: 599px)': {
            color: 'text.primary',
          },
        }}
      >
        {title}
      </Typography>
    </Link>
  );
}

export default TileAToZ;
