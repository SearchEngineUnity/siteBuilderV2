// Tile #5
import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { GatsbyImage } from 'gatsby-plugin-image';
import ConditionalCardActionArea from '../cardActionArea/ConditionalCardActionArea';

export default function TileSmImageTitleText({ image, alt, link, title, text }) {
  return (
    <Card square elevation={link ? 8 : 0}>
      <ConditionalCardActionArea link={link}>
        <CardHeader
          sx={{ paddingBottom: '0px' }}
          avatar={
            <GatsbyImage
              image={image}
              alt={alt || ''}
              style={{
                height: '50px',
                width: '50px',
              }}
            />
          }
          title={<Box sx={{ fontSize: 'h4.fontSize', fontWeight: 'bold' }}>{title}</Box>}
        />
        <CardContent>
          <Typography variant="body1" color="textSecondary" component="p">
            {text}
          </Typography>
        </CardContent>
      </ConditionalCardActionArea>
    </Card>
  );
}
