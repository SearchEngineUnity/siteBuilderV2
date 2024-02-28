import { SiNetlify } from 'react-icons/si';
import { RiGatsbyLine } from 'react-icons/ri';

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

export function DigitalOceanPreviewAction({ published, draft }) {
  const doc = draft || published;

  if (!doc) return null;

  let slug = doc?.slug?.current;

  if (slug && slug === '/') {
    slug = '';
  }

  return {
    disabled: !slug,
    icon: RiGatsbyLine,
    label: 'Open Preview',
    onHandle: () => {
      window.open(`https://dolphin-app-qszku.ondigitalocean.app/${slug}`);
    },
  };
}
