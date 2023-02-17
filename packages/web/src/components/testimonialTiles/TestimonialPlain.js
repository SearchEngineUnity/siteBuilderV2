import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/styles';

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

function TestimonialPlain({ name, text, role, company }) {
  const printedRole = role && `, ${role}`;
  const printedCompany = company && `, ${company}`;

  return (
    <StyledCard elevation={0} square>
      <StyledCardContent>
        <Typography variant="body1" sx={{ fontStyle: 'italic', marginBottom: '16px' }}>
          {text}
        </Typography>
        <Typography variant="body1" ax={{ fontWeight: 'fontWeightBold', fontStyle: 'italic' }}>
          {'- '}
          {name}
          {printedRole}
          {printedCompany}
        </Typography>
      </StyledCardContent>
    </StyledCard>
  );
}

export default TestimonialPlain;
