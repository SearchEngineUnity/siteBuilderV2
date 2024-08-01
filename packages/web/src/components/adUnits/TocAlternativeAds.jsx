// In your adsense component
import React, { useEffect } from 'react';

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
    <ins
      className="adsbygoogle"
      data-ad-client="ca-pub-6122705063625930"
      data-ad-slot="5529311585"
      style={{
        display: 'block',
      }}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}
