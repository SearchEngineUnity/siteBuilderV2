import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { EmojiObjectsOutlined } from '@mui/icons-material/';
import TextContent from '../../serializer/HighlightBoxSerializer';

const useStyles = makeStyles()((theme) => ({
  root: {
    backgroundColor: theme.palette.hlBox.dyk.bgColor,
    borderColor: theme.palette.hlBox.dyk.borderColor,
    '& .pt-link': {
      color: theme.palette.hlBox.dyk.linkColor,
    },
  },
}));

function HighlightDidYouKnow({ blockContent, id }) {
  const { classes } = useStyles();

  return (
    <Box component={Paper} variant="outlined" key={id} className={classes.root} p={2}>
      <Box display="inline-flex" mb="0.8125em">
        <EmojiObjectsOutlined sx={{ alignSelf: 'center', color: 'hlBox.dyk.iconColor' }} />
        <Typography
          component="p"
          variant="h4"
          className={classes.text}
          sx={{ color: 'hlBox.dyk.textColor', marginLeft: '8px' }}
        >
          Did You Know
        </Typography>
      </Box>
      <Box sx={{ color: 'hlBox.dyk.textColor' }}>
        <TextContent blocks={blockContent} />
      </Box>
    </Box>
  );
}

export default HighlightDidYouKnow;
