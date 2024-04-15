'use client';

import React from 'react';
import { navigate } from 'gatsby';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Slide from '@mui/material/Slide';
import Toolbar from '@mui/material/Toolbar';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from 'gatsby-theme-material-ui';
import NavBrand from './NavBrand';
import NavItem from './NavItem';
import NavPhone from './NavPhone';
import NavGroup from './NavGroupHamburger';
import NavClickableImage from './NavClickableImage';
import { mapNavBrandToProps, mapNavItemToProps } from '../../../lib/mapToProps';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide ref={ref} {...props} unmountOnExit />;
});

function MainNavHamburger({ topMenu, bottomMenu, brandUrl, location }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickSubNavMenu = (menuLink) => {
    navigate(`/${menuLink}`);
  };

  return (
    <Box sx={{ display: { xs: 'block', md: 'none' } }} component="header">
      <AppBar
        component="nav"
        aria-label="main navigation header"
        elevation={0}
        sx={{
          position: 'relative',
          bgcolor: 'common.white',
          color: 'common.black',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'center',
            verticalAlign: 'middle',
            flexWrap: 'wrap',
            flexDirection: 'row',
            gap: '16px',
            pt: '16px',
          }}
          role="menubar"
        >
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleClickOpen}
            size="large"
            disableRipple
            disableFocusRipple
            disableTouchRipple
            sx={{
              flex: '0 1 40px',
              padding: 0,
              justifyContent: 'flex-start',
              color: 'primary.main',
            }}
          >
            <MenuIcon
              sx={{ width: { xs: '36px', sm: '48px' }, height: { xs: '36px', sm: '48px' } }}
            />
          </IconButton>

          {topMenu.map((group) => {
            const { _type, _key: groupKey } = group;
            switch (_type) {
              case 'navBrand': {
                return (
                  <Box key={groupKey} sx={{ flex: '1 0', verticalAlign: 'middle' }}>
                    <NavBrand {...mapNavBrandToProps(group)} url={brandUrl} />
                  </Box>
                );
              }

              default:
                return null;
            }
          })}
        </Toolbar>
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'center',
            verticalAlign: 'middle',
            flexWrap: 'wrap',
            flexDirection: 'row',
            gap: '16px',
            py: '16px',
          }}
          role="menubar"
        >
          {topMenu.map((group) => {
            const { _type, _key: groupKey } = group;
            switch (_type) {
              case 'navClickableImage':
                return (
                  <Box
                    sx={{
                      display: {
                        xs: 'block',
                        sm: 'block',
                        md: 'none',
                        lg: 'none',
                        xl: 'none',
                      },
                      my: 1,
                    }}
                    key={groupKey}
                  >
                    <NavClickableImage image={group.image} link={group.link} />
                  </Box>
                );
              case 'navBrand': {
                return null;
              }
              case 'navPhone':
                return <NavPhone text={group.text} key={groupKey} number={group.phoneNumber} />;
              case 'navItem':
                return <NavItem key={groupKey} {...mapNavItemToProps(group)} location={location} />;
              case 'navGroup':
                return <div>Nav Group is not allowed in the top menu</div>;

              default:
                return <div>under construction</div>;
            }
          })}
        </Toolbar>
      </AppBar>
      <Dialog
        fullScreen
        fullWidth
        transitionDuration={0}
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        PaperProps={{ sx: { bgcolor: 'primary.dark', color: 'common.white' } }}
        scroll="paper"
      >
        <Box sx={{ bgcolor: 'common.white', color: 'common.black' }}>
          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'center',
              verticalAlign: 'middle',
              flexWrap: 'wrap',
              flexDirection: 'row',
              gap: '16px',
              pt: '16px',
            }}
            role="menubar"
          >
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              size="large"
              disableRipple
              disableFocusRipple
              disableTouchRipple
              sx={{
                flex: '0 1 40px',
                padding: 0,
                justifyContent: 'flex-start',
                color: 'primary.main',
              }}
            >
              <CloseIcon
                sx={{ width: { xs: '36px', sm: '48px' }, height: { xs: '36px', sm: '48px' } }}
              />
            </IconButton>

            {topMenu.map((group) => {
              const { _type, _key: groupKey } = group;
              switch (_type) {
                case 'navBrand': {
                  return (
                    <Box key={groupKey} sx={{ flex: '1 0', verticalAlign: 'middle' }}>
                      <NavBrand {...mapNavBrandToProps(group)} url={brandUrl} />
                    </Box>
                  );
                }

                default:
                  return null;
              }
            })}
          </Toolbar>
          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'center',
              verticalAlign: 'middle',
              flexWrap: 'wrap',
              flexDirection: 'row',
              gap: '16px',
              py: '16px',
            }}
            role="menubar"
          >
            {topMenu.map((group) => {
              const { _type, _key: groupKey } = group;
              switch (_type) {
                case 'navClickableImage':
                  return (
                    <Box
                      sx={{
                        display: {
                          xs: 'block',
                          sm: 'block',
                          md: 'none',
                          lg: 'none',
                          xl: 'none',
                        },
                        my: 1,
                      }}
                      key={groupKey}
                    >
                      <NavClickableImage image={group.image} link={group.link} />
                    </Box>
                  );
                case 'navBrand': {
                  return null;
                }
                case 'navPhone':
                  return <NavPhone text={group.text} key={groupKey} number={group.phoneNumber} />;
                case 'navItem':
                  return (
                    <NavItem key={groupKey} {...mapNavItemToProps(group)} location={location} />
                  );
                case 'navGroup':
                  return <div>Nav Group is not allowed in the top menu</div>;

                default:
                  return <div>under construction</div>;
              }
            })}
          </Toolbar>
        </Box>
        <List role="menu" sx={{ bgcolor: 'primary.dark', color: 'common.white', px: 1 }}>
          {bottomMenu.map((group, index) => {
            const { _type, title, nav: groupNav, _key } = group;
            switch (_type) {
              case 'navItem': {
                const slug = groupNav.slug.current === '/' ? '' : groupNav.slug.current;
                return (
                  <React.Fragment key={_key}>
                    {index === 0 ? null : <Divider sx={{ borderColor: 'common.white' }} />}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <ListItemButton
                        onClick={() => handleClickSubNavMenu(slug)}
                        selected={location.pathname === `/${slug}`}
                      >
                        <ListItemText
                          primary={title}
                          primaryTypographyProps={
                            location.pathname === `/${slug}` ? { sx: { fontWeight: 900 } } : {}
                          }
                        />
                      </ListItemButton>
                    </Box>
                  </React.Fragment>
                );
              }
              case 'navGroup':
                return <NavGroup key={_key} navGroup={group} index={index} location={location} />;

              default:
                return <div key={_key}>under construction</div>;
            }
          })}
        </List>
      </Dialog>
    </Box>
  );
}

export default MainNavHamburger;
