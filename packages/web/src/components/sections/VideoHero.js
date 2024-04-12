import React from 'react';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import Box from '@mui/material/Box';
import { GatsbyImage } from 'gatsby-plugin-image';
import ConditionalButton from '../buttons/ConditionalButton';
import SectionInnerWrapper from './SectionInnerWrapper';
import { determineColor } from '../../lib/helperFunctions';
import sanityConfig from '../../lib/sanityConfig';
import { mapMuiBtnToProps } from '../../lib/mapToProps';

function VideoHero({
  idTag,
  heading,
  headingAlignment,
  button,
  imageAlt,
  image,
  imageAlignment,
  videoUrl,
  designSettings,
}) {
  const imageData = getGatsbyImageData(image, {}, sanityConfig);
  const headingColor = determineColor(designSettings?.heading?.color) || 'text.primary';
  const backgroundColor = determineColor(designSettings?.background?.color) || 'primary.main';
  const backgroundImage = designSettings?.bgImage?.asset?.url;
  const desktopPadding = designSettings?.outerPadding?.desktopPadding;
  const tabletPadding = designSettings?.outerPadding?.tabletPadding;
  const tabletMobilePadding = designSettings?.outerPadding?.tabletMobilePadding;
  const mobilePadding = designSettings?.outerPadding?.mobilePadding;

  return (
    <Box
      component="header"
      id={idTag}
      sx={{
        py: 5,
        width: '100%',
        position: 'relative',
        zIndex: '0',
        minHeight: { lg: '700px', md: '500px', sm: '400px', xs: '350px' },
        display: 'flex',
        flexDirection: 'stack',
        alignItems: 'flex-end',
      }}
    >
      <Box
        sx={{
          height: '100%',
          objectFit: 'cover',
          position: 'absolute',
          top: '0',
          left: '0',
          zIndex: '-1',
          width: '100%',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundColor,
        }}
      >
        {videoUrl && (
          <Box
            component="video"
            autoPlay
            muted
            loop
            playsInline
            sx={{
              height: '100%',
              objectFit: 'cover',
              width: '100%',
              overflowClipMargin: 'content-box',
              overflow: 'clip',
            }}
          >
            <source src={videoUrl} type="video/mp4" />
          </Box>
        )}
      </Box>
      <Box
        sx={
          ([
            (theme) => ({
              padding: {
                lg: desktopPadding || theme.customSpacing.sectionOuter.padding.desktop,
                md: tabletPadding || theme.customSpacing.sectionOuter.padding.tablet,
                sm: tabletMobilePadding || theme.customSpacing.sectionOuter.padding.tabletMobile,
                xs: mobilePadding || theme.customSpacing.sectionOuter.padding.mobile,
              },
            }),
          ],
          { width: '100%' })
        }
      >
        <SectionInnerWrapper designSettings={designSettings}>
          {image && (
            <Box sx={{ display: 'flex', justifyContent: imageAlignment }}>
              <Box sx={{ maxWidth: { xs: '100%', sm: '80%' } }}>
                <GatsbyImage image={imageData} loading="eager" objectFit="contain" alt={imageAlt} />
              </Box>
            </Box>
          )}
          {heading && (
            <Box
              component="h1"
              textAlign={headingAlignment}
              sx={{
                color: headingColor,
                fontSize: { xl: '48px', md: '36px', xs: '24px' },
                lineHeight: 'normal',
                fontWeight: 600,
                py: '0.25em',
                textTransform: 'uppercase',
              }}
            >
              {heading}
            </Box>
          )}
          {button.text && <ConditionalButton {...mapMuiBtnToProps(button)} />}
        </SectionInnerWrapper>
      </Box>
    </Box>
  );
}

export default VideoHero;
