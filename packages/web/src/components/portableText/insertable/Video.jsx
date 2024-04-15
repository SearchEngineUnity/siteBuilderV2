import React from 'react';
import ReactPlayer from 'react-player/lazy';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const StyledReactPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`;

function Video({ id, url, stackHero }) {
  const ptStackHeroDesktop = `${70 * 0.5625}%`;
  const ptStackHeroTablet = `${80 * 0.5625}%`;

  return (
    <Box
      id={id}
      sx={{
        pt: stackHero ? { xs: '56.25%', md: ptStackHeroTablet, lg: ptStackHeroDesktop } : '56.25%',
        position: 'relative',
        width: stackHero ? { xs: '100%', md: '80%', lg: '70%' } : '100%',
        margin: 'auto',
      }}
    >
      <StyledReactPlayer url={url} controls width="100%" height="100%" />
    </Box>
  );
}

export default Video;
