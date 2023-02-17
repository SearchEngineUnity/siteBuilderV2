import React from 'react';
import { Link } from 'gatsby-theme-material-ui';

function InternalLocal({ href, children, newTab, className }) {
  return (
    <Link
      target={newTab ? '_blank' : undefined}
      rel={newTab ? 'noopener' : undefined}
      to={href}
      className={className}
      underline="always"
    >
      {children}
    </Link>
  );
}

export default InternalLocal;
