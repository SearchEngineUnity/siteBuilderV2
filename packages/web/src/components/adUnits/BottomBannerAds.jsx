// In your adsense component
import React, { useEffect } from 'react';
import Box from '@mui/material/Box';

export default function BottomBannerAds() {
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
      data-ad-slot="8473046763"
      sx={{
        display: 'block',
        height: { lg: '90px', xs: '60px' },
        width: '100%',
        maxWidth: '1280px',
        border: '1px solid #ABB8C3',
      }}
    />
  );
}
