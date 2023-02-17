import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { WarningOutlined } from '@mui/icons-material';
import TextContent from '../../serializer/HighlightBoxSerializer';

const useStyles = makeStyles()((theme) => ({
  root: {
    backgroundColor: theme.palette.hlBox.warning.bgColor,
    borderColor: theme.palette.hlBox.warning.borderColor,
    '& .pt-link': {
      color: theme.palette.hlBox.warning.linkColor,
    },
  },
}));

function HighlightWarning({ blockContent, id }) {
  const { classes } = useStyles();

  return (
    <Box component={Paper} variant="outlined" key={id} className={classes.root} p={2}>
      <Box display="inline-flex" mb="0.8125em">
        <WarningOutlined sx={{ alignSelf: 'center', color: 'hlBox.warning.iconColor' }} />
        <Typography
          component="p"
          variant="h4"
          className={classes.text}
          sx={{ color: 'hlBox.warning.textColor', marginLeft: '8px' }}
        >
          Warning
        </Typography>
      </Box>
      <Box sx={{ color: 'hlBox.warning.textColor' }}>
        <TextContent blocks={blockContent} />
      </Box>
    </Box>
  );
}

export default HighlightWarning;
