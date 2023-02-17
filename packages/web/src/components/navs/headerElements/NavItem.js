import React from 'react';
import { Link, Button } from 'gatsby-theme-material-ui';
import { Box, Typography } from '@mui/material';

function NavItem({ url, title, isButton, location }) {
  if (isButton) {
    return (
      <Button variant="contained" color="primary" to={`/${url}`} role="menuitem">
        <Typography component="span" variant="h4">
          {title}
        </Typography>
      </Button>
    );
  }
  return (
    <Box
      fontSize="h4.fontSize"
      fontWeight={`/${url}` === location.pathname ? 'fontWeightBold' : 'fontWeightRegular'}
      role="none"
    >
      <Link to={`/${url}`} role="menuitem" color="primary" sx={{ outlineColor: 'primary.main' }}>
        {title}
      </Link>
    </Box>
  );
}

export default NavItem;
