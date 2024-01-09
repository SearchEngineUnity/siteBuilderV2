import React from 'react';
import Box from '@mui/material/Box';
import { determineColor } from '../../lib/helperFunctions';

function SectionOuterWrapper({ idTag, designSettings, children, isHero }) {
  const bleed = designSettings ? !!designSettings?.bleed : true;
  const bgImage = designSettings?.bgImage?.asset?.url;
  const repeat = !!designSettings?.repeat;
  const backgroundColor = determineColor(designSettings?.background?.color) || 'transparent';
  const foregroundColor = determineColor(designSettings?.foreground?.color) || 'text.primary';
  const linkColor = determineColor(designSettings?.link?.color) || 'initial';
  const captionColor = determineColor(designSettings?.caption?.color) || '#757575';
  const desktopPadding = designSettings?.outerPadding?.desktopPadding;
  const tabletPadding = designSettings?.outerPadding?.tabletPadding;
  const tabletMobilePadding = designSettings?.outerPadding?.tabletMobilePadding;
  const mobilePadding = designSettings?.outerPadding?.mobilePadding;

  return (
    <Box
      id={idTag}
      component={isHero ? 'header' : 'section'}
      sx={[
        (theme) => ({
          color: foregroundColor,
          padding: {
            lg: desktopPadding || theme.customSpacing.sectionOuter.padding.desktop,
            md: tabletPadding || theme.customSpacing.sectionOuter.padding.tablet,
            sm: tabletMobilePadding || theme.customSpacing.sectionOuter.padding.tabletMobile,
            xs: mobilePadding || theme.customSpacing.sectionOuter.padding.mobile,
          },
          '& .pt-link': {
            color: linkColor,
            textDecorationColor: 'currentcolor',
          },
          '& .caption-text': {
            color: captionColor,
            textDecorationColor: 'currentcolor',
          },
          '& .caption-link': {
            color: captionColor,
            textDecorationColor: 'currentcolor',
          },
        }),
        bleed && {
          bgcolor: backgroundColor,
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        },
        bgImage &&
          bleed && {
            backgroundImage: `url(${bgImage})`,
          },
        repeat && { backgroundRepeat: 'repeat' },
      ]}
    >
      {children}
    </Box>
  );
}

export default SectionOuterWrapper;
