import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Link } from 'gatsby-theme-material-ui';

function FooterGroup({ title, subGroup }) {
  return (
    <Box sx={{ my: 2 }}>
      <Box sx={{ fontSize: '14px', fontWeight: 'bold' }}>{title}</Box>
      <List>
        {subGroup.map(({ title: itemTitle, nav, _key }) => (
          <ListItem key={_key}>
            <Link to={`/${nav.slug.current}`} color="inherit" underline="hover">
              {itemTitle}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
export default FooterGroup;
