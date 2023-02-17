import React from 'react';
import { navigate } from 'gatsby';
import {
  Box,
  Icon,
  ListItemText,
  ListItemIcon,
  ListItem,
  List,
  Divider,
  Collapse,
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

function NavGroupHamburger({ navGroup, index }) {
  const [collapse, setCollapse] = React.useState(true);
  const handleClickCollapse = () => {
    setCollapse(!collapse);
  };
  const handleClickSubNavMenu = (menuLink) => {
    navigate(`/${menuLink}`);
  };
  return (
    <>
      {index === 0 ? null : <Divider />}
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <ListItem button onClick={handleClickCollapse}>
          <ListItemText primary={navGroup.title} />
          {collapse ? <ExpandMore /> : <ExpandLess />}
        </ListItem>
      </Box>
      <Collapse in={!collapse} timeout="auto" unmountOnExit>
        {navGroup.group.map(({ icon, title: itemTitle, nav: itemNav, _key: itemKey }) => (
          <List component="div" disablePadding key={itemKey}>
            <ListItem
              sx={{ paddingLeft: 4 }}
              onClick={() => handleClickSubNavMenu(itemNav.slug.current)}
            >
              <ListItemIcon sx={{ color: 'common.white' }}>
                <Icon>{icon}</Icon>
              </ListItemIcon>
              <ListItemText primary={itemTitle} />
            </ListItem>
          </List>
        ))}
      </Collapse>
    </>
  );
}

export default NavGroupHamburger;
