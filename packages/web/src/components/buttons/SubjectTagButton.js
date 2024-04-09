import { Button } from 'gatsby-theme-material-ui';
import { styled } from '@mui/material/styles';

const SubjectTagButton = styled(Button)(({ theme, ...props }) => {
  return {
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.fontWeightRegular,
    '@media (min-width: 600px)': {
      fontSize: theme.typography[props.fontSize || 'body1']['@media (min-width:600px)'].fontSize,
    },
    '@media (min-width: 960px)': {
      fontSize: theme.typography[props.fontSize || 'body1']['@media (min-width:960px)'].fontSize,
    },
    '@media (min-width: 1280px)': {
      fontSize: theme.typography[props.fontSize || 'body1']['@media (min-width:1280px)'].fontSize,
    },
    fontSize: theme.typography[props.fontSize || 'body1'].fontSize,
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textTransform: 'none',
    color: '#535353',
    padding: '4px 8px',
    borderColor: '#ABABAB',
    '&:hover': {
      borderColor: theme.palette.primary.main,
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.background.default,
    },
    '&:focus': {
      borderColor: theme.palette.primary.main,
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.background.default,
    },
  };
});

export default SubjectTagButton;
