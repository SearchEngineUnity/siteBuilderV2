import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { useContactInfo } from '../hooks/useContactInfo';

export default function Contact() {
  const { address1, address2, city, provinceState, mailCode, phone, email } = useContactInfo;

  return (
    <Box sx={{ my: 2 }}>
      {address1 && <div>{address1}</div>}
      {address2 && <div>{address2}</div>}
      <div>
        {city ? `${city}, ` : null}
        {provinceState ? `${provinceState}, ` : null}
        {mailCode ? `${mailCode}` : null}
      </div>
      {phone && (
        <Link
          href={`tel:${phone}`}
          content="telephone=yes"
          color="inherit"
          underline="none"
          sx={{ display: 'block' }}
        >
          {phone}
        </Link>
      )}
      {email && (
        <Link href={`mailto:${email}`} color="inherit" underline="hover">
          {email}
        </Link>
      )}
    </Box>
  );
}
