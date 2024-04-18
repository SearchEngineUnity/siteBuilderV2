// Tile #4
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { GatsbyImage } from 'gatsby-plugin-image';
import ConditionalCardActionArea from '../cardActionArea/ConditionalCardActionArea';

function TileImageTitleTextBase({ image, alt, link, title, text }) {
  return (
    <Card elevation={link ? 8 : 0} square sx={{ border: '1px solid #acb4b8', height: '100%' }}>
      <ConditionalCardActionArea link={link}>
        <GatsbyImage image={image} alt={alt || ''} style={{ width: '100%', height: 'auto' }} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="div">
            {text}
          </Typography>
        </CardContent>
      </ConditionalCardActionArea>
    </Card>
  );
}

export default TileImageTitleTextBase;
