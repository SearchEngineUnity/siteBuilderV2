import React from 'react';
import { Link } from 'gatsby-theme-material-ui';

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
    <Link
      target={target}
      rel={rel || undefined}
      to={linkType === 'internalLocal' ? href : undefined}
      href={linkType !== 'internalLocal' ? href : undefined}
      className={className}
    >
      {children}
    </Link>
  );
}

export default ConditionalLink;
