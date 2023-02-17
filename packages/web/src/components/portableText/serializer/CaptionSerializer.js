import { PortableText } from '@portabletext/react';
import React from 'react';
import { Typography } from '@mui/material';
import ExternalLink from '../../link/LinkExternal';
import InternalGlobal from '../../link/LinkInternalGlobal';
import InternalLocal from '../../link/LinkInternalLocal';
import AffiliateLink from '../../link/LinkAffiliate';

const serializers = {
  // not sure if this container thing works anymore
  container: (props) => <figcaption style={{ textAlign: 'center' }}>{props.children}</figcaption>,
  types: {
    block: {
      normal: ({ children }) => {
        return children[0] ? (
          <Typography
            gutterBottom
            variant="caption"
            component="p"
            className="caption-text"
            sx={{ fontStyle: 'italic' }}
          >
            {children}
          </Typography>
        ) : (
          <br />
        );
      },
    },
  },
  marks: {
    internalLocal: ({ value, children }) => {
      const { slug = {} } = value.reference;
      const { newTab, hashId, parameter } = value;
      const baseSlug = slug.current === '/' ? `/` : `/${slug.current}`;
      const href = `${baseSlug}${hashId ? `#${hashId}` : ''}${parameter ? `?${parameter}` : ''}`;
      return (
        <InternalLocal href={href} newTab={newTab} className="caption-link">
          {children}
        </InternalLocal>
      );
    },
    internalGlobal: ({ value, children }) => {
      const { href, newTab } = value;
      return (
        <InternalGlobal href={href} newTab={newTab} className="caption-link">
          {children}
        </InternalGlobal>
      );
    },
    externalLink: ({ value, children }) => {
      const { href, noreferrer, newTab } = value;
      return (
        <ExternalLink href={href} noreferrer={noreferrer} newTab={newTab} className="caption-link">
          {children}
        </ExternalLink>
      );
    },
    affiliateLink: ({ value, children }) => {
      const { href } = value;
      return (
        <AffiliateLink href={href} className="caption-link">
          {children}
        </AffiliateLink>
      );
    },
  },
};

function BlockContent({ blocks }) {
  return <PortableText value={blocks} components={serializers} renderContainerOnSingleChild />;
}

export default BlockContent;
