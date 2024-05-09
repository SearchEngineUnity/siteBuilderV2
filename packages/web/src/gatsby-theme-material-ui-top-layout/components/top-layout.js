import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import { ThemeProvider, responsiveFontSizes, createTheme } from '@mui/material/styles';
import { useCustomTheme } from '../useCustomTheme';

export default function TopLayout({ children }) {
  const customTheme = createTheme(useCustomTheme());
  const responsiveCustomTheme = responsiveFontSizes(customTheme);

  return (
    <ThemeProvider theme={responsiveCustomTheme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          '[id]': { scrollMargin: '72px' },
          a: { scrollBehavior: 'smooth' },
          main: {
            marginTop: '16px',
          },
          '@media (min-width: 600px)': {
            main: {
              marginTop: '24px',
            },
            '[id]': { scrollMargin: '88px' },
          },
          '@media (min-width: 960px)': {
            main: {
              marginTop: '136px',
            },
            '[id]': { scrollMargin: '72px' },
          },
          '@media (min-width: 1280px)': {
            main: {
              marginTop: '156px',
            },
          },
        }}
      />
      {children}
    </ThemeProvider>
  );
}
