import React from 'react';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import { Link, Button } from 'gatsby-theme-material-ui';
import { Box } from '@mui/material';

function FooterItem({ url, title, isButton }) {
  const prevTheme = useTheme();

  const theme = createTheme({
    palette: {
      primary: {
        main: prevTheme.palette.common.white,
        dark: prevTheme.palette.common.white,
        contrastText: prevTheme.palette.common.black,
      },
    },
    typography: {
      button: {
        fontFamily: prevTheme.typography.fontFamily,
        fontWeight: 700,
        fontSize: '14px',
        textTransform: 'none',
      },
    },
  });

  return (
    <Box my={2}>
      {isButton ? (
        <ThemeProvider theme={theme}>
          <Button variant="contained" color="primary" to={`/${url}`}>
            <Box fontSize={14}>{title}</Box>
          </Button>
        </ThemeProvider>
      ) : (
        <Box fontSize={14} fontWeight="fontWeightBold">
          <Link to={`/${url}`} color="inherit">
            {title}
          </Link>
        </Box>
      )}
    </Box>
  );
}

export default FooterItem;
