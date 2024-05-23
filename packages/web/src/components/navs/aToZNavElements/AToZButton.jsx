import React from 'react';
import Button from '@mui/material/Button';

function AToZButton({ letter, disabled }) {
  return (
    <Button
      variant="outlined"
      disabled={disabled}
      href={disabled ? '' : `#${letter.toLowerCase()}`}
      disableFocusRipple
      sx={{
        fontSize: { xs: '20px', md: '24px' },
        width: { xs: '36px', md: '48px' },
        height: { xs: '38.67px', md: '48px' },
        minWidth: 0,
        fontWeight: 'fontWeightBold',
        padding: 0,
        borderRadius: '6px',
        color: (theme) => theme.palette.text.primary,
        borderColor: (theme) => theme.palette.text.primary,
        '&:hover, &:focus': {
          color: (theme) => theme.palette.common.white,
          backgroundColor: (theme) => theme.palette.primary.main,
          borderColor: (theme) => theme.palette.primary.main,
        },
        '&.Mui-disabled': {
          color: '#ABABAB',
          borderColor: '#ABABAB',
        },
      }}
    >
      {letter}
    </Button>
  );
}

export default AToZButton;
