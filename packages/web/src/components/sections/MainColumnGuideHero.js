import React, { forwardRef } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Typography from '@mui/material/Typography';
import Subtitle from '../portableText/serializer/H1SubtitleSerializer';
import HeroTags from './HeroTags';
import Breadcrumbs from '../navs/breadcrumbs/PageBreadcrumbs';

const MainColumnGuideHeroWithRef = forwardRef(function MainColumnGuideHero(
  {
    h1,
    subtitle,
    date,
    author,
    topicTags,
    primarySubcategory,
    secondarySubcategory,
    subjectListingPages,
  },
  ref,
) {
  const lastUpdatedDate = date ? new Date(date.replace(/-/g, '/')) : null;
  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  return (
    <Box
      ref={ref}
      sx={{
        bgcolor: 'transparent',
        color: 'text.primary',
        pt: { xs: '16px', md: '40px' },
        mb: '12px',
      }}
      id="hero"
      component="header"
    >
      <Container maxWidth="lg">
        <Grid container direction="column" spacing={{ xs: 2, sm: 3 }}>
          <Grid sx={{ color: 'primary.main' }}>
            {primarySubcategory && (
              <Breadcrumbs
                subject={primarySubcategory}
                subjectListingPages={subjectListingPages}
                isSGP
              />
            )}
          </Grid>
          <Grid>
            <Typography variant="h1" color="text.secondary">
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

            <Typography variant="body1" component="p">
              {author && (
                <Box
                  component="span"
                  sx={{
                    '&:after': {
                      content: '" | "',
                      display: {
                        xs: 'none',
                        sm: 'inline',
                      },
                    },
                  }}
                >
                  By {author}
                </Box>
              )}
              {lastUpdatedDate && (
                <Box
                  component="span"
                  color="#747474"
                  sx={{ display: { xs: 'block', sm: 'inline-block' } }}
                >
                  Updated on {lastUpdatedDate.toLocaleDateString('en-US', options)}
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
