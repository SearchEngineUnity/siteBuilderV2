import React from 'react';
import { Link, Button } from 'gatsby-theme-material-ui';
import Typography from '@mui/material/Typography';

function NavItem({ url, title, isButton }) {
  if (isButton) {
    return (
      <Button
        variant="contained"
        color="primary"
        to={`/${url}`}
        role="menuitem"
        disableElevation
        disableFocusRipple
        disableRipple
        sx={{ padding: '12px 24px', borderRadius: '4px', display: { xs: 'none', sm: 'block' } }}
      >
        <Typography component="span" fontWeight={900} lineHeight="normal" sx={{ fontSize: '16px' }}>
          {title}
        </Typography>
      </Button>
    );
  }
  return (
    <Link
      to={`/${url}`}
      role="menuitem"
      underline="hover"
      variant="body1"
      sx={{
        color: 'common.black',
        fontWeight: 'fontWeightBold',
        '&:hover': {
          textDecorationThickness: '2px',
          textUnderlineOffset: '8px',
        },
      }}
    >
      {title}
    </Link>
  );
}

export default NavItem;
