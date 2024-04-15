import React from 'react';
import { CardActionArea } from 'gatsby-theme-material-ui';

function ConditionalCardActionArea({ link, children, className }) {
  if (link) {
    let linkType = link?._type;

    let { href = undefined } = link;
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
      <CardActionArea
        target={target}
        rel={rel || undefined}
        to={linkType && linkType === 'internalLocal' ? href : undefined}
        href={linkType && linkType !== 'internalLocal' ? href : undefined}
        className={className}
      >
        {children}
      </CardActionArea>
    );
  }
  return children;
}

export default ConditionalCardActionArea;
