import React from 'react';
import { Box, Link } from '@mui/material';
import { styled } from '@mui/styles';

const StyledLink = styled(Link)(({ theme }) => ({
  outlineColor: theme.palette.primary.main,
}));

function NavPhone({ text, number }) {
  return (
    <>
      <Box
        display={{ xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' }}
        fontWeight="fontWeightBold"
        fontSize="h3.fontSize"
        role="none"
      >
        <StyledLink
          href={`tel:${number}`}
          content="telephone=yes"
          color="inherit"
          underline="none"
          role="menuitem"
        >
          {text}
        </StyledLink>
      </Box>
      <Box
        display={{ xs: 'block', sm: 'block', md: 'block', lg: 'none', xl: 'none' }}
        fontWeight="fontWeightBold"
        fontSize="h4.fontSize"
        role="none"
      >
        <StyledLink
          href={`tel:${number}`}
          content="telephone=yes"
          color="inherit"
          underline="none"
          role="menuitem"
        >
          {number}
        </StyledLink>
      </Box>
    </>
  );
}

export default NavPhone;
