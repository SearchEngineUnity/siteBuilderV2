import React from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { GatsbyImage } from 'gatsby-plugin-image';

function TestimonialImage({ image, alt, name, text, role, company }) {
  const printedRole = role && `, ${role}`;
  const printedCompany = company && `, ${company}`;

  return (
    <Card
      elevation={0}
      square
      sx={(theme) => ({ height: '100%', borderLeft: `4px solid ${theme.palette.primary.main}` })}
    >
      <CardContent sx={{ p: '8px 16px', '&:last-child': { pb: '8px' } }}>
        <Grid container spacing={2}>
          <Grid xs={12} sm>
            <Typography variant="body1" sx={{ fontStyle: 'italic', marginBottom: '16px' }}>
              {text}
            </Typography>
            <Typography variant="body1" sx={{ fontStyle: 'italic', fontWeight: 'bold' }}>
              {'- '}
              {name}
              {printedRole}
              {printedCompany}
            </Typography>
          </Grid>
          <Grid>
            {image ? (
              <GatsbyImage
                image={image}
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
      </CardContent>
    </Card>
  );
}

export default TestimonialImage;
