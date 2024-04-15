'use client';

import React from 'react';
import { navigate } from 'gatsby';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import Icon from '@mui/material/Icon';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

function NavGroupHamburger({ navGroup, index, location }) {
  const pathname = location.pathname.substring(1);
  const paths = navGroup.group.map((x) => x?.nav?.slug?.current);
  const matchesSubPath = paths.includes(pathname);
  const [collapse, setCollapse] = React.useState(true);
  const handleClickCollapse = () => {
    setCollapse(!collapse);
  };
  const handleClickSubNavMenu = (menuLink) => {
    navigate(`/${menuLink}`);
  };
  return (
    <>
      {index === 0 ? null : <Divider sx={{ borderColor: 'common.white' }} />}
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <ListItemButton onClick={handleClickCollapse}>
          <ListItemText
            primary={navGroup.title}
            primaryTypographyProps={{
              sx: {
                fontWeight: matchesSubPath ? 900 : 400,
              },
            }}
          />
          {collapse ? <ExpandMore /> : <ExpandLess />}
        </ListItemButton>
      </Box>
      <Collapse in={!collapse} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {navGroup.group.map(({ icon, title: itemTitle, nav: itemNav, _key: itemKey }) => (
            <ListItemButton
              sx={{
                paddingLeft: 5,
                bgcolor: pathname === itemNav.slug.current ? 'rgba(0, 0, 0, 0.2)' : 'transparent',
              }}
              onClick={() => handleClickSubNavMenu(itemNav.slug.current)}
              key={itemKey}
            >
              {icon && (
                <ListItemIcon sx={{ color: 'common.white' }}>
                  <Icon>{icon}</Icon>
                </ListItemIcon>
              )}
              <ListItemText primary={itemTitle} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </>
  );
}

export default NavGroupHamburger;
