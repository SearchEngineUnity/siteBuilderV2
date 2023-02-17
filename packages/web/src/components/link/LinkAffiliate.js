import React from 'react';
import { Link } from '@mui/material';

function AffiliateLink({ href, children, className }) {
  return (
    <Link target="_blank" rel="nofollow" className={className} href={href} underline="always">
      {children}
    </Link>
  );
}

export default AffiliateLink;
