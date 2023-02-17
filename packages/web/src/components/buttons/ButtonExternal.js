import React from 'react';
import { Button, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from 'tss-react/mui';
import { determineColor } from '../../lib/helperFunctions';

const useStyles = makeStyles()((theme, { padding }) => ({
  size: {
    padding,
    textAlign: 'center',
  },
}));

function ButtonExternal({
  idTag,
  text,
  variant,
  disableElevation,
  disableFocusRipple,
  disableRipple,
  fullWidth,
  borderRadius,
  padding,
  link,
  colors,
  alignment,
  typography,
  bgImage,
}) {
  const { main, dark, contrastText } = colors;
  const mainColor = determineColor(main?.color);
  const darkColor = determineColor(dark?.color);
  const contrastTextColor = determineColor(contrastText?.color);
  const hoverOverlay = dark.color.rgb;

  const theme = createTheme({
    palette: {
      primary: {
        main: mainColor,
        dark: darkColor,
        contrastText: contrastTextColor,
      },
    },
    shape: {
      borderRadius: borderRadius || '4px',
    },
    typography: {
      button: {
        fontFamily: typography?.fontFamily || 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: typography?.fontWeight || 500,
        fontSize: typography?.fontSize || '0.875rem',
        lineHeight: typography?.lineHeight || 1.75,
        letterSpacing: typography?.letterSpacing || '0.02857em',
        textTransform: 'none',
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            backgroundImage: bgImage && `url(${bgImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            '&:hover': {
              backgroundImage:
                bgImage &&
                `linear-gradient(rgba(${hoverOverlay.r}, ${hoverOverlay.g}, ${hoverOverlay.b}, .50), rgba(${hoverOverlay.r}, ${hoverOverlay.g}, ${hoverOverlay.b}, .50)), url(${bgImage})`,
            },
            '@media (hover: none)': {
              backgroundImage: bgImage && `url(${bgImage})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
              '&:hover': {
                backgroundImage:
                  bgImage &&
                  `linear-gradient(rgba(${hoverOverlay.r}, ${hoverOverlay.g}, ${hoverOverlay.b}, .50), rgba(${hoverOverlay.r}, ${hoverOverlay.g}, ${hoverOverlay.b}, .50)), url(${bgImage})`,
              },
            },
          },
        },
      },
    },
  });

  const { classes } = useStyles({ padding });
  const { href, newTab, noreferrer } = link[0];

  return (
    <ThemeProvider theme={theme}>
      <Box display="flex" justifyContent={alignment}>
        <Button
          id={idTag}
          color="primary"
          variant={variant}
          disableElevation={disableElevation}
          disableFocusRipple={disableFocusRipple}
          disableRipple={disableRipple}
          fullWidth={fullWidth}
          className={classes.size}
          target={newTab ? '_blank' : undefined}
          rel={
            newTab || noreferrer
              ? `${newTab ? 'noopener' : ''} ${noreferrer ? 'noreferrer' : ''}`
              : undefined
          }
          href={href}
        >
          {text}
        </Button>
      </Box>
    </ThemeProvider>
  );
}

export default ButtonExternal;
