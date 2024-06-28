/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Link } from 'gatsby-theme-material-ui';
import MuiLink from '@mui/material/Link';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { styled } from '@mui/material/styles';
import { StaticImage } from 'gatsby-plugin-image';

const MenuHeading = styled(Box)({
  fontWeight: 600,
  fontSize: '18px',
  lineHeight: '26px',
  borderBottom: `1.5px solid #186E9C`,
  padding: '0 0 10px 0',
  margin: '0',
});

const MenuLink = styled(Link)({
  textDecoration: 'none',
  fontWeight: 400,
  fontSize: '18px',
  '@media (max-width: 599px)': {
    fontSize: '16px',
    color: '#1B1B1B',
  },
  lineHeight: 1.3,
  color: 'inherit',
  '&:hover': {
    textDecoration: 'underline',
  },
});

const MenuMuiLink = styled(MuiLink)({
  textDecoration: 'none',
  fontWeight: 400,
  fontSize: '18px',
  '@media (max-width: 599px)': {
    fontSize: '16px',
    color: '#1B1B1B',
  },
  lineHeight: 1.3,
  color: 'inherit',
  '&:hover': {
    textDecoration: 'underline',
  },
});

function TLUFooter() {
  return (
    <Box component="footer" sx={{ overflow: 'hidden' }}>
      <Box
        sx={{
          backgroundColor: '#EBEBEB',
          fontFamily: 'Figtree, Roboto, Helvetica, Arial, sans-serif',
          color: '#1B1B1B',
          paddingY: '24px',
        }}
      >
        <Container maxWidth="lg" component="nav" role="menubar">
          <Grid container spacing="40px">
            <Grid xs={12} md={6} lg={6}>
              <MenuHeading component="p">Get In Touch</MenuHeading>
              <Box
                component="p"
                sx={{
                  textDecoration: 'none',
                  fontWeight: 500,
                  display: 'flex',
                  fontSize: '18px',
                  lineHeight: '24px',
                  margin: '24px 0',
                }}
              >
                <MailOutlineIcon
                  sx={{
                    mr: '8px',
                    fontSize: '24px',
                    lineHeight: 1.3,
                    '@media (max-width: 599px)': {
                      fontSize: '16px',
                    },
                  }}
                />
                <MenuLink href="mailto:contact@techlifeunity.com" role="menuitem">
                  contact@techlifeunity.com
                </MenuLink>
              </Box>
              <Grid container spacing="40px" role="group">
                <Grid>
                  <a
                    href="https://youtube.com/@techlifeunity"
                    target="_blank"
                    rel="noopener noreferrer"
                    role="menuitem"
                  >
                    <StaticImage
                      src="./assets/youtube.png"
                      alt="youtube"
                      width={48}
                      height={48}
                      loading="lazy"
                    />
                  </a>
                </Grid>
                <Grid>
                  <a
                    href="https://www.facebook.com/Techboomers"
                    target="_blank"
                    rel="noopener noreferrer"
                    role="menuitem"
                  >
                    <StaticImage
                      src="./assets/facebook.png"
                      alt="facebook"
                      width={48}
                      height={48}
                      loading="lazy"
                    />
                  </a>
                </Grid>
                <Grid>
                  <a
                    href="https://www.linkedin.com/company/techboomers-com"
                    target="_blank"
                    rel="noopener noreferrer"
                    role="menuitem"
                  >
                    <StaticImage
                      src="./assets/linkedin.png"
                      alt="linkedin"
                      width={48}
                      height={48}
                      loading="lazy"
                    />
                  </a>
                </Grid>
                <Grid>
                  <a
                    href="https://x.com/techlifeunity"
                    target="_blank"
                    rel="noopener noreferrer"
                    role="menuitem"
                  >
                    <StaticImage
                      src="./assets/x.png"
                      alt="x"
                      width={48}
                      height={48}
                      loading="lazy"
                    />
                  </a>
                </Grid>
              </Grid>
            </Grid>
            <Grid xs={12} sm={6} md={3} lg={3}>
              <MenuHeading component="p">Work With Us</MenuHeading>
              <Box
                role="menu"
                component="ul"
                sx={{ listStyleType: 'none', paddingLeft: 0, margin: '24px 0 0 0' }}
              >
                <li role="none">
                  <MenuLink to="/about-us" role="menuitem">
                    About Us
                  </MenuLink>
                </li>
                <li role="none">
                  <MenuLink to="/digital-literacy-partners" role="menuitem">
                    Digital Literacy Partners
                  </MenuLink>
                </li>
                <li role="none">
                  <MenuLink to="/link-to-us" role="menuitem">
                    Link To Us
                  </MenuLink>
                </li>
                <li role="none">
                  <MenuLink to="/contact-us" role="menuitem">
                    Contact Us
                  </MenuLink>
                </li>
              </Box>
            </Grid>
            <Grid xs={12} sm={6} md={3} lg={3}>
              <MenuHeading component="p">Our Guides</MenuHeading>
              <Box
                role="menu"
                component="ul"
                sx={{ listStyleType: 'none', paddingLeft: 0, margin: '24px 0 0 0' }}
              >
                <li role="none">
                  <MenuLink to="/a-to-z-topics" role="menuitem">
                    A to Z Topics
                  </MenuLink>
                </li>
                <li role="none">
                  <MenuLink to="/how-to-support-tech-life-unity" role="menuitem">
                    Support Tech Life Unity
                  </MenuLink>
                </li>
                <li role="none">
                  <MenuLink to="/creative-commons" role="menuitem">
                    Creative Commons
                  </MenuLink>
                </li>
                <li role="none">
                  <MenuMuiLink
                    target="_blank"
                    href="https://app.enzuzo.com/policies/tos/df1f23ca-193b-11ef-a4e0-ffd2dd7ab335"
                    role="menuitem"
                  >
                    Terms of Service
                  </MenuMuiLink>
                </li>
                <li role="none">
                  <MenuMuiLink
                    target="_blank"
                    href="https://app.enzuzo.com/policies/cookies/df1f23ca-193b-11ef-a4e0-ffd2dd7ab335"
                    role="menuitem"
                  >
                    Cookie Policy
                  </MenuMuiLink>
                </li>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{
          backgroundColor: '#C2C2C2',
          textAlign: 'left',
          fontSize: '13px',
          fontWeight: 300,
          lineHeight: 0,
          padding: '20px 0',
        }}
      >
        <Container
          maxWidth="lg"
          component="nav"
          role="menubar"
          style={{ paddingLeft: '16px', paddingRight: '16px' }}
        >
          <p>
            <MuiLink
              role="menuitem"
              href="https://app.enzuzo.com/policies/privacy/df1f23ca-193b-11ef-a4e0-ffd2dd7ab335"
              target="_blank"
              rel="noopener"
              sx={{
                textDecoration: 'none',
                fontWeight: 400,
                fontSize: '16px',
                color: 'inherit',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              Privacy Policy
            </MuiLink>
            &nbsp; - Copyright {new Date().getFullYear()} Tech Life Unity
          </p>
        </Container>
      </Box>
    </Box>
  );
}
export default TLUFooter;
