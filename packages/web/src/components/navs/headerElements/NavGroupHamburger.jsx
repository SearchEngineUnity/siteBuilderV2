import React from 'react';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import { Link } from 'gatsby-theme-material-ui';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function NavGroupHamburger({ navGroup }) {
  const [collapse, setCollapse] = React.useState(true);
  const handleClickCollapse = () => {
    setCollapse(!collapse);
  };

  return (
    <>
      <ListItem dense disableGutters>
        <ListItemButton dense disableGutters type="button" onClick={handleClickCollapse}>
          <ListItemText
            primary={navGroup.title}
            primaryTypographyProps={{ variant: 'body1', fontWeight: 'fontWeightBold' }}
            sx={{
              flex: '0 0 auto',
              '@media (max-width: 600px)': {
                color: (theme) => theme.palette.common.black,
              },
            }}
          />
          {collapse ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
        </ListItemButton>
      </ListItem>
      <Collapse in={!collapse} timeout="auto" unmountOnExit>
        <List role="menu" disablePadding>
          {navGroup.group.map(({ title: itemTitle, nav: itemNav, _key: itemKey }) => (
            <ListItem key={itemKey} dense>
              <ListItemButton
                dense
                component={Link}
                to={`/${itemNav.slug.current}`}
                role="menuitem"
              >
                <ListItemText
                  primary={itemTitle}
                  sx={{
                    '@media (max-width: 600px)': {
                      color: (theme) => theme.palette.common.black,
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem dense>
            <ListItemButton
              dense
              component={Link}
              to={`/${navGroup.nav.slug.current}`}
              role="menuitem"
            >
              <ListItemText
                primary="View All"
                sx={{
                  flex: '0 0 auto',
                  mr: '4px',
                }}
              />
              <ArrowForwardIcon fontSize="small" />
            </ListItemButton>
          </ListItem>
        </List>
      </Collapse>
    </>
  );
}

export default NavGroupHamburger;
