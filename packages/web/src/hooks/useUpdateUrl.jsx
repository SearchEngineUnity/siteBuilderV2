/* eslint-disable import/prefer-default-export */
import { useEffect, useRef } from 'react';

export function useUpdateUrl() {
  const observer = useRef();

  useEffect(() => {
    const { pathname } = window.location;

    const handleObserver = (entries) => {
      entries.forEach((entry) => {
        if (
          entry?.isIntersecting &&
          ((entry.target.nodeName === 'SECTION' && entry.target.id) ||
            entry.target.nodeName === 'H1')
        ) {
          window.history.replaceState(
            null,
            null,
            `${entry.target.id ? `#${entry.target.id}` : pathname}`,
          );
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
}
