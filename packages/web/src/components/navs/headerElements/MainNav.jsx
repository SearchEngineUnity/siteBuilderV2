import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
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

  const options = { rootMargin: '60px 0px 0px 0px' };

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
          position="sticky"
          elevation={0}
          sx={{
            backgroundColor: 'common.white',
            boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
          }}
        >
          <Container maxWidth="lg" component="nav" aria-label="main navigation header">
            {!isScrolled && (
              <Toolbar
                sx={{
                  display: {
                    xs: 'none',
                    sm: 'none',
                    md: 'flex',
                    lg: 'flex',
                    xl: 'flex',
                  },
                  pt: '20px',
                  justifyContent: 'space-around',
                  minHeight: '48px',
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
                    case 'navClickableImage':
                      return (
                        <NavClickableImage image={group.image} link={group.link} key={groupKey} />
                      );
                    case 'navBrand':
                      return <SVGNavBrand {...mapNavBrandToProps(group)} key={groupKey} />;
                    case 'navPhone':
                      return (
                        <NavPhone text={group.text} number={group.phoneNumber} key={groupKey} />
                      );
                    case 'navItem':
                      return <NavItem {...mapNavItemToProps(group)} key={groupKey} />;
                    case 'navGroup':
                      return <NavGroup key={groupKey} {...mapNavGroupToProps(group)} />;

                    default:
                      return <div>under construction</div>;
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
                minHeight: '48px',
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
                  case 'navClickableImage':
                    return (
                      <NavClickableImage image={group.image} link={group.link} key={groupKey} />
                    );
                  case 'navBrand':
                    return (
                      isScrolled && <SVGNavBrand {...mapNavBrandToProps(group)} key={groupKey} />
                    );
                  case 'navPhone':
                    return <NavPhone text={group.text} number={group.phoneNumber} key={groupKey} />;
                  case 'navItem':
                    return <NavItem {...mapNavItemToProps(group)} key={groupKey} />;
                  case 'navGroup':
                    return <NavGroup key={groupKey} {...mapNavGroupToProps(group)} />;

                  default:
                    return <div>under construction</div>;
                }
              })}
              <Link
                to="/search"
                color="common.black"
                sx={{
                  display: 'flex',
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
