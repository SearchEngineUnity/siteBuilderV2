import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Tile1 from '../tiles/TileImageRecSqr';
import Tile2 from '../tiles/TileImageCircle';
import Tile3 from '../tiles/TileImageTitleBorder';
import Tile4 from '../tiles/TileImageTitleTextBase';
import Tile5 from '../tiles/TileSmImageTitleText';
import Tile6 from '../tiles/TileImageTitle';
import Tile7 from '../tiles/TileImageTitleSubtitleTextListing';
import Tile8 from '../tiles/TileBorderSmImageTopTitleText';
import Tile9 from '../tiles/TileImageBackgroundTitle';

import StructuredSectionHeader from '../sections/StructuredSectionHeader';
import StructuredSectionFooter from '../sections/StructuredSectionFooter';
import { mapFluidImgToProps } from '../../lib/mapToProps';

function GridFlex({
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
  tileOption,
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
    <Grid container spacing={{ xs: 2, sm: 3 }} justifyContent="center">
      {(heading || subheading || subtitle) && (
        <Grid xs={12}>
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
        const tileSelector = (key) => {
          switch (key) {
            case '1':
              return <Tile1 {...mapFluidImgToProps(tile.tileImage)} link={tile.link[0]} />;
            case '2':
              return <Tile2 {...mapFluidImgToProps(tile.tileImage)} link={tile.link[0]} />;
            case '3':
              return (
                <Tile3
                  {...mapFluidImgToProps(tile.tileImage)}
                  link={tile.link[0]}
                  title={tile.title}
                />
              );
            case '4':
              return (
                <Tile4
                  {...mapFluidImgToProps(tile.tileImage)}
                  link={tile.link[0]}
                  title={tile.title}
                  text={tile.text}
                />
              );
            case '5':
              return (
                <Tile5
                  {...mapFluidImgToProps(tile.tileImage)}
                  link={tile.link[0]}
                  title={tile.title}
                  text={tile.text}
                />
              );
            case '6':
              return (
                <Tile6
                  {...mapFluidImgToProps(tile.tileImage)}
                  link={tile.link[0]}
                  title={tile.title}
                />
              );
            case '7':
              return (
                <Tile7
                  {...mapFluidImgToProps(tile.tileImage)}
                  link={tile.link[0]}
                  title={tile.title}
                  text={tile.text}
                  subtitle={tile.subtitle}
                />
              );
            case '8':
              return (
                <Tile8
                  {...mapFluidImgToProps(tile.tileImage)}
                  link={tile.link[0]}
                  title={tile.title}
                  text={tile.text}
                />
              );
            case '9':
              return (
                <Tile9
                  {...mapFluidImgToProps(tile.tileImage)}
                  link={tile.link[0]}
                  title={tile.title}
                />
              );
            default:
              return <div> Tile still under development</div>;
          }
        };

        return (
          <Grid key={tile._key} {...col}>
            {tileSelector(tileOption)}
          </Grid>
        );
      })}
      {footer && (
        <Grid xs={12}>
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

export default GridFlex;
