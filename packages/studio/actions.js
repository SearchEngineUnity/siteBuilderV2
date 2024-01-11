/* eslint-disable import/prefer-default-export */
import { SiNetlify } from 'react-icons/si';

export function NetlifyViewAction({ published, draft }) {
  const doc = draft || published;

  if (!doc) return null;
  let slug = doc?.slug?.current;

  if (slug && slug !== '/') {
    slug = `/${slug}`;
  }

  return {
    disabled: !slug,
    icon: SiNetlify,
    label: 'Open on Netlify',
    onHandle: () => {
      window.open(`https://sitebuilderv2.netlify.app${slug}`);
    },
  };
}
