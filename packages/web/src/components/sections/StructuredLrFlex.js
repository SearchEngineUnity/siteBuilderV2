import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import ImgBlock from '../blocks/FluidImgBlock';
import Video from '../portableText/insertable/Video';
import SectionBlock from '../blocks/SectionBlock';
import ConditionalButton from '../buttons/ConditionalButton';
import GridFlex from '../blocks/BlockGridFlex';
import BlockFormNetlify from '../blocks/BlockFormNetlify';
import TestimonialBlock from '../blocks/TestimonialBlock';
import ClickableImage from '../portableText/insertable/ClickableImage';
import SmartGridBlock from '../blocks/SmartGridBlock';
import AccordionBlock from '../portableText/insertable/Accordion';
import StepsBlock from '../blocks/StepsBlock';
import {
  mapFluidImgBlockToProps,
  mapSectionBlockToProps,
  mapMuiBtnToProps,
  mapGridFlexToProps,
  mapBlockFormNetlifyToProps,
  mapTestimonialBlockToProps,
  mapClickableImageToProps,
  mapSmartGridBlockToProps,
  mapVideoToProps,
} from '../../lib/mapToProps';
import StructuredSectionFooter from './StructuredSectionFooter';
import StructuredSectionHeader from './StructuredSectionHeader';
import SectionOuterWrapper from './SectionOuterWrapper';
import SectionInnerWrapper from './SectionInnerWrapper';
import { determineColor, lrColCalculator } from '../../lib/helperFunctions';

function StructuredLrFlex({
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
  const headingColor = determineColor(designSettings?.heading?.color) || 'text.secondary';
  const subheadingColor = determineColor(designSettings?.subheading?.color) || 'inherit';
  const subtitleColor = determineColor(designSettings?.subtitle?.color) || 'inherit';
  const footerColor = determineColor(designSettings?.footer?.color) || 'inherit';

  return (
    <SectionOuterWrapper idTag={idTag} designSettings={designSettings}>
      <SectionInnerWrapper designSettings={designSettings}>
        <Grid
          container
          justifyContent="center"
          alignItems={blockAlignment}
          spacing={{ xs: 2, sm: 3 }}
        >
          {(heading || subheading || subtitle) && (
            <Grid xs={12}>
              <StructuredSectionHeader
                heading={heading}
                subheading={subheading}
                subtitle={subtitle}
                headingColor={headingColor}
                subheadingColor={subheadingColor}
                subtitleColor={subtitleColor}
                align={headerAlignment}
              />
            </Grid>
          )}
          {blocks.map((block, index) => {
            const { _type, _key } = block;
            const col = lrColCalculator(colArr[index]);
            const blockSelector = (key) => {
              switch (true) {
                case key === 'stepsBlock':
                  return <StepsBlock key={_key} steps={block._rawSteps} />;
                case key === 'accordionBlock':
                  return <AccordionBlock key={_key} accordionSet={block._rawAccordionSet} />;
                case key === 'smartGridBlock':
                  return (
                    <SmartGridBlock
                      key={block._key}
                      hasSectionHeading={!!heading}
                      hasSectionSubheading={!!subheading}
                      hasSectionFooter={!!footer}
                      hasSectionSubtitle={!!subtitle}
                      headingColor={headingColor}
                      subheadingColor={subheadingColor}
                      subtitleColor={subtitleColor}
                      footerColor={footerColor}
                      {...mapSmartGridBlockToProps(block)}
                    />
                  );
                case key === 'video':
                  return <Video {...mapVideoToProps(block)} key={_key} />;
                case key === 'imageBlock':
                  return <ImgBlock {...mapFluidImgBlockToProps(block)} key={_key} />;
                case key === 'clickableImage':
                  return <ClickableImage {...mapClickableImageToProps(block)} />;
                case key === 'sectionBlock':
                  return (
                    <SectionBlock
                      hasSectionHeading={!!heading}
                      hasSectionSubheading={!!subheading}
                      hasSectionFooter={!!footer}
                      hasSectionSubtitle={!!subtitle}
                      headingColor={headingColor}
                      subheadingColor={subheadingColor}
                      subtitleColor={subtitleColor}
                      footerColor={footerColor}
                      {...mapSectionBlockToProps(block)}
                    />
                  );
                case key === 'gridFlex':
                  return (
                    <GridFlex
                      key={block._key}
                      hasSectionHeading={!!heading}
                      hasSectionSubheading={!!subheading}
                      hasSectionFooter={!!footer}
                      hasSectionSubtitle={!!subtitle}
                      headingColor={headingColor}
                      subheadingColor={subheadingColor}
                      subtitleColor={subtitleColor}
                      footerColor={footerColor}
                      {...mapGridFlexToProps(block)}
                    />
                  );
                case key === 'blockFormNetlify':
                  return (
                    <BlockFormNetlify key={block._key} {...mapBlockFormNetlifyToProps(block)} />
                  );
                case key === 'btnBlockMui':
                  return <ConditionalButton {...mapMuiBtnToProps(block)} />;
                case key === 'testimonialBlock':
                  return (
                    <TestimonialBlock
                      key={_key}
                      hasSectionHeading={!!heading}
                      hasSectionSubheading={!!subheading}
                      hasSectionFooter={!!footer}
                      hasSectionSubtitle={!!subtitle}
                      headingColor={headingColor}
                      subheadingColor={subheadingColor}
                      subtitleColor={subtitleColor}
                      footerColor={footerColor}
                      {...mapTestimonialBlockToProps(block)}
                    />
                  );
                default:
                  return <div key="default-inner-block"> Block still under development</div>;
              }
            };
            return (
              <Grid
                {...col}
                key={block._key}
                sx={[
                  index === 0 && reverseOrder && { order: { xs: 2, sm: 1 } },
                  index === 1 && reverseOrder && { order: { xs: 1, sm: 2 } },
                ]}
              >
                {blockSelector(_type)}
              </Grid>
            );
          })}
          {footer && (
            <Grid xs={12}>
              <StructuredSectionFooter
                footer={footer}
                footerColor={footerColor}
                align={footerAlignment}
              />
            </Grid>
          )}
        </Grid>
      </SectionInnerWrapper>
    </SectionOuterWrapper>
  );
}

export default StructuredLrFlex;
