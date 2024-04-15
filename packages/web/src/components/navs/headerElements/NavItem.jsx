import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { Link, Button } from 'gatsby-theme-material-ui';
import Typography from '@mui/material/Typography';

function NavItem({ url, title, isButton, location }) {
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
  return url === '/' ? (
    <>
      <Link
        to="/"
        role="menuitem"
        underline="none"
        sx={[
          { display: { xs: 'none', lg: 'block' } },
          {
            py: 1.5,
            fontSize: { xl: '24px', lg: '20px' },
            lineHeight: 'normal',
          },
          location.pathname === `/`
            ? {
                color: 'primary.main',
                fontWeight: 900,
                borderBottom: (theme) => `3px solid ${theme.palette.primary.main}`,
              }
            : { color: 'common.black', fontWeight: 'fontWeightRegular', borderBottom: 'none' },
        ]}
      >
        {title}
      </Link>
      <Link
        to="/"
        role="menuitem"
        underline="none"
        sx={[
          { display: { xs: 'block', lg: 'none' } },
          {
            py: 1.5,
            fontSize: { xl: '24px', lg: '20px' },
            lineHeight: 'normal',
          },
          location.pathname === `/`
            ? {
                color: 'primary.main',
              }
            : { color: 'common.black' },
        ]}
      >
        <HomeIcon />
      </Link>
    </>
  ) : (
    <Link
      to={`/${url}`}
      role="menuitem"
      underline="none"
      sx={[
        {
          py: 1.5,
          fontSize: { xl: '24px', lg: '20px' },
          lineHeight: 'normal',
        },
        `/${url}` === location.pathname
          ? {
              color: 'primary.main',
              fontWeight: 900,
              borderBottom: (theme) => `3px solid ${theme.palette.primary.main}`,
            }
          : { color: 'common.black', fontWeight: 'fontWeightRegular', borderBottom: 'none' },
      ]}
    >
      {title}
    </Link>
  );
}

export default NavItem;
