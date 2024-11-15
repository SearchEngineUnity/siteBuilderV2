/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import { Link } from 'gatsby-theme-material-ui';
import MuiLink from '@mui/material/Link';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { styled } from '@mui/material/styles';
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from './tluFooter.module.css';

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
    <footer className={styles.footer}>
      <div className={styles.footer_top}>
        <Container maxWidth="lg" component="nav" role="menubar">
          <Grid container spacing="40px">
            <Grid
              size={{
                xs: 12,
                md: 6,
                lg: 6,
              }}
            >
              <p className={styles.menu_heading}>Get In Touch</p>
              <p className={styles.contact}>
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
              </p>
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
                    href="https://www.facebook.com/TechLifeUnity"
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
                    href="https://www.linkedin.com/company/tech-life-unity/"
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
            <Grid
              size={{
                xs: 12,
                sm: 6,
                md: 3,
                lg: 3,
              }}
            >
              <p className={styles.menu_heading}>Work With Us</p>
              <ul role="menu" className={styles.footer_menu}>
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
              </ul>
            </Grid>
            <Grid
              size={{
                xs: 12,
                sm: 6,
                md: 3,
                lg: 3,
              }}
            >
              <p className={styles.menu_heading}>Our Guides</p>
              <ul role="menu" className={styles.footer_menu}>
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
              </ul>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={styles.footer_bottom}>
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
      </div>
    </footer>
  );
}
export default TLUFooter;
