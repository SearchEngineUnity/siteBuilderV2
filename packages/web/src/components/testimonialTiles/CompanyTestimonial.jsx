import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';

function CompanyTestimonial({ image, alt, name, text, role, company }) {
  const customMaxHeight = 53;
  const { width, height } = image;
  const aspectRatio = width / height;

  const calculatedWidthBasedOnCustomMaxHeight = customMaxHeight * aspectRatio;

  const widthArray = [width, calculatedWidthBasedOnCustomMaxHeight];

  const minMaxWidth = Math.min(...widthArray);

  return (
    <Card
      square
      elevation={0}
      sx={{
        display: 'flex',
        alignItems: 'center',
        height: { md: '220px', sm: '316px', xs: '490px' },
        width: '100%',
      }}
    >
      <Box
        sx={{
          display: { xs: 'none', sm: 'block' },
          flexBasis: { lg: '280px', md: '188px', sm: '176px', xs: '0px' },
          flex: '0 0',
          p: 2,
        }}
      >
        {name && (
          <Typography
            gutterBottom
            variant="body1"
            component="p"
            sx={{
              fontWeight: 900,
              lineHeight: 'normal',
              textAlign: 'right',
            }}
          >
            {name}
          </Typography>
        )}
        {role && (
          <Typography
            variant="body1"
            component="p"
            sx={{
              fontWeight: 400,
              lineHeight: 'normal',
              textAlign: 'right',
            }}
          >
            {role}
          </Typography>
        )}
        {image && (
          <Box
            sx={{
              my: '16px',
              marginLeft: 'auto',
              maxWidth: `${minMaxWidth}px`,
            }}
          >
            <GatsbyImage image={image} alt={alt || ''} loading="lazy" />
          </Box>
        )}

        {company && (
          <Typography
            variant="body1"
            component="p"
            sx={{
              fontWeight: 400,
              lineHeight: 'normal',
              textAlign: 'right',
            }}
          >
            {company}
          </Typography>
        )}
      </Box>
      <Box
        sx={{ height: '100%', borderLeft: (theme) => `3px solid ${theme.palette.primary.main}` }}
      />
      <Box sx={{ padding: 2, flex: '1 1 auto' }}>
        <StaticImage src="../../images/quotes.png" alt="" height={27} width={44} loading="lazy" />
        <Typography
          variant="body1"
          component="p"
          sx={{
            fontWeight: 200,
            pt: 2,
            fontStyle: 'italic',
          }}
        >
          {text}
        </Typography>
        <Box
          sx={{
            display: { xs: 'block', sm: 'none' },
            pt: 2,
          }}
        >
          {name && (
            <Typography
              gutterBottom
              variant="body1"
              component="p"
              sx={{
                fontWeight: 900,
                lineHeight: 'normal',
              }}
            >
              {name}
            </Typography>
          )}
          {role && (
            <Typography
              variant="body1"
              component="p"
              sx={{
                fontWeight: 400,
                lineHeight: 'normal',
              }}
            >
              {role}
            </Typography>
          )}
          {image && (
            <Box
              sx={{
                my: '16px',
                maxWidth: `${minMaxWidth}px`,
              }}
            >
              <GatsbyImage image={image} alt={alt || ''} loading="lazy" />
            </Box>
          )}

          {company && (
            <Typography
              variant="body1"
              component="p"
              sx={{
                fontWeight: 400,
                lineHeight: 'normal',
              }}
            >
              {company}
            </Typography>
          )}
        </Box>
      </Box>
    </Card>
  );
}

export default CompanyTestimonial;
