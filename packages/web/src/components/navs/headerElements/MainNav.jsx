import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'gatsby-theme-material-ui';
import SearchIcon from '@mui/icons-material/Search';
import NavItem from './NavItem';
import NavGroup from './NavGroup';
import SVGNavBrand from './SVGNavBrand';
import NavPhone from './NavPhone';
import NavClickableImage from './NavClickableImage';
import MainNavHamburger from './MainNavHamburger';
import { mapNavBrandToProps, mapNavItemToProps, mapNavGroupToProps } from '../../../lib/mapToProps';
import { useMainNav } from '../../../hooks/useMainNav';

export default function MainNav() {
  const { menu } = useMainNav();
  const [isScrolled, setIsScrolled] = useState(false);

  const callback = (entries) => {
    const [entry] = entries;
    setIsScrolled(!entry.isIntersecting);
  };

  const options = {};

  useEffect(() => {
    const scrollTracker = document.querySelector('#scroll-tracker');
    const observer = new IntersectionObserver(callback, options);
    observer.observe(scrollTracker);

    return () => observer.disconnect();
  });

  if (menu) {
    return (
      <>
        <MainNavHamburger
          bottomMenu={menu.menuArray[1].menuGroup}
          topMenu={menu.menuArray[0].menuGroup}
        />
        <div id="scroll-tracker" />
        <AppBar
          id="main-header"
          position="fixed"
          elevation={0}
          sx={{
            backgroundColor: 'common.white',
            boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
            display: {
              xs: 'none',
              sm: 'none',
              md: 'flex',
              lg: 'flex',
              xl: 'flex',
            },
          }}
        >
          <Container maxWidth="lg" component="nav" aria-label="main navigation header">
            {!isScrolled && (
              <Toolbar
                sx={{
                  pt: '20px',
                  justifyContent: 'space-around',
                  paddingBottom: '8px',
                  '@media (min-width: 600px)': {
                    minHeight: '48px',
                  },
                }}
                disableGutters
                role="menubar"
              >
                {menu.menuArray[0].menuGroup.map((group) => {
                  const { _type, _key: groupKey } = group;

                  switch (_type) {
                    case 'navBrand':
                      return <SVGNavBrand {...mapNavBrandToProps(group)} key={groupKey} />;
                    default:
                      return null;
                  }
                })}
              </Toolbar>
            )}
            <Toolbar
              sx={{
                display: {
                  xs: 'none',
                  sm: 'none',
                  md: 'flex',
                  lg: 'flex',
                  xl: 'flex',
                },
                justifyContent: 'space-between',
                gap: { lg: '50px', md: '1.45vw' },
                '@media (min-width: 600px)': {
                  minHeight: '48px',
                },
              }}
              disableGutters
              role="menubar"
            >
              {menu.menuArray[1].menuGroup.map((group) => {
                const { _type, _key: groupKey } = group;

                switch (_type) {
                  case 'navBrand':
                    return (
                      <Box
                        key={groupKey}
                        sx={{
                          display: 'flex',
                          '@media (max-width: 1166px)': {
                            display: isScrolled ? 'flex' : 'none',
                          },
                          visibility: isScrolled ? 'visible' : 'hidden',
                          flex: isScrolled ? 0 : 1,
                        }}
                      >
                        <SVGNavBrand {...mapNavBrandToProps(group)} key={groupKey} />
                      </Box>
                    );
                  default:
                    return null;
                }
              })}
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  flex: '1 1 714px',
                  maxWidth: '894px',
                  '@media (max-width: 1166px)': {
                    flex: 'auto',
                    maxWidth: 'none',
                  },
                  justifyContent: 'space-between',
                }}
              >
                {menu.menuArray[1].menuGroup.map((group) => {
                  const { _type, _key: groupKey } = group;

                  switch (_type) {
                    case 'navClickableImage':
                      return (
                        <NavClickableImage image={group.image} link={group.link} key={groupKey} />
                      );
                    case 'navPhone':
                      return (
                        <NavPhone text={group.text} number={group.phoneNumber} key={groupKey} />
                      );
                    case 'navItem':
                      return <NavItem {...mapNavItemToProps(group)} key={groupKey} />;
                    case 'navGroup':
                      return <NavGroup key={groupKey} {...mapNavGroupToProps(group)} />;

                    default:
                      return null;
                  }
                })}
                <Link
                  role="menuitem"
                  aria-label="Search"
                  to="/search"
                  color="common.black"
                  sx={{
                    display: 'none',
                    flexDirection: 'row-reverse',
                    '@media (max-width: 1166px)': {
                      display: 'flex',
                    },
                    '&:hover, &:focus': { color: (theme) => theme.palette.primary.main },
                  }}
                >
                  <SearchIcon />
                </Link>
              </Box>
              <Link
                role="menuitem"
                aria-label="Search"
                to="/search"
                color="common.black"
                sx={{
                  display: 'flex',
                  flex: isScrolled ? 0 : 1,
                  flexDirection: 'row-reverse',
                  '@media (max-width: 1166px)': {
                    display: 'none',
                  },
                  '&:hover, &:focus': { color: (theme) => theme.palette.primary.main },
                }}
              >
                <SearchIcon />
              </Link>
            </Toolbar>
          </Container>
        </AppBar>
      </>
    );
  }
  return null;
}
