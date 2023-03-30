import React from 'react';
import Grid from '@mui/material/Grid';
import ImgBlock from '../blocks/FluidImgBlock';
import VideoBlock from '../blocks/VideoBlock';
import HeroSectionBlock from '../blocks/HeroSectionBlock';
import SectionBlock from '../blocks/SectionBlock';
import GridFlex from '../blocks/BlockGridFlex';
import BlockFormNetlify from '../blocks/BlockFormNetlify';
import TestimonialGrid from '../blocks/TestimonialGrid';
import ClickableImage from '../portableText/insertable/ClickableImage';
import SmartGridBlock from '../blocks/SmartGridBlock';
import HeroSectionHeader from './HeroSectionHeader';
import HeroSectionFooter from './HeroSectionFooter';
import {
  mapFluidImgBlockToProps,
  mapSectionBlockToProps,
  mapGridFlexToProps,
  mapBlockFormNetlifyToProps,
  mapTestimonialGridToProps,
  mapClickableImageToProps,
  mapSmartGridBlockToProps,
} from '../../lib/mapToProps';
import SectionOuterWrapper from './SectionOuterWrapper';
import SectionInnerWrapper from './SectionInnerWrapper';
import ConditionalButton from '../buttons/ConditionalButton';
import { determineColor, lrColCalculator } from '../../lib/helperFunctions';

const blockMapping = {
  smartGridBlock: SmartGridBlock,
  videoBlock: VideoBlock,
  imageBlock: ImgBlock,
  heroBlock: HeroSectionBlock,
  sectionBlock: SectionBlock,
  gridFlex: GridFlex,
  blockFormNetlify: BlockFormNetlify,
  clickableImage: ClickableImage,
  btnBlockMui: ConditionalButton,
  testimonialGrid: TestimonialGrid,
};

const propsMapping = (type, data) => {
  console.log(type);
  switch (type) {
    case 'smartGridBlock':
      return { ...mapSmartGridBlockToProps(data) };
    case 'videoBlock':
      return { url: data.url, ratio: data.ratio };
    case 'imageBlock':
      return { loading: 'eager', ...mapFluidImgBlockToProps(data) };
    case 'heroBlock':
      return { ...mapSectionBlockToProps(data) };
    case 'sectionBlock':
      return { ...mapSectionBlockToProps(data) };
    case 'gridFlex':
      return { ...mapGridFlexToProps(data) };
    case 'blockFormNetlify':
      return { ...mapBlockFormNetlifyToProps(data) };
    case 'clickableImage':
      return { ...mapClickableImageToProps(data) };
    case 'btnBlockMui':
      return { condition: data.link[0]._type, values: data };
    case 'testimonialGrid':
      return { ...mapTestimonialGridToProps(data) };
    default:
      return data;
  }
};

// issue with blockformnetlify style bgfieldColor
// issue with clickable image
// issue with image block
// issue with smart grid
// issue with testimonial

function LrFlexHero({
  idTag,
  heading,
  subheading,
  subtitle,
  blocks,
  footer,
  layout,
  blockAlignment,
  headerAlignment,
  footerAlignment,
  reverseOrder,
  designSettings,
}) {
  const colArr = layout.split(':').map((el) => parseInt(el, 10));
  const headingColor = determineColor(designSettings?.heading?.color) || 'inherit';
  const subheadingColor = determineColor(designSettings?.subheading?.color) || 'inherit';
  const subtitleColor = determineColor(designSettings?.subtitle?.color) || 'inherit';
  const footerColor = determineColor(designSettings?.footer?.color) || 'inherit';

  const headerFooterProps = {
    hasSectionHeading: !!heading,
    hasSectionSubheading: !!subheading,
    hasSectionFooter: !!footer,
    hasSectionSubtitle: !!subtitle,
    headingColor,
    subheadingColor,
    subtitleColor,
    footerColor,
  };

  console.log(headerFooterProps);
  return (
    <SectionOuterWrapper idTag={idTag} designSettings={designSettings}>
      <SectionInnerWrapper designSettings={designSettings}>
        <HeroSectionHeader
          heading={heading}
          subheading={subheading}
          subtitle={subtitle}
          headingColor={headingColor}
          subheadingColor={subheadingColor}
          subtitleColor={subtitleColor}
          align={headerAlignment}
        />
        <Grid container justifyContent="center" alignItems={blockAlignment} spacing={6}>
          {blocks.map((block, index) => {
            const col = lrColCalculator(colArr[index]);
            const { _type, _key } = block;
            const Block = blockMapping[_type];
            const values = propsMapping(_type, block);

            return Block ? (
              <Grid
                item
                {...col}
                key={_key}
                sx={[
                  index === 0 && reverseOrder && { order: { xs: 2, sm: 1 } },
                  index === 1 && reverseOrder && { order: { xs: 1, sm: 2 } },
                ]}
              >
                <HeroSectionHeader
                  heading={heading}
                  subheading={subheading}
                  subtitle={subtitle}
                  align={headerAlignment}
                  hasSectionHeading={!!heading}
                  hasSectionSubheading={!!subheading}
                  hasSectionSubtitle={!!subtitle}
                  headingColor={headingColor}
                  subheadingColor={subheadingColor}
                  subtitleColor={subtitleColor}
                />
                <Block {...values} />
                <HeroSectionFooter
                  footer={footer}
                  footerColor={footerColor}
                  align={footerAlignment}
                  hasSectionFooter={!!footer}
                />
              </Grid>
            ) : (
              <div>undefined block</div>
            );
          })}
        </Grid>
        <HeroSectionFooter footer={footer} footerColor={footerColor} align={footerAlignment} />
      </SectionInnerWrapper>
    </SectionOuterWrapper>
  );
}

export default LrFlexHero;
