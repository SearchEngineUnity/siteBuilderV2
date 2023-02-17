/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import { Card, Paper, Box, Typography, Grid } from '@mui/material';
import ButtonBase from '@mui/material/ButtonBase';
import { makeStyles } from 'tss-react/mui';
import Modal from '@mui/material/Modal';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage } from 'gatsby-plugin-image';
import sanityConfig from '../../../../lib/sanityConfig';
import ProductCardFlexSegment from './ProductCardFlexSegment';
import ProductCardDividerSegment from './ProductCardDividerSegment';
import ProductInfoList from './ProductInfoList';
import ProductCardRating from './ProductCardRating';
import ButtonAffiliate from '../../../buttons/ButtonAffiliate';
import Caption from '../../serializer/CaptionSerializer';
import { mapMuiBtnToProps } from '../../../../lib/mapToProps';
import { determineColor } from '../../../../lib/helperFunctions';

const useStyles = makeStyles()((theme, { tagColor }) => ({
  paper: {
    display: 'flex',
    width: '50vw',
    height: '50vh',
    [theme.breakpoints.down('sm')]: {
      width: '80vw',
      height: '80vh',
    },
    backgroundColor: theme.palette.background.paper,
    border: 'none',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2),
    justifyContent: 'center',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0,
    transition: theme.transitions.create('opacity'),
    color: 'white',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  enlarge: {
    border: 'none',
    background: 'none',
    height: 'auto',
    width: '100%',
    cursor: 'pointer',
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.4,
      },
    },
  },
  focusVisible: {},
  tag: {
    backgroundColor: determineColor(tagColor?.color) || 'black',
    color: '#fff',
    position: 'absolute',
    top: '-20px',
    left: '-10px',
    display: 'inline-block',
    padding: '8px 16px',
    fontSize: '1rem',
    lineHeight: '1rem',
    fontWeight: theme.typography.fontWeightBold,
    '&:after': {
      content: '" "',
      display: 'block',
      position: 'absolute',
      left: '-10px',
      bottom: '-7px',
      borderWidth: '0 10px 7px',
      borderColor: (props) =>
        `rgba(0, 0, 0, 0) ${
          determineColor(tagColor?.color) || 'black'
        } rgba(0, 0, 0, 0) rgba(0, 0, 0, 0)`,
      borderStyle: 'inset solid inset inset',
      filter: ' brightness(50%)',
    },
  },
}));

function ProductCard({
  name,
  headingLevel,
  rating,
  image,
  tagText,
  tagColor,
  infoList,
  topBtn,
  segments,
}) {
  const { classes } = useStyles({ tagColor });

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const imageData = getGatsbyImageData(
    image,
    {
      layout: 'constrained',
    },
    sanityConfig,
  );

  return (
    <>
      {tagText && <br />}
      <Box sx={{ position: 'relative' }}>
        <Card>
          {tagText && (
            <Paper elevation={3} className={classes.tag} square>
              {tagText}
            </Paper>
          )}
          <Box margin={3}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm={4}>
                <ButtonBase
                  type="button"
                  onClick={handleOpen}
                  className={classes.enlarge}
                  focusVisibleClassName={classes.focusVisible}
                >
                  <GatsbyImage
                    image={imageData}
                    alt={image?.alt}
                    style={{ display: 'block', maxWidth: '100%', maxHeight: '240px' }}
                    objectFit="contain"
                  />
                  <span className={classes.imageBackdrop}>
                    <ZoomInIcon style={{ fontSize: '120px' }} />
                  </span>
                </ButtonBase>
                {image.caption && <Caption blocks={image.caption} />}
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="simple-modal-title"
                  aria-describedby="simple-modal-description"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <div className={classes.paper}>
                    <GatsbyImage
                      image={imageData}
                      alt={image?.alt}
                      objectFit="contain"
                      style={{ display: 'block', maxWidth: '100%', height: 'auto' }}
                    />
                  </div>
                </Modal>
                <br />
                <ButtonAffiliate {...mapMuiBtnToProps(topBtn)} />
                <br />
              </Grid>
              <Grid item xs={12} sm={8}>
                <Typography component={headingLevel} variant="h4">
                  {name}
                </Typography>
                <ProductCardRating rating={rating} />
                <ProductInfoList infoList={infoList} />
              </Grid>
            </Grid>
          </Box>
          {segments.map((segment) => {
            const { _type, _key } = segment;
            switch (_type) {
              case 'productCardFlexSegment':
                return <ProductCardFlexSegment key={_key} {...segment} />;
              case 'productCardDividerSegment':
                return <ProductCardDividerSegment key={_key} />;
              default:
                return <div key="default-inner-block"> Block still under development</div>;
            }
          })}
        </Card>
      </Box>
    </>
  );
}

export default ProductCard;
