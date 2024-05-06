import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import FluidImgBlock from '../../../blocks/FluidImgBlock';
import Content from '../../serializer/NoIndentSerializer';
import ConditionalButton from '../../../buttons/ConditionalButton';

export default function SiteProductGridTile({ pageJumpText, tile, tilePosition }) {
  const {
    specialTagText,
    tileImage,
    name,
    content,
    btnText,
    btnLink,
    jumpLink: { hashId },
  } = tile;
  const {
    alt,
    asset: { gatsbyImageData },
  } = tileImage;

  return (
    <Card
      elevation={1}
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row', lg: 'column' },
        flexWrap: 'wrap',
        height: '100%',
        '& .caption-text': {
          color: 'text.primary',
        },
        '& .caption-link': {
          color: 'text.primary',
          textDecorationColor: 'currentcolor',
        },
      }}
    >
      <CardHeader
        sx={{
          color: 'common.white',
          bgcolor: '#2E2E2E',
          textAlign: { xs: 'center', sm: 'left', lg: 'center' },
          width: '100%',
          order: 1,
        }}
        title={
          <Typography variant="h4" component="p" fontWeight="fontWeightBold">
            {specialTagText}
          </Typography>
        }
      />
      <Box
        sx={{
          padding: '16px 16px 16px',
          flex: 1,
          order: 2,
          mx: 'auto',
        }}
      >
        <FluidImgBlock loading="eager" alt={alt} image={gatsbyImageData} />
      </Box>
      <Box
        sx={{
          flex: { xs: '1 0 auto', sm: 3, lg: '1 0 auto' },
          order: { xs: 3, sm: 4, lg: 3 },
        }}
      >
        {name && (
          <Typography
            variant="h5"
            color="text.secondary"
            component="p"
            sx={{
              padding: { xs: '0px 16px 16px', sm: '16px 16px 0px', lg: '0px 16px 16px' },
              textAlign: { xs: 'center', sm: 'left', lg: 'center' },
            }}
          >
            {name}
          </Typography>
        )}
        <Box
          sx={{
            padding: {
              xs: '0px 16px 16px',
              sm: '16px',
              lg: '0px 16px 16px',
              // color: 'text.secondary',
            },
          }}
          className="product-grid-tile__content"
        >
          <Content blocks={content} />
        </Box>
      </Box>
      <Box
        sx={{
          padding: { xs: '0px 16px 16px', md: '16px', lg: '0px 16px 16px' },
          flex: { xs: 0, sm: '1 0 100%', md: 1, lg: 0 },
          order: { xs: 4, sm: 5, lg: 4 },
        }}
      >
        <ConditionalButton
          link={btnLink}
          variant="contained"
          padding="6px 16px"
          fullWidth
          text={btnText}
          typography={{ fontSize: '18px', fontWeight: 400 }}
          disableElevation
          borderRadius="6px"
          border="solid 1px #ABABAB"
          className={`product-grid-tile__btn tile_position-${tilePosition}`}
        />
        {pageJumpText && hashId && (
          <Box
            sx={{
              padding: '16px 16px 0px',
            }}
          >
            <Link
              href={`#${hashId}`}
              underline="none"
              color="text.secondary"
              sx={{
                textAlign: 'center',
                display: 'block',
              }}
              className="product-grid__jump-link"
            >
              {pageJumpText}
            </Link>
          </Box>
        )}
      </Box>
    </Card>
  );
}
