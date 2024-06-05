import React from 'react';
import Box from '@mui/material/Box';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

function Video({ id, videoId, stackHero }) {
  return (
    <Box
      id={id}
      sx={{
        width: stackHero ? { xs: '100%', md: '70%', lg: '60%' } : '100%',
        maxWidth: '640px',
        margin: stackHero && 'auto',
      }}
    >
      <LiteYouTubeEmbed id={videoId} title="Youtube Embed" poster="sddefault" webp />
    </Box>
  );
}

export default Video;
