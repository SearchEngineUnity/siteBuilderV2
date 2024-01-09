// Tile #9
import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';
import ConditionalCardActionArea from '../cardActionArea/ConditionalCardActionArea';

function TileImageBackgroundTitle({ image, link, title }) {
  const bgImage = image.url;

  return (
    <Card square elevation={0}>
      <ConditionalCardActionArea link={link}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            height: '380px',
            width: '100%',
            maxWidth: '380px',
            px: '40px',
            mx: 'auto',
          }}
        >
          <Box
            sx={{
              border: '#406CCB solid 2px',
              backgroundColor: 'white',
              fontSize: 'body1.fontSize',
              lineHeight: 'normal',
              fontWeight: 700,
              textAlign: 'center',
              p: 2,
              width: '100%',
            }}
          >
            {title}
          </Box>
        </Box>
      </ConditionalCardActionArea>
    </Card>
  );
}

export default TileImageBackgroundTitle;
