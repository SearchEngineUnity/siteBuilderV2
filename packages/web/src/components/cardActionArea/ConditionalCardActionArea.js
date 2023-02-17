import React from 'react';
import CardActionAreaAffiliate from './CardActionAreaAffiliate';
import CardActionAreaExternal from './CardActionAreaExternal';
import CardActionAreaInternalGlobal from './CardActionAreaInternalGlobal';
import CardActionAreaInternalLocal from './CardActionAreaInternalLocal';
import CardActionAreaJumpLink from './CardActionAreaJumpLink';

function ConditionalCardActionArea({ condition, link, children }) {
  switch (condition) {
    case 'jumpLink':
      return <CardActionAreaJumpLink {...link}>{children}</CardActionAreaJumpLink>;
    case 'affiliateLink':
      return <CardActionAreaAffiliate {...link}>{children}</CardActionAreaAffiliate>;
    case 'externalLink':
      return <CardActionAreaExternal {...link}>{children}</CardActionAreaExternal>;
    case 'internalGlobal':
      return <CardActionAreaInternalGlobal {...link}>{children}</CardActionAreaInternalGlobal>;
    case 'internalLocal':
      return <CardActionAreaInternalLocal {...link}>{children}</CardActionAreaInternalLocal>;
    default:
      return children;
  }
}

export default ConditionalCardActionArea;
