import React from 'react';
import { useStats } from 'react-instantsearch';
import InfiniteScrollHits from './infiniteScrollHits';

function HitsSwitcher() {
  const { query } = useStats();

  if (query) {
    return <InfiniteScrollHits />;
  }
  return null;
}

export default HitsSwitcher;
