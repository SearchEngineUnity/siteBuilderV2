import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Link, ListItemButton } from 'gatsby-theme-material-ui';
import SearchIcon from '@mui/icons-material/Search';
import Drawer from '@mui/material/Drawer';
import SVGNavBrand from './SVGNavBrand';
import NavGroup from './NavGroupHamburger';
import { mapNavBrandToProps } from '../../../lib/mapToProps';

function MainNavHamburger({ topMenu, bottomMenu }) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const toggleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <AppBar
      component="header"
      position="sticky"
      aria-label="main navigation header"
      elevation={0}
      sx={{
        top: -1,
        display: { xs: 'block', md: 'none' },
        bgcolor: 'common.white',
        color: 'common.black',
        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
      }}
    >
      <Toolbar
        component="nav"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          verticalAlign: 'middle',
          flexWrap: 'wrap',
          flexDirection: 'row',
        }}
        role="menubar"
      >
        <IconButton
          type="button"
          color="inherit"
          aria-label="menu"
          edge="start"
          onClick={toggleDrawer}
        >
          {open ? <CloseIcon sx={{ fontSize: '36px' }} /> : <MenuIcon sx={{ fontSize: '36px' }} />}
        </IconButton>
        {topMenu.map((group) => {
          const { _type, _key: groupKey } = group;
          switch (_type) {
            case 'navBrand': {
              return <SVGNavBrand key={groupKey} {...mapNavBrandToProps(group)} />;
            }
            default:
              return null;
          }
        })}
        <Link
          sx={{
            display: 'flex',
            '@media (max-width: 599px)': { color: (theme) => theme.palette.common.black },
          }}
          color="inherit"
          to="/search"
          aria-label="Search"
        >
          <SearchIcon sx={{ fontSize: '36px' }} />
        </Link>
      </Toolbar>
      <Drawer anchor="top" open={open} sx={{ zIndex: 1000 }} onClose={toggleDrawerClose}>
        <List
          role="menu"
          sx={{
            bgcolor: '#EBEBEB',
            color: 'common.black',
            px: 'calc(11.5vw - 16px)',
            height: '100vh',
            marginTop: { xs: '56px', sm: '64px' },
          }}
        >
          {bottomMenu.map((group, index) => {
            const { _type, title, nav: groupNav, _key } = group;
            switch (_type) {
              case 'navBrand': {
                return null;
              }
              case 'navItem': {
                return (
                  <ListItem dense disableGutters key={_key}>
                    <ListItemButton
                      dense
                      component={Link}
                      role="menuitem"
                      to={`/${groupNav.slug.current}`}
                    >
                      <ListItemText
                        primary={title}
                        primaryTypographyProps={{ variant: 'body1', fontWeight: 'fontWeightBold' }}
                        sx={{
                          '@media (max-width: 599px)': {
                            color: (theme) => theme.palette.common.black,
                          },
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                );
              }
              case 'navGroup':
                return <NavGroup key={_key} navGroup={group} index={index} />;

              default:
                return <div key={_key}>under construction</div>;
            }
          })}
        </List>
      </Drawer>
    </AppBar>
  );
}

export default MainNavHamburger;
