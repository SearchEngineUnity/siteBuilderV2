import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { ThumbUpOutlined } from '@mui/icons-material';
import TextContent from '../../serializer/HighlightBoxSerializer';

const useStyles = makeStyles()((theme) => ({
  root: {
    backgroundColor: theme.palette.hlBox.proTip.bgColor,
    borderColor: theme.palette.hlBox.proTip.borderColor,
    '& .pt-link': {
      color: theme.palette.hlBox.proTip.linkColor,
    },
  },
}));

function HighlightProTip({ blockContent, id }) {
  const { classes } = useStyles();
  return (
    <Box component={Paper} variant="outlined" key={id} className={classes.root} p={2}>
      <Box display="inline-flex" mb="0.8125em">
        <ThumbUpOutlined sx={{ alignSelf: 'center', color: 'hlBox.proTip.iconColor' }} />
        <Typography
          component="p"
          variant="h4"
          className={classes.text}
          sx={{ color: 'hlBox.proTip.textColor', marginLeft: '8px' }}
        >
          Pro Tip
        </Typography>
      </Box>
      <Box sx={{ color: 'hlBox.proTip.textColor' }}>
        <TextContent blocks={blockContent} />
      </Box>
    </Box>
  );
}

export default HighlightProTip;
