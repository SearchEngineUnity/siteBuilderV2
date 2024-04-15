/* eslint-disable import/prefer-default-export */

import { useEffect, useState, useRef } from 'react';

export function useSectionsObserver() {
  const observer = useRef();
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const handleObserver = (entries) => {
      entries.forEach((entry) => {
        if (
          entry?.isIntersecting &&
          ((entry.target.nodeName === 'SECTION' && entry.target.id) ||
            entry.target.nodeName === 'H1')
        ) {
          setActiveId(entry.target.id);
        }
      });
    };

    observer.current = new IntersectionObserver(handleObserver, {
      rootMargin: '-10% 0% -80% 0px',
    });

    const elements = document.querySelectorAll('h1, section');
    elements.forEach((elem) => observer.current.observe(elem));

    return () => observer.current?.disconnect();
  }, []);

  return { activeId };
}
