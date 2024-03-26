import React from 'react';
import { Button } from 'gatsby-theme-material-ui';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const btnTheme = (theme) =>
  createTheme({
    palette: {
      primary: {
        main: '#535353',
        dark: theme.palette.common.black,
        contrastText: theme.palette.common.white,
      },
    },
    typography: {
      button: {
        fontFamily: theme.typography.fontFamily,
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.h5.fontSize,
        lineHeight: theme.typography.h5.lineHeight,
        letterSpacing: theme.typography.h5.letterSpacing,
        textTransform: 'none',
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            padding: '4px 8px',
            margin: '0px 0px 4px 4px',
            borderColor: '#ABABAB',
            '&:hover': {
              borderColor: theme.palette.primary.main,
              color: theme.palette.primary.main,
            },
          },
        },
      },
    },
  });

function HeroTags({ topicTags, primarySubcategory, secondarySubcategory, subjectListingPages }) {
  const primarySubcategorySlugString =
    subjectListingPages.filter((x) => x?.node?.subject?.name === primarySubcategory?.name)[0]?.node
      ?.slug?.current || '';

  const primarySubcategorySlug =
    primarySubcategorySlugString === '/' ? '/' : `/${primarySubcategorySlugString}`;
  return (
    <ThemeProvider theme={(theme) => btnTheme(theme)}>
      {primarySubcategory && (
        <Box
          component="span"
          className="material-symbols-outlined"
          sx={{
            transform: 'rotate(17.6deg)',
            verticalAlign: 'middle',
            display: 'inline-block',
            color: '#535353',
            marginBottom: '4px',
          }}
        >
          shoppingmode
        </Box>
      )}
      {topicTags.map((topic) => {
        const { _key, name } = topic || {};
        const currentSlug =
          subjectListingPages.filter((x) => x?.node?.subject?.name === name)[0]?.node?.slug
            ?.current || '';

        const slug = currentSlug === '/' ? '/' : `/${currentSlug}`;
        return (
          <Button key={_key} to={currentSlug && slug} variant="outlined">
            {name}
          </Button>
        );
      })}
      {secondarySubcategory.map((subcategory) => {
        const { _key, name } = subcategory || {};
        const currentSlug =
          subjectListingPages.filter((x) => x?.node?.subject?.name === name)[0]?.node?.slug
            ?.current || '';
        const slug = currentSlug === '/' ? '/' : `/${currentSlug}`;
        return (
          <Button key={_key} to={currentSlug && slug} variant="outlined">
            {name}
          </Button>
        );
      })}
      {primarySubcategory && (
        <Button to={primarySubcategorySlugString && primarySubcategorySlug} variant="outlined">
          {primarySubcategory?.name}
        </Button>
      )}
    </ThemeProvider>
  );
}

export default HeroTags;
