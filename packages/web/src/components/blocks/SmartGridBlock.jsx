import React from 'react';
import Grid from '@mui/material/Grid2';
import StructuredSectionHeader from '../sections/StructuredSectionHeader';
import StructuredSectionFooter from '../sections/StructuredSectionFooter';
import ProductCardGridPtTile from '../portableText/insertable/SmartGrid/ProductCardGridPtTile';
import PtTile from '../portableText/serializer/HalfIndentSerializer';
import Illustration from '../portableText/insertable/Illustration';
import SmartUnorderedList from '../portableText/insertable/SmartUnorderedList';
import Video from '../portableText/insertable/Video';
import ConditionalButton from '../buttons/ConditionalButton';
import ClickableImage from '../portableText/insertable/ClickableImage';
import { mapMuiBtnToProps, mapVideoToProps } from '../../lib/mapToProps';

function SmartGridBlock({
  hasSectionHeading,
  hasSectionSubheading,
  hasSectionSubtitle,
  hasSectionFooter,
  heading,
  subheading,
  subtitle,
  footer,
  headerAlignment,
  footerAlignment,
  headingColor,
  subheadingColor,
  subtitleColor,
  footerColor,
  layout,
  tiles,
}) {
  // number of tiles desktop/tablet/tablet-mobile/mobile: '6/4/2/1' -> {lg: 2, md: 3, sm: 6, xs: 12}
  const colCalculate = (value) => {
    const valueArrStr = value.split('/');
    const valueArrNum = valueArrStr.map((el) => parseInt(el, 10));
    const colObj = {
      lg: 12 / valueArrNum[0],
      md: 12 / valueArrNum[1],
      sm: 12 / valueArrNum[2],
      xs: 12 / valueArrNum[3],
    };
    return colObj;
  };

  const col = colCalculate(layout);

  return (
    <Grid container spacing={{ xs: 2, sm: 3 }}>
      {(heading || subheading || subtitle) && (
        <Grid size={12}>
          <StructuredSectionHeader
            heading={heading}
            subheading={subheading}
            subtitle={subtitle}
            align={headerAlignment}
            hasSectionHeading={hasSectionHeading}
            hasSectionSubheading={hasSectionSubheading}
            hasSectionSubtitle={hasSectionSubtitle}
            headingColor={headingColor}
            subheadingColor={subheadingColor}
            subtitleColor={subtitleColor}
          />
        </Grid>
      )}
      {tiles.map((tile) => {
        const { _key, _type } = tile;

        const tileSelector = (key) => {
          switch (true) {
            case key === 'productCardGridPtTile':
              return <ProductCardGridPtTile {...tile} />;
            case key === 'smartGridPtTile':
              return <PtTile blocks={tile.content} />;
            case key === 'illustration':
              return <Illustration illustration={tile} />;
            case key === 'smartUnorderedList':
              return <SmartUnorderedList {...tile} />;
            case key === 'clickableImage':
              return <ClickableImage {...tile} />;
            case key === 'video':
              return <Video {...mapVideoToProps(tile)} />;
            case key === 'btnBlockMui':
              return <ConditionalButton {...mapMuiBtnToProps(tile)} />;
            default:
              return <div> Tile still under development</div>;
          }
        };

        return (
          <Grid key={_key} size={col}>
            {tileSelector(_type)}
          </Grid>
        );
      })}
      {footer && (
        <Grid size={12}>
          <StructuredSectionFooter
            footer={footer}
            footerColor={footerColor}
            align={footerAlignment}
            hasSectionFooter={hasSectionFooter}
          />
        </Grid>
      )}
    </Grid>
  );
}

export default SmartGridBlock;
