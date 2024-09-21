import React, { forwardRef } from 'react';
import { Link } from 'gatsby-theme-material-ui';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { formatInTimeZone } from 'date-fns-tz';
import HeroTags from './HeroTags';
import Breadcrumbs from '../navs/breadcrumbs/PageBreadcrumbs';
import Subtitle from '../portableText/serializer/H1SubtitleSerializer';

const MainColumnGuideHeroWithRef = forwardRef(function MainColumnGuideHero(
  {
    h1,
    subtitle,
    date,
    author,
    authorUrl,
    topicTags,
    primarySubcategory,
    secondarySubcategory,
    subjectListingPages,
  },
  ref,
) {
  const lastUpdatedDate = date
    ? formatInTimeZone(new Date(date), 'America/New_York', 'MMMM d, yyyy')
    : null;

  return (
    <Box
      ref={ref}
      sx={{
        bgcolor: 'transparent',
        mb: '12px',
      }}
      id="hero"
      component="header"
    >
      <Container maxWidth="lg">
        {primarySubcategory && (
          <Box sx={{ mb: '12px' }}>
            <Breadcrumbs
              subject={primarySubcategory}
              subjectListingPages={subjectListingPages}
              isSGP
            />
          </Box>
        )}
        <Grid container direction="column" spacing={{ xs: 2, sm: 3 }}>
          <Grid>
            <Typography variant="h1" color="text.primary">
              {h1}
            </Typography>
          </Grid>
          <Grid md={9} xs={12}>
            {subtitle && (
              <Box sx={{ mb: '24px' }}>
                <Subtitle blocks={subtitle} />
              </Box>
            )}

            <Box sx={{ mb: '24px' }}>
              <HeroTags
                topicTags={topicTags}
                primarySubcategory={primarySubcategory}
                secondarySubcategory={secondarySubcategory}
                subjectListingPages={subjectListingPages}
              />
            </Box>

            <Typography variant="h5" component="p">
              {author && (
                <Box
                  component="span"
                  sx={{
                    fontWeight: 'fontWeightRegular',
                    '&:after': {
                      content: '" | "',
                      display: {
                        xs: 'none',
                        sm: 'inline',
                      },
                    },
                  }}
                >
                  By{' '}
                  <Link
                    to={`/${authorUrl}`}
                    sx={{
                      color: 'inherit',
                      '@media (max-width: 599px)': { color: 'inherit' },
                    }}
                  >
                    {author}
                  </Link>
                </Box>
              )}
              {lastUpdatedDate && (
                <Box
                  component="span"
                  color="text.secondary"
                  sx={{
                    display: { xs: 'block', sm: 'inline-block' },
                    fontWeight: 'fontWeightRegular',
                  }}
                >
                  Updated on {lastUpdatedDate}
                </Box>
              )}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
});

export default MainColumnGuideHeroWithRef;
