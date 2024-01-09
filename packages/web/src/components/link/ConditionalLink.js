import React from 'react';
import { Link } from 'gatsby-theme-material-ui';
import MuiLink from '@mui/material/Link';

function ConditionalLink({ link, children, className }) {
  let linkType = link._type;
  let { href } = link;
  const { hashId = '', newTab = false, noreferrer = false } = link;
  const noopenerTag = newTab ? 'noopener' : '';
  const nofollowTag = linkType === 'affiliateLink' ? 'nofollow' : '';
  const noreferrerTag = noreferrer ? 'noreferrer' : '';

  const target = newTab || linkType === 'affiliateLink' ? '_blank' : undefined;
  const rel = `${nofollowTag} ${noopenerTag} ${noreferrerTag}`.trim();

  if (linkType === 'jumpLink') {
    href = `#${hashId}`;
  }

  if (linkType === 'internalLocal' && newTab) {
    linkType = 'internalGlobal';
  }

  return (
    <>
      {linkType === 'jumpLink' && (
        <MuiLink underline="always" href={href} className={className}>
          {children}
        </MuiLink>
      )}
      {linkType !== 'jumpLink' && (
        <Link
          underline="always"
          target={target}
          rel={rel || undefined}
          to={linkType === 'internalLocal' ? href : undefined}
          href={linkType !== 'internalLocal' ? href : undefined}
          className={className}
        >
          {children}
        </Link>
      )}
    </>
  );
}

export default ConditionalLink;
