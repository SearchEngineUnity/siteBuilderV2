import { Button } from 'gatsby-theme-material-ui';
import { styled } from '@mui/material/styles';

const SubjectTagButton = styled(Button)(({ theme, ...props }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightRegular,
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
    backgroundColor: '#F8F8F8',
  },
  '&:focus': {
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
    backgroundColor: '#F8F8F8',
  },
}));

export default SubjectTagButton;
