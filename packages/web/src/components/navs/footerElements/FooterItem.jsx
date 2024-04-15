import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, Button } from 'gatsby-theme-material-ui';
import Box from '@mui/material/Box';

function FooterItem({ url, title, isButton }) {
  return (
    <Box sx={{ my: 2 }}>
      {isButton ? (
        <ThemeProvider
          theme={(theme) =>
            createTheme({
              palette: {
                primary: {
                  main: theme.palette.common.white,
                  dark: theme.palette.common.white,
                  contrastText: theme.palette.common.black,
                },
              },
              typography: {
                button: {
                  fontFamily: theme.typography.fontFamily,
                  fontWeight: 700,
                  fontSize: '14px',
                  textTransform: 'none',
                },
              },
            })
          }
        >
          <Button variant="contained" color="primary" to={`/${url}`}>
            {title}
          </Button>
        </ThemeProvider>
      ) : (
        <Box sx={{ fontSize: '14px', fontWeight: 'bold' }}>
          <Link to={`/${url}`} color="inherit" underline="hover">
            {title}
          </Link>
        </Box>
      )}
    </Box>
  );
}

export default FooterItem;
