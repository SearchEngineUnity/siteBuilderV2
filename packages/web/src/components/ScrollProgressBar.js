import React, { useState, useEffect } from 'react';
import LinearProgress from '@mui/material/LinearProgress';

export default function ScrollPRogressBar() {
  const [progress, setProgress] = useState(0);

  const getDocHeight = () =>
    Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight,
    );

  const calculateScrollDistance = () => {
    const scrollTop = window.pageYOffset;
    const winHeight = window.innerHeight;
    const docHeight = getDocHeight();
    const totalDocScrollLength = docHeight - winHeight;
    const scrollPosition = Math.floor((scrollTop / totalDocScrollLength) * 100);

    setProgress(scrollPosition);
  };

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        calculateScrollDistance();
      });
    };
    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    calculateScrollDistance();
  });

  return (
    <LinearProgress
      sx={{ width: '100%', position: 'sticky', top: 0, zIndex: 5, height: '0.4rem' }}
      aria-label="scroll depth indicator"
      variant="determinate"
      value={progress}
      color="secondary"
    />
  );
}
