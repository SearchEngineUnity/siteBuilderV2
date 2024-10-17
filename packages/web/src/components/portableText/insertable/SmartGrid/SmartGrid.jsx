/* eslint-disable import/no-cycle */
import React from 'react';
import Grid from '@mui/material/Grid2';
import ProductCardGridPtTile from './ProductCardGridPtTile';
import PtTile from '../../serializer/HalfIndentSerializer';
import Illustration from '../Illustration';
import SmartUnorderedList from '../SmartUnorderedList';
import SmartOrderedList from '../SmartOrderedList';
import Video from '../Video';
import ConditionalButton from '../../../buttons/ConditionalButton';
import ClickableImage from '../ClickableImage';
import { mapMuiBtnToProps, mapVideoToProps } from '../../../../lib/mapToProps';

function SmartGrid({ layout, tiles }) {
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

  const componentMapping = {
    productCardGridPtTile: ProductCardGridPtTile,
    smartGridPtTile: PtTile,
    illustration: Illustration,
    video: Video,
    clickableImage: ClickableImage,
    btnBlockMui: ConditionalButton,
    smartOrderedList: SmartOrderedList,
    smartUnorderedList: SmartUnorderedList,
  };

  const propsMapping = (type, props) => {
    switch (type) {
      case 'illustration':
        return { illustration: props };
      case 'btnBlockMui':
        return { ...mapMuiBtnToProps(props) };
      case 'smartGridPtTile':
        return { blocks: props.content };
      case 'video':
        return { ...mapVideoToProps(props) };
      default:
        return props;
    }
  };

  const errorMsg = 'Tile still under development.';

  return (
    <Grid container spacing={2} className="smart-grid">
      {tiles &&
        tiles.map((tile) => {
          const { _key, _type } = tile;
          const Component = componentMapping[_type];
          const values = propsMapping(_type, tile);

          return (
            <Grid key={_key} size={col}>
              {Component ? <Component {...values} /> : errorMsg}
            </Grid>
          );
        })}
    </Grid>
  );
}

export default SmartGrid;
