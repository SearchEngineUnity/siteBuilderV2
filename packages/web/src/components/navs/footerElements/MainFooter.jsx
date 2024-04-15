import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'gatsby-theme-material-ui';
import NavBrand from '../headerElements/NavBrand';
import ContactInfo from '../../ContactInfo';
import SocialMedia from '../../SocialMedia';
import FooterGroup from './FooterGroup';
import FooterItem from './FooterItem';
import NavPhone from '../headerElements/NavPhone';
import { mapNavBrandToProps, mapNavItemToProps, mapNavGroupToProps } from '../../../lib/mapToProps';
import { useFooter } from '../../../hooks/useFooter';

export default function MainFooter() {
  const { contactInfo, footerMenu } = useFooter();
  const { menuArray } = footerMenu;

  if (footerMenu) {
    return (
      <Box
        component="footer"
        sx={{ color: 'common.white', bgcolor: 'common.black', fontSize: '14px', pt: 2 }}
      >
        <Container maxWidth="lg" component="nav" role="menubar">
          <Grid container spacing={{ xs: 2, sm: 3 }}>
            {menuArray.map((group) => (
              <Grid container xs={12} md={3} key={group._key} direction="column">
                {group.menuGroup.map((item) => {
                  switch (item._type) {
                    case 'navBrand':
                      return (
                        <Grid key={item._key}>
                          <Box sx={{ my: 2 }}>
                            <NavBrand {...mapNavBrandToProps(item)} url={contactInfo.homePage} />
                            <ContactInfo />
                            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                              <SocialMedia />
                            </Box>
                          </Box>
                        </Grid>
                      );
                    case 'navItem':
                      return (
                        <Grid key={item._key} sx={{ display: { xs: 'none', md: 'block' } }}>
                          <FooterItem {...mapNavItemToProps(item)} />
                        </Grid>
                      );
                    case 'navGroup':
                      return (
                        <Grid key={item._key} sx={{ display: { xs: 'none', md: 'block' } }}>
                          <FooterGroup {...mapNavGroupToProps(item)} />
                        </Grid>
                      );
                    case 'navPhone':
                      return (
                        <Grid key={item._key} sx={{ display: { xs: 'none', md: 'block' } }}>
                          <NavPhone text={item.text} number={item.phoneNUmber} />
                        </Grid>
                      );

                    default:
                      return <div key={item._key}>under construction</div>;
                  }
                })}
              </Grid>
            ))}
          </Grid>
        </Container>
        <Divider role="none" sx={{ borderColor: 'common.white' }} />
        <Container maxWidth="lg" role="none">
          <Toolbar disableGutters role="menubar">
            <Box component="p" sx={{ mr: 2 }}>
              &#0169; Copyright {new Date().getFullYear()} {contactInfo.name}
            </Box>
            <Link to="/privacy-policy" role="menuitem" color="inherit" underline="hover">
              Privacy Policy
            </Link>
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <Box sx={{ flexGrow: 1 }} />
              <SocialMedia />
            </Box>
          </Toolbar>
        </Container>
      </Box>
    );
  }
  return null;
}
