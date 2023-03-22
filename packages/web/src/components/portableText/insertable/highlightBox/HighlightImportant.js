import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { makeStyles } from 'tss-react/mui';
import ErrorOutlineOutlined from '@mui/icons-material/ErrorOutlineOutlined';
import TextContent from '../../serializer/HighlightBoxSerializer';

const useStyles = makeStyles()((theme) => ({
  root: {
    backgroundColor: theme.palette.hlBox.important.bgColor,
    borderColor: theme.palette.hlBox.important.borderColor,
    '& .pt-link': {
      color: theme.palette.hlBox.important.linkColor,
    },
  },
}));

function HighlightImportant({ blockContent, id }) {
  const { classes } = useStyles();

  return (
    <Box component={Paper} variant="outlined" key={id} className={classes.root} sx={{ p: 2 }}>
      <Box sx={{ display: 'inline-flex', mb: '0.8125em' }}>
        <ErrorOutlineOutlined sx={{ alignSelf: 'center', color: 'hlBox.important.iconColor' }} />
        <Typography
          component="p"
          variant="h4"
          className={classes.text}
          sx={{ color: 'hlBox.important.textColor', marginLeft: '8px' }}
        >
          Important
        </Typography>
      </Box>
      <Box sx={{ color: 'hlBox.important.textColor' }}>
        <TextContent blocks={blockContent} />
      </Box>
    </Box>
  );
}

export default HighlightImportant;
