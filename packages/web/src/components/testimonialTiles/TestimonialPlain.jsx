import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function TestimonialPlain({ name, text, role, company }) {
  const printedRole = role && `, ${role}`;
  const printedCompany = company && `, ${company}`;

  return (
    <Card
      elevation={0}
      square
      sx={(theme) => ({ height: '100%', borderLeft: `4px solid ${theme.palette.primary.main}` })}
    >
      <CardContent sx={{ p: '8px 16px', '&:last-child': { pb: '8px' } }}>
        <Typography variant="body1" sx={{ fontStyle: 'italic', marginBottom: '16px' }}>
          {text}
        </Typography>
        <Typography variant="body1" ax={{ fontWeight: 'bold', fontStyle: 'italic' }}>
          {'- '}
          {name}
          {printedRole}
          {printedCompany}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default TestimonialPlain;
