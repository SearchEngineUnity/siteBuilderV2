import { PortableText } from '@portabletext/react';
import React from 'react';
import { Typography } from '@mui/material';
import JumpLink from '../../link/JumpLink';
import ExternalLink from '../../link/LinkExternal';
import InternalGlobal from '../../link/LinkInternalGlobal';
import InternalLocal from '../../link/LinkInternalLocal';
import AffiliateLink from '../../link/LinkAffiliate';
import ButtonAffiliate from '../../buttons/ButtonAffiliate';
import ButtonExternal from '../../buttons/ButtonExternal';
import ButtonInternalGlobal from '../../buttons/ButtonInternalGlobal';
import ButtonInternalLocal from '../../buttons/ButtonInternalLocal';
import ButtonJumpLink from '../../buttons/ButtonJumpLink';
import Illustration from '../insertable/Illustration';
import ClickableImage from '../insertable/ClickableImage';
import { mapMuiBtnToProps } from '../../../lib/mapToProps';
import IndentHalfWrapper from '../insertable/IndentHalfWrapper';
import VerticalSpacingWrapper from '../insertable/VerticalSpacingWrapper';

const serializers = {
  types: {
    block: {
      normal: ({ children }) => {
        return children[0] ? (
          <Typography component="p" variant="body1" gutterBottom>
            {children}
          </Typography>
        ) : (
          <br />
        );
      },
    },
    illustration: ({ value }) => (
      <VerticalSpacingWrapper>
        <IndentHalfWrapper>
          <Illustration illustration={value} />
        </IndentHalfWrapper>
      </VerticalSpacingWrapper>
    ),
    btnBlockMui: ({ value }) => {
      switch (value.link[0]._type) {
        case 'jumpLink':
          return (
            <VerticalSpacingWrapper>
              <ButtonJumpLink {...mapMuiBtnToProps(value)} />
            </VerticalSpacingWrapper>
          );
        case 'internalLocal':
          return (
            <VerticalSpacingWrapper>
              <ButtonInternalLocal {...mapMuiBtnToProps(value)} />
            </VerticalSpacingWrapper>
          );
        case 'internalGlobal':
          return (
            <VerticalSpacingWrapper>
              <ButtonInternalGlobal {...mapMuiBtnToProps(value)} />
            </VerticalSpacingWrapper>
          );
        case 'externalLink':
          return (
            <VerticalSpacingWrapper>
              <ButtonExternal {...mapMuiBtnToProps(value)} />
            </VerticalSpacingWrapper>
          );
        case 'affiliateLink':
          return (
            <VerticalSpacingWrapper>
              <ButtonAffiliate {...mapMuiBtnToProps(value)} />
            </VerticalSpacingWrapper>
          );
        default:
          return <p>under development</p>;
      }
    },
    clickableImage: ({ value }) => (
      <VerticalSpacingWrapper>
        <IndentHalfWrapper>
          <ClickableImage {...value} />
        </IndentHalfWrapper>
      </VerticalSpacingWrapper>
    ),
  },
  marks: {
    internalLocal: ({ value, children }) => {
      const { slug = {} } = value.reference;
      const { newTab, hashId, parameter } = value;
      const baseSlug = slug.current === '/' ? `/` : `/${slug.current}`;
      const href = `${baseSlug}${hashId ? `#${hashId}` : ''}${parameter ? `?${parameter}` : ''}`;
      return (
        <InternalLocal href={href} newTab={newTab} className="pt-link">
          {children}
        </InternalLocal>
      );
    },
    internalGlobal: ({ value, children }) => {
      const { href, newTab } = value;
      return (
        <InternalGlobal href={href} newTab={newTab} className="pt-link">
          {children}
        </InternalGlobal>
      );
    },
    externalLink: ({ value, children }) => {
      const { href, noreferrer, newTab } = value;
      return (
        <ExternalLink href={href} noreferrer={noreferrer} newTab={newTab} className="pt-link">
          {children}
        </ExternalLink>
      );
    },
    affiliateLink: ({ value, children }) => {
      const { href } = value;
      return (
        <AffiliateLink href={href} className="pt-link">
          {children}
        </AffiliateLink>
      );
    },
    jumpLink: ({ value, children }) => {
      const { hashId } = value;
      return (
        <JumpLink hash={hashId} className="pt-link">
          {children}
        </JumpLink>
      );
    },
  },
};

function BlockContent({ blocks }) {
  return <PortableText value={blocks} components={serializers} />;
}

export default BlockContent;
