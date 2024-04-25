import React, { useEffect, useRef } from 'react';
import { useInfiniteHits } from 'react-instantsearch';
import Box from '@mui/material/Box';
import CustomHitsComponent from './customHitsComponent';

function InfiniteScrollHits(props) {
  const { hits, isLastPage, showMore } = useInfiniteHits(props);
  const sentinelRef = useRef(null);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (sentinelRef.current !== null) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isLastPage) {
            showMore();
          }
        });
      });

      observer.observe(sentinelRef.current);

      return () => {
        observer.disconnect();
      };
    }
  }, [isLastPage, showMore]);

  return (
    <Box component="ul" sx={{ listStyle: 'none', paddingInlineStart: 0 }}>
      {hits.map((hit) => (
        <Box component="li" key={hit.objectID} sx={{ margin: '2em 0' }}>
          <CustomHitsComponent {...hit} />
        </Box>
      ))}
      <li className="ais-InfiniteHits-sentinel" ref={sentinelRef} aria-hidden="true" />
    </Box>
  );
}

export default InfiniteScrollHits;
