'use client';

/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Icon from '@mui/material/Icon';
import Link from '@mui/material/Link';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { navigate, Link as GLink } from 'gatsby';

function NavGroup({ title, subGroup, location, position }) {
  const pathname = location.pathname.substring(1);
  const paths = subGroup.map((x) => x?.nav?.slug?.current);
  const matchesSubPath = paths.includes(pathname);
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const handleNavigate = (nav) => {
    navigate(`/${nav.slug.current}`);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab' || event.key === 'Escape') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <Link
        ref={anchorRef}
        onClick={handleToggle}
        underline="none"
        sx={[
          {
            fontFamily: 'Inter, Arial, sans-serif',
            fontSize: { xl: '24px', lg: '20px' },
            py: 1.5,
            lineHeight: 'normal',
            '&:hover': {
              cursor: 'pointer',
            },
          },
          matchesSubPath
            ? {
                color: 'primary.main',
                fontWeight: 900,
                borderBottom: (theme) => `3px solid ${theme.palette.primary.main}`,
              }
            : { color: 'common.black', fontWeight: 'fontWeightRegular', borderBottom: 'none' },
        ]}
        role="menuitem"
        aria-controls={open ? title.replace(' ', '-') : undefined}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {title}
        {open ? (
          <ExpandLess sx={{ verticalAlign: 'middle' }} />
        ) : (
          <ExpandMore sx={{ verticalAlign: 'middle' }} />
        )}
      </Link>
      <Popper
        sx={{ zIndex: 1900 }}
        open={open}
        anchorEl={anchorRef.current}
        placement={position}
        role={undefined}
        disablePortal
      >
        <Paper role="none" elevation={4} square>
          <ClickAwayListener onClickAway={handleClose}>
            <MenuList
              role="menu"
              autoFocusItem={open}
              id={title.replace(' ', '-')}
              // eslint-disable-next-line react/jsx-no-bind
              onKeyDown={handleListKeyDown}
              sx={{ m: 1 }}
            >
              {subGroup.map(({ icon, title: itemTitle, nav, _key }) => (
                <Box
                  key={_key}
                  sx={{
                    '&:not(:first-of-type)': {
                      my: 1,
                      borderTop: (theme) => `1px solid ${theme.palette.primary.main}`,
                    },
                  }}
                >
                  <MenuItem
                    role="menuitem"
                    onClick={() => handleNavigate(nav)}
                    selected={`/${nav.slug.current}` === location.pathname}
                    component={GLink}
                    to={`/${nav.slug.current}`}
                    sx={{
                      my: 1,
                      py: 1,
                      px: 1,
                      '&.Mui-selected': {
                        background: '#F1F1F1',
                      },
                      '&.Mui-selected:hover': {
                        background: '#F1F1F1',
                      },
                    }}
                  >
                    {icon && (
                      <ListItemIcon>
                        <Icon>{icon}</Icon>
                      </ListItemIcon>
                    )}
                    <Typography
                      sx={[
                        {
                          fontWeight: 'regular',
                          fontSize: '24px',
                          lineHeight: 'normal',
                          color: 'common.black',
                        },
                        `/${nav.slug.current}` === location.pathname && {
                          fontWeight: 700,
                        },
                      ]}
                    >
                      {itemTitle}
                    </Typography>
                  </MenuItem>
                </Box>
              ))}
            </MenuList>
          </ClickAwayListener>
        </Paper>
      </Popper>
    </>
  );
}

export default NavGroup;
