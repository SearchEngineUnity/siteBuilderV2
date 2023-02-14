import React from 'react';
import { Card, CardContent, Typography, Avatar } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage } from 'gatsby-plugin-image';
import { styled } from '@mui/material/styles';
import sanityConfig from '../../lib/sanityConfig';

const StyledCard = styled(Card)(({ theme }) => ({
  borderLeft: `4px solid ${theme.palette.primary.main}`,
  height: '100%',
}));

const StyledCardContent = styled(CardContent)(() => ({
  padding: '8px 16px',
  '&:last-child': {
    paddingBottom: '8px',
  },
}));

function TestimonialImage({ image, alt, name, text, role, company }) {
  const imageData = getGatsbyImageData(
    image,
    {
      layout: 'fullWidth',
    },
    sanityConfig,
  );

  const printedRole = role && `, ${role}`;
  const printedCompany = company && `, ${company}`;

  return (
    <StyledCard elevation={0} square>
      <StyledCardContent>
        <Grid container spacing={2}>
          <Grid xs={12} sm>
            <Typography variant="body1" sx={{ fontStyle: 'italic', marginBottom: '16px' }}>
              {text}
            </Typography>
            <Typography variant="body1" sx={{ fontStyle: 'italic', fontWeight: 'fontWeightBold' }}>
              {'- '}
              {name}
              {printedRole}
              {printedCompany}
            </Typography>
          </Grid>
          <Grid>
            {image ? (
              <GatsbyImage
                image={imageData}
                alt={alt || ''}
                style={{ width: '100px', height: '100px', borderRadius: '50px' }}
              />
            ) : (
              <Avatar sx={{ width: '100px', height: '100px', fontSize: 'h2.fontSize' }}>
                {name[0].toUpperCase()}
              </Avatar>
            )}
          </Grid>
        </Grid>
      </StyledCardContent>
    </StyledCard>
  );
}

export default TestimonialImage;
