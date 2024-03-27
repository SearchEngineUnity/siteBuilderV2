import React from 'react';
import { Button } from 'gatsby-theme-material-ui';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import StructuredSectionFooter from './StructuredSectionFooter';
import StructuredSectionHeader from './StructuredSectionHeader';
import SectionOuterWrapper from './SectionOuterWrapper';
import SectionInnerWrapper from './SectionInnerWrapper';
import { determineColor } from '../../lib/helperFunctions';

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

function TagSetSection({
  idTag,
  heading,
  subheading,
  subtitle,
  footer,
  headerAlignment,
  footerAlignment,
  designSettings,
  tagSet,
  subjectListingPages,
}) {
  const headingColor = determineColor(designSettings?.heading?.color) || 'inherit';
  const subheadingColor = determineColor(designSettings?.subheading?.color) || 'inherit';
  const subtitleColor = determineColor(designSettings?.subtitle?.color) || 'inherit';
  const footerColor = determineColor(designSettings?.footer?.color) || 'inherit';

  console.log(tagSet);
  console.log(subjectListingPages);

  return (
    <SectionOuterWrapper idTag={idTag} designSettings={designSettings}>
      <SectionInnerWrapper designSettings={designSettings}>
        <Grid container alignItems="center" spacing={6} direction="column">
          {(heading || subheading || subtitle) && (
            <Grid xs={12}>
              <StructuredSectionHeader
                heading={heading}
                subheading={subheading}
                subtitle={subtitle}
                headingColor={headingColor}
                subheadingColor={subheadingColor}
                subtitleColor={subtitleColor}
                align={headerAlignment}
              />
            </Grid>
          )}
          <Grid sx={{ alignSelf: 'flex-start' }}>
            <ThemeProvider theme={(theme) => btnTheme(theme)}>
              {tagSet.map((tag) => {
                const { _key, name } = tag || {};
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
            </ThemeProvider>
          </Grid>
          {footer && (
            <Grid xs={12}>
              <StructuredSectionFooter
                footer={footer}
                footerColor={footerColor}
                align={footerAlignment}
              />
            </Grid>
          )}
        </Grid>
      </SectionInnerWrapper>
    </SectionOuterWrapper>
  );
}

export default TagSetSection;
