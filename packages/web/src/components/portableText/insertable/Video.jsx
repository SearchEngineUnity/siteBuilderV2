import React from 'react';
import Box from '@mui/material/Box';

function Video({ id, videoId, stackHero, isHero }) {
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
      <Box
        component="iframe"
        sx={{
          position: 'absolute',
          top: '0',
          left: '0',
          border: 'none',
        }}
        title="Youtube Embed"
        src={`https://www.youtube.com/embed/${videoId}`}
        // need more variables to load eager when in hero spot
        loading={isHero ? 'eager' : 'lazy'}
        width="100%"
        height="100%"
      />
    </Box>
  );
}

export default Video;
