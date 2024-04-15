import React from 'react';
import Typography from '@mui/material/Typography';

function PTHeadingTypography({ variant, id, children, noIndent }) {
  return (
    <Typography
      variant={variant}
      gutterBottom
      id={id}
      sx={[
        { mt: '1.35em' },
        noIndent && {
          '&:first-child': { display: 'inline' },
          '&:not(:first-child)': { textIndent: '0' },
        },
      ]}
    >
      {children}
    </Typography>
  );
}

export default PTHeadingTypography;
