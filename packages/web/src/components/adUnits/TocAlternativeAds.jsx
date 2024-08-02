// In your adsense component
import React, { useEffect } from 'react';
import Box from '@mui/material/Box';

export default function TocAlternativeAds() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') {
      if (window) {
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (error) {
          console.log(error, 'adsenese error');
        }
      }
    }
  }, []);

  return (
    <Box
      component="ins"
      className="adsbygoogle"
      data-ad-client="ca-pub-6122705063625930"
      data-ad-slot="5529311585"
      sx={{
        position: 'sticky',
        top: 62,
        display: 'block',
        maxWidth: '210px',
        width: '100%',
        height: '300px !important',
        '@media (min-width: 1280px)': {
          maxWidth: '290px',
        },
      }}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}
