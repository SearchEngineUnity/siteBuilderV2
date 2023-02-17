import React from 'react';
import { CardActionArea } from '@mui/material';

function CardActionAreaInternalGlobal({ href, children, newTab }) {
  return (
    <CardActionArea
      target={newTab ? '_blank' : undefined}
      rel={newTab ? 'noopener' : undefined}
      href={href}
    >
      {children}
    </CardActionArea>
  );
}

export default CardActionAreaInternalGlobal;
