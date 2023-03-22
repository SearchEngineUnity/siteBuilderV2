import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Hidden from '@mui/material/Hidden';
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
      <Box component="footer" color="common.white" bgcolor="common.black" fontSize={14} pt={2}>
        <Container maxWidth="lg" component="nav" role="menubar">
          <Grid container spacing={3}>
            {menuArray.map((group) => (
              <Grid container item xs={12} md={3} key={group._key} direction="column">
                {group.menuGroup.map((item) => {
                  switch (item._type) {
                    case 'navBrand':
                      return (
                        <Grid item key={item._key}>
                          <Box my={2}>
                            <NavBrand {...mapNavBrandToProps(item)} url={contactInfo.homePage} />
                            <ContactInfo />
                            <Hidden mdUp>
                              <SocialMedia />
                            </Hidden>
                          </Box>
                        </Grid>
                      );
                    case 'navItem':
                      return (
                        <Hidden mdDown key={item._key}>
                          <Grid item>
                            <FooterItem {...mapNavItemToProps(item)} />
                          </Grid>
                        </Hidden>
                      );
                    case 'navGroup':
                      return (
                        <Hidden mdDown key={item._key}>
                          <Grid item>
                            <FooterGroup {...mapNavGroupToProps(item)} />
                          </Grid>
                        </Hidden>
                      );
                    case 'navPhone':
                      return (
                        <Hidden mdDown key={item._key}>
                          <Grid item>
                            <NavPhone text={item.text} number={item.phoneNUmber} />
                          </Grid>
                        </Hidden>
                      );

                    default:
                      return <div key={item._key}>under construction</div>;
                  }
                })}
              </Grid>
            ))}
          </Grid>
        </Container>
        <Divider role="none" sx={{ bgcolor: 'common.white' }} />
        <Container maxWidth="lg" role="none">
          <Toolbar disableGutters role="menubar">
            <Box component="p" mr={2}>
              &#0169; Copyright {new Date().getFullYear()} {contactInfo.name}
            </Box>
            <Link to="/privacy-policy" role="menuitem" color="inherit">
              Privacy Policy
            </Link>
            <Hidden mdDown>
              <Box sx={{ flexGrow: 1 }} />
              <SocialMedia />
            </Hidden>
          </Toolbar>
        </Container>
      </Box>
    );
  }
  return null;
}
