/* eslint-disable import/no-cycle */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import ProductCardFlexSegment from './ProductCardFlexSegment';
import { determineColor } from '../../../../lib/helperFunctions';
import ProductCardTopeCommerce from './ProductCardTopeCommerce';
import ProductCardTopApp from './ProductCardTopApp';
import ProductCardTopSite from './ProductCardTopSite';

const topSelector = {
  eCommerce: ProductCardTopeCommerce,
  app: ProductCardTopApp,
  site: ProductCardTopSite,
};

function Error() {
  return <Box sx={{ m: 3 }}>Product Card Top design unavailable</Box>;
}

function ProductCard({
  design = 'eCommerce',
  name,
  headingLevel,
  rating,
  image,
  tagText,
  tagColor,
  infoList,
  btnSet,
  iosLink,
  googlePlayLink,
  segments,
}) {
  const ProductCardTop = topSelector[design] || Error;

  return (
    <div className="product-card">
      {tagText && <br />}
      <Box sx={{ position: 'relative' }}>
        <Card>
          {tagText && (
            <Paper
              elevation={3}
              square
              sx={{
                backgroundColor: determineColor(tagColor?.color) || 'black',
                color: '#fff',
                position: 'absolute',
                top: '-20px',
                left: '-10px',
                display: 'inline-block',
                padding: '8px 16px',
                fontSize: '1rem',
                lineHeight: '1rem',
                fontWeight: 'bold',
                '&:after': {
                  content: '" "',
                  display: 'block',
                  position: 'absolute',
                  left: '-10px',
                  bottom: '-7px',
                  borderWidth: '0 10px 7px',
                  borderColor: `rgba(0, 0, 0, 0) ${
                    determineColor(tagColor?.color) || 'black'
                  } rgba(0, 0, 0, 0) rgba(0, 0, 0, 0)`,
                  borderStyle: 'inset solid inset inset',
                  filter: ' brightness(50%)',
                },
              }}
            >
              {tagText}
            </Paper>
          )}
          <ProductCardTop
            {...{
              name,
              headingLevel,
              rating,
              image,
              infoList,
              btnSet,
              iosLink,
              googlePlayLink,
            }}
          />
          {segments &&
            segments.map((segment) => {
              const { _type, _key } = segment;
              switch (_type) {
                case 'productCardFlexSegment':
                  return <ProductCardFlexSegment key={_key} {...segment} />;
                default:
                  return <div key="default-inner-block"> Block still under development</div>;
              }
            })}
        </Card>
      </Box>
    </div>
  );
}

export default ProductCard;
