import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby-theme-material-ui';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

function TileSgpListing({ image, tag, title, slug, hasVideo }) {
  const link = slug === '/' ? '/' : `/${slug}`;
  return (
    <Card
      sx={{
        borderRadius: '12px',
        height: '100%',
        color: 'text.primary',
        '&:hover': {
          boxShadow:
            'rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.25) 4px 6px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px',
          color: 'primary.main',
        },
        '&:not(:hover) img': {
          transition: 'transform 0.5s ease',
        },
        '&:hover img': {
          transform: 'scale(1.1)',
          transition: 'transform 0.5s ease',
        },
      }}
      elevation={1}
    >
      <Link
        to={link}
        underline="none"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          height: '100%',
          color: 'inherit',
          '&:focus': {
            boxShadow:
              'rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px',
            color: 'primary.main',
          },
          '&:focus img': {
            transform: 'scale(1.1)',
          },
        }}
      >
        <Box
          sx={{
            position: 'relative',
            height: {
              sm: '200px',
              // xs: '112px',
              xs: '100%',
            },
            width: {
              sm: '100%',
              xs: '33%',
            },
          }}
        >
          {hasVideo && (
            <Box
              sx={{
                position: 'absolute',
                zIndex: 1,
                color: 'common.white',
                bgcolor: 'common.white',
                bottom: { xs: '4px', sm: '8px' },
                right: { xs: '4px', sm: '8px' },
                width: { xs: '28px', sm: '48px' },
                height: { xs: '28px', sm: '48px' },
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                borderRadius: { xs: '6px', sm: '12px' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <PlayCircleIcon
                sx={{
                  color: 'common.white',
                  bgcolor: 'common.black',
                  borderRadius: { xs: '10px', sm: '18px' },
                  width: { xs: '20px', sm: '36px' },
                  height: { xs: '20px', sm: '36px' },
                }}
              />
            </Box>
          )}
          <GatsbyImage
            image={image}
            alt=""
            objectFit="cover"
            style={{ width: '100%', height: '100%' }}
          />
        </Box>
        <CardContent
          sx={{
            width: { sm: '100%', xs: '67%' },
            height: '100%',
            '@media (max-width: 599px)': { '&:last-child': { padding: '12px' } },
          }}
        >
          <Typography
            color="primary"
            variant="overline"
            component="div"
            fontWeight="fontWeightBold"
            textTransform="uppercase"
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: { xs: 1, sm: 'unset' },
              WebkitBoxOrient: 'vertical',
            }}
          >
            {tag}
          </Typography>
          <Typography
            variant="h5"
            fontWeight="fontWeightBold"
            component="div"
            sx={(theme) => ({
              color: theme.palette.text.primary,
              lineHeight: 1.2,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: { xs: 3, sm: 'unset' },
              WebkitBoxOrient: 'vertical',
              height: {
                sm: 'auto',
                xs:
                  parseFloat(theme.typography.h5.fontSize) *
                  parseFloat(theme.typography.htmlFontSize) *
                  1.2 *
                  3,
              },
            })}
          >
            {title}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
}

export default TileSgpListing;
