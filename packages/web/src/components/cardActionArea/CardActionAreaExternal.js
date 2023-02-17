import React from 'react';
import { CardActionArea } from '@mui/material';

function CardActionAreaExternal({ href, children, noreferrer, newTab }) {
  return (
    <CardActionArea
      target={newTab ? '_blank' : undefined}
      rel={
        newTab || noreferrer
          ? `${newTab ? 'noopener' : ''} ${noreferrer ? 'noreferrer' : ''}`
          : undefined
      }
      href={href}
    >
      {children}
    </CardActionArea>
  );
}

export default CardActionAreaExternal;
