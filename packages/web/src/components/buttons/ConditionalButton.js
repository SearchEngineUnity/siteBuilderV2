import React from 'react';
import { Button } from 'gatsby-theme-material-ui';
// import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { determineColor } from '../../lib/helperFunctions';

function ConditionalButton({
  idTag,
  text,
  variant = 'contained',
  disableElevation = false,
  disableFocusRipple = false,
  disableRipple = false,
  fullWidth = false,
  borderRadius,
  padding,
  link,
  colors,
  alignment,
  typography,
  bgImage,
  className,
  border,
}) {
  const { main, dark, contrastText } = colors || {};
  const mainColor = determineColor(main?.color);
  const darkColor = determineColor(dark?.color);
  const contrastTextColor = determineColor(contrastText?.color);
  const hoverOverlay = dark?.color?.rgb;

  const btnTheme = (theme) =>
    createTheme({
      palette: {
        primary: {
          main: mainColor || theme.palette.primary.main,
          dark: darkColor || theme.palette.primary.dark,
          contrastText: contrastTextColor || theme.palette.primary.contrastText,
        },
      },
      shape: {
        borderRadius: borderRadius || theme.shape.borderRadius,
      },
      typography: {
        button: {
          fontFamily: typography?.fontFamily || theme.typography.button.fontFamily,
          fontWeight: typography?.fontWeight || theme.typography.button.fontWeight,
          fontSize: typography?.fontSize || theme.typography.button.fontSize,
          lineHeight: typography?.lineHeight || theme.typography.button.lineHeight,
          letterSpacing: typography?.letterSpacing || theme.typography.button.letterSpacing,
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

  let linkType = link[0]._type;
  let { href } = link[0];
  const { hashId = '', newTab = false, noreferrer = false } = link[0];
  const noopenerTag = newTab ? 'noopener' : '';
  const nofollowTag = linkType === 'affiliateLink' ? 'nofollow' : '';
  const noreferrerTag = noreferrer ? 'noreferrer' : '';

  const target = newTab || linkType === 'affiliateLink' ? '_blank' : undefined;
  const rel = `${nofollowTag} ${noopenerTag} ${noreferrerTag}`.trim();

  if (linkType === 'jumpLink') {
    href = `#${hashId}`;
  }

  if (linkType === 'internalLocal' && newTab) {
    linkType = 'internalGlobal';
  }

  const btnClassName = className ? `btn ${className}`.trim() : 'btn';

  return (
    <ThemeProvider theme={(theme) => btnTheme(theme)}>
      <Box sx={{ display: 'flex', justifyContent: alignment }}>
        <Button
          id={idTag}
          color="primary"
          variant={variant}
          disableElevation={disableElevation}
          disableFocusRipple={disableFocusRipple}
          disableRipple={disableRipple}
          fullWidth={fullWidth}
          target={target}
          rel={rel || undefined}
          to={linkType === 'internalLocal' ? href : undefined}
          href={linkType !== 'internalLocal' ? href : undefined}
          sx={{
            padding,
            textAlign: 'center',
            border,
          }}
          className={btnClassName}
        >
          {text}
        </Button>
      </Box>
    </ThemeProvider>
  );
}

export default ConditionalButton;
