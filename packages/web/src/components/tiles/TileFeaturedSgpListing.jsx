import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby-theme-material-ui';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

function TileFeaturedSgpListing({ image, tag, title, slug, hasVideo, isFirst }) {
  const link = slug === '/' ? '/' : `/${slug}`;
  return (
    <Card
      sx={{
        borderRadius: '12px',
        height: '100%',
        color: 'text.primary',
        '&:hover, &:focus-within': {
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
          '&:focus img': {
            transform: 'scale(1.1)',
          },
        }}
      >
        <Box
          sx={{
            position: 'relative',
            height: {
              md: '290px',
              sm: isFirst ? '326px' : '215px',
              xs: isFirst ? '272px' : '100%',
            },
            width: {
              sm: '100%',
              xs: isFirst ? '100%' : '33%',
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
                bottom: { xs: isFirst ? '8px' : '4px', sm: '8px' },
                right: { xs: isFirst ? '8px' : '4px', sm: '8px' },
                width: { xs: isFirst ? '48px' : '28px', sm: '48px' },
                height: { xs: isFirst ? '48px' : '28px', sm: '48px' },
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                borderRadius: { xs: isFirst ? '12px' : '6px', sm: '12px' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <PlayCircleIcon
                sx={{
                  color: 'common.white',
                  bgcolor: 'common.black',
                  borderRadius: { xs: isFirst ? '18px' : '10px', sm: '18px' },
                  width: { xs: isFirst ? '36px' : '20px', sm: '36px' },
                  height: { xs: isFirst ? '36px' : '20px', sm: '36px' },
                }}
              />
            </Box>
          )}
          <GatsbyImage
            image={image}
            alt=""
            objectFit="cover"
            loading="eager"
            style={{ width: '100%', height: '100%' }}
          />
        </Box>
        <CardContent
          sx={{
            width: { sm: '100%', xs: isFirst ? '100%' : '67%' },
            height: '100%',
            '@media (max-width: 599px)': { '&:last-child': { padding: '12px' } },
          }}
        >
          <Typography
            color="primary"
            variant="h5"
            component="div"
            fontWeight="fontWeightBold"
            textTransform="uppercase"
            sx={{
              lineHeight: (theme) => theme.typography.overline.lineHeight,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: { xs: isFirst ? 'unset' : 1, sm: 'unset' },
              WebkitBoxOrient: 'vertical',
              '@media (max-width: 599px)': {
                fontSize: (theme) => theme.typography.overline.fontSize,
              },
            }}
          >
            {tag}
          </Typography>
          <Typography
            variant="h4"
            fontWeight="fontWeightBold"
            component="div"
            sx={(theme) => ({
              lineHeight: 1.2,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: { xs: isFirst ? 'unset' : 3, sm: 'unset' },
              WebkitBoxOrient: 'vertical',
              color: theme.palette.text.primary,
              '@media (min-width: 600px) and (max-width: 959px)': {
                fontSize: isFirst && '32px',
              },
              '@media (max-width: 599px)': {
                fontSize: isFirst ? '24px' : '1.125rem',
                height: isFirst ? 'auto' : 1.125 * 16 * 1.2 * 3,
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

export default TileFeaturedSgpListing;
