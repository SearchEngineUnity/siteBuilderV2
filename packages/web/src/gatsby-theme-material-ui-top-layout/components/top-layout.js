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
        styles={{ '[id]': { scrollMargin: '32px' }, a: { scrollBehavior: 'smooth' } }}
      />
      {children}
    </ThemeProvider>
  );
}
