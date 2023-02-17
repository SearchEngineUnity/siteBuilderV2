import React from 'react';
import { Link } from '@mui/material';

function InternalGlobal({ href, children, newTab, className }) {
  return (
    <Link
      target={newTab ? '_blank' : undefined}
      rel={newTab ? 'noopener' : undefined}
      href={href}
      className={className}
      underline="always"
    >
      {children}
    </Link>
  );
}

export default InternalGlobal;
