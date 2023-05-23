/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react';
import { useClient } from 'sanity';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import CircularProgress from '@mui/material/CircularProgress';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { determineColor } from '../lib/helperFunctions';

function ButtonDesignPreview({
  document: {
    displayed: { _id: id },
  },
}) {
  const [text, setText] = useState('Button Text');
  const [data, setData] = useState(null);
  const client = useClient({ apiVersion: '2023-01-01' });

  async function fetchData() {
    const res = await client.fetch(
      `*[_id == "${id}"]{name, settings, 'main': colors.main->color, 'dark': colors.dark->color, 'contrastText': colors.contrastText->color, typography, "bgImage": bgImage.asset->url}`,
    );
    setData(res[0]);
  }

  useEffect(() => {
    if (!data) fetchData();
  }, []);

  let mainColor;
  let darkColor;
  let contrastTextColor;
  let hoverOverlay;
  let borderRadius;
  let variant;
  let disableElevation;
  let disableFocusRipple;
  let disableRipple;
  let fullWidth;
  let padding;
  let typography;
  let bgImage;

  if (data) {
    const { main, dark, contrastText } = data;
    ({
      settings: {
        borderRadius,
        variant,
        disableElevation,
        disableFocusRipple,
        disableRipple,
        fullWidth,
        padding,
      },
      typography,
      bgImage,
    } = data);

    mainColor = determineColor(main);
    darkColor = determineColor(dark);
    contrastTextColor = determineColor(contrastText);
    hoverOverlay = dark;
  }

  const theme = createTheme({
    palette: {
      primary: {
        main: mainColor || '##00',
        dark: darkColor || '#000',
        contrastText: contrastTextColor || '#FFF',
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

  return data ? (
    <>
      <Box sx={{ p: 3 }}>
        <TextField
          id="outlined-basic"
          label="Custom button text"
          variant="outlined"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <Box color="red" component="p">
          Warning: Font style is not true to design if it has not been loaded into studio.
        </Box>
      </Box>
      <Divider />
      <ThemeProvider theme={theme}>
        <Box sx={{ p: 3 }}>
          <Button
            color="primary"
            variant={variant}
            disableElevation={disableElevation}
            disableFocusRipple={disableFocusRipple}
            disableRipple={disableRipple}
            fullWidth={fullWidth}
            sx={{
              padding,
              textAlign: 'center',
            }}
          >
            {text}
          </Button>
        </Box>
      </ThemeProvider>
    </>
  ) : (
    <Box sx={{ display: 'flex', p: 4 }}>
      <CircularProgress />
    </Box>
  );
}

export default ButtonDesignPreview;
