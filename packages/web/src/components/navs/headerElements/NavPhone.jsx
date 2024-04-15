import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';

const StyledLink = styled(Link)(({ theme }) => ({
  outlineColor: theme.palette.primary.main,
}));

function NavPhone({ text, number }) {
  return (
    <>
      <Box
        sx={{
          display: { xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' },
          fontWeight: 700,
          fontSize: '24px',
          lineHeight: 'normal',
        }}
        role="none"
      >
        <StyledLink
          href={`tel:${number}`}
          content="telephone=yes"
          color="inherit"
          underline="none"
          role="menuitem"
          className="nav-phone"
        >
          {text}
        </StyledLink>
      </Box>
      <Box
        sx={{
          display: { xs: 'block', sm: 'block', md: 'block', lg: 'none', xl: 'none' },
          fontWeight: 700,
          fontSize: '20px',
          lineHeight: 'normal',
        }}
        role="none"
      >
        <StyledLink
          href={`tel:${number}`}
          content="telephone=yes"
          color="inherit"
          underline="none"
          role="menuitem"
          className="nav-phone"
        >
          {number}
        </StyledLink>
      </Box>
    </>
  );
}

export default NavPhone;
