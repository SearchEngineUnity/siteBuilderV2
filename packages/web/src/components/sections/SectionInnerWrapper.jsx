import React from 'react';
import Container from '@mui/material/Container';
import { determineColor } from '../../lib/helperFunctions';

function SectionInnerWrapper({ designSettings, children }) {
  const bleed = designSettings ? !!designSettings?.bleed : true;
  const bgImage = designSettings?.bgImage?.asset?.url;
  const repeat = !!designSettings?.repeat;
  const backgroundColor = determineColor(designSettings?.background?.color) || 'transparent';
  const desktopPadding = designSettings?.innerPadding?.desktopPadding;
  const tabletPadding = designSettings?.innerPadding?.tabletPadding;
  const tabletMobilePadding = designSettings?.innerPadding?.tabletMobilePadding;
  const mobilePadding = designSettings?.innerPadding?.mobilePadding;
  const borderRadius = designSettings?.borderRadius || '0px';

  return (
    <Container
      maxWidth="lg"
      sx={[
        (theme) => ({
          borderRadius,
          padding: {
            lg: desktopPadding || theme.customSpacing.sectionInner.padding.desktop,
            md: tabletPadding || theme.customSpacing.sectionInner.padding.tablet,
            sm: tabletMobilePadding || theme.customSpacing.sectionInner.padding.tabletMobile,
            xs: mobilePadding || theme.customSpacing.sectionInner.padding.mobile,
          },
        }),
        !bleed && {
          bgcolor: backgroundColor,
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        },
        bgImage &&
          !bleed && {
            backgroundImage: `url(${bgImage})`,
          },
        repeat && {
          backgroundRepeat: 'repeat',
        },
      ]}
    >
      {children}
    </Container>
  );
}

export default SectionInnerWrapper;
