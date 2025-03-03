import React from 'react';
import Grid from '@mui/material/Grid2';
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
import { determineColor, stackColCalculator } from '../../lib/helperFunctions';

function StackFlex({
  idTag,
  heading,
  subheading,
  subtitle,
  blocks,
  footer,
  blockWidth,
  headerAlignment,
  footerAlignment,
  designSettings,
}) {
  const headingColor = determineColor(designSettings?.heading?.color) || 'text.primary';
  const subheadingColor = determineColor(designSettings?.subheading?.color) || 'inherit';
  const subtitleColor = determineColor(designSettings?.subtitle?.color) || 'inherit';
  const footerColor = determineColor(designSettings?.footer?.color) || 'inherit';

  return (
    <SectionOuterWrapper idTag={idTag} designSettings={designSettings}>
      <SectionInnerWrapper designSettings={designSettings}>
        <Grid
          container
          spacing={{ xs: 2, sm: 3 }}
          direction="column"
          sx={{
            alignItems: 'center',
          }}
        >
          {(heading || subheading || subtitle) && (
            <Grid size={12}>
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
          {blocks.map((block) => {
            const { _type, _key } = block;
            const col = stackColCalculator(parseInt(blockWidth, 10));
            const blockSelector = (key) => {
              switch (true) {
                case key === 'stepsBlock':
                  return <StepsBlock steps={block._rawSteps} />;
                case key === 'accordionBlock':
                  return <AccordionBlock accordionSet={block._rawAccordionSet} />;
                case key === 'smartGridBlock':
                  return (
                    <SmartGridBlock
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
                  return <Video {...mapVideoToProps(block)} />;
                case key === 'imageBlock':
                  return <ImgBlock {...mapFluidImgBlockToProps(block)} loading="eager" />;
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
                case key === 'clickableImage':
                  return <ClickableImage {...mapClickableImageToProps(block)} />;
                case key === 'blockFormNetlify':
                  return <BlockFormNetlify {...mapBlockFormNetlifyToProps(block)} />;
                case key === 'btnBlockMui':
                  return <ConditionalButton {...mapMuiBtnToProps(block)} />;
                case key === 'testimonialBlock':
                  return (
                    <TestimonialBlock
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
                  return <div> Block still under development</div>;
              }
            };
            return (
              <Grid size={col} key={_key}>
                {blockSelector(_type)}
              </Grid>
            );
          })}
          {footer && (
            <Grid size={12}>
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

export default StackFlex;
