import React from 'react';
import { CardActionArea } from '@mui/material';

function CardActionAreaJumpLink({ hashId, children }) {
  return <CardActionArea href={`#${hashId}`}>{children}</CardActionArea>;
}

export default CardActionAreaJumpLink;
