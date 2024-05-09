/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Box from '@mui/material/Box';
import Icon from '@mui/material/Icon';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Link } from 'gatsby-theme-material-ui';

function NavGroup({ title, url, subGroup }) {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '30px',
        '&:hover .dropdown-content': {
          display: 'block',
        },
        '&:hover > a': {
          textDecoration: 'underline',
          textDecorationThickness: '2px',
          textUnderlineOffset: '8px',
        },
      }}
    >
      <Link
        to={`/${url}`}
        underline="none"
        variant="body1"
        role="menuitem"
        sx={{
          color: 'common.black',
          fontWeight: 'fontWeightBold',
        }}
      >
        {title}
      </Link>
      <Paper
        component="ul"
        role="menu"
        id={title.replace(' ', '-')}
        elevation={1}
        square
        sx={{
          display: 'none',
          position: 'absolute',
          zIndex: 1,
          padding: '8px 16px',
          listStyle: 'none',
          marginBlockStart: '2px',
          marginBlockEnd: 0,
          minWidth: '218px',
        }}
        className="dropdown-content"
      >
        {subGroup.map(({ icon, title: itemTitle, nav, _key }) => (
          <li role="menuitem" key={_key}>
            <Link
              to={`/${nav.slug.current}`}
              underline="hover"
              color="common.black"
              sx={{
                ':hover': {
                  color: '#5C5C5C',
                  textDecorationColor: 'currentcolor',
                },
              }}
            >
              {icon && (
                <ListItemIcon>
                  <Icon>{icon}</Icon>
                </ListItemIcon>
              )}
              <Typography vanriant="body1" sx={{ lineHeight: '33px' }}>
                {itemTitle}
              </Typography>
            </Link>
          </li>
        ))}
        <li role="menuitem">
          <Link to="/" underline="hover">
            <Typography vanriant="body1" sx={{ lineHeight: '33px' }}>
              View All
            </Typography>
          </Link>
        </li>
      </Paper>
    </Box>
  );
}

export default NavGroup;
