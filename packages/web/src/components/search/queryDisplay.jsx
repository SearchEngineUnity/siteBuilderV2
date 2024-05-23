import React from 'react';
import { useStats } from 'react-instantsearch';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'gatsby-theme-material-ui';

function QueryDisplay() {
  const { query } = useStats();

  if (query) {
    return (
      <>
        <Typography component="p" variant="h2" sx={{ margin: '1.4em 0 .2em 0', fontWeight: 400 }}>
          Displaying results for:{' '}
          <Box component="span" sx={{ fontWeight: 800 }}>
            {query}
          </Box>
        </Typography>
        <Link to="/a-to-z-topics" variant="body1" color="inherit">
          <Typography variant="body1" sx={{ marginBottom: '3.5em' }}>
            Or, check out our A to Z list of topics here
          </Typography>
        </Link>
      </>
    );
  }

  return null;
}

export default QueryDisplay;
