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
          '[id]': { scrollMargin: '104px' },
          a: { scrollBehavior: 'smooth' },
          main: {
            paddingTop: '70px',
            minHeight: '40vh',
          },
          '@media (min-width: 600px)': {
            main: {
              paddingTop: '86px',
            },
            '[id]': { scrollMargin: '120px' },
          },
          '@media (min-width: 600px) and (min-height: 900px)': {
            main: {
              minHeight: 'calc(100vh - 513px)',
            },
          },
          '@media (min-width: 960px)': {
            main: {
              paddingTop: '136px',
              minHeight: 'calc(100vh - 316px)',
            },
            '[id]': { scrollMargin: '72px' },
          },
          '@media (min-width: 1280px)': {
            main: {
              paddingTop: '148px',
            },
          },
        }}
      />
      {children}
    </ThemeProvider>
  );
}
