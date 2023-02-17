import { PortableText } from '@portabletext/react';
import React from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/styles';
import JumpLink from '../../link/JumpLink';
import ExternalLink from '../../link/LinkExternal';
import InternalGlobal from '../../link/LinkInternalGlobal';
import InternalLocal from '../../link/LinkInternalLocal';
import AffiliateLink from '../../link/LinkAffiliate';
import Illustration from '../insertable/Illustration';
import ClickableImage from '../insertable/ClickableImage';
import ButtonJumpLink from '../../buttons/ButtonJumpLink';
import ButtonAffiliate from '../../buttons/ButtonAffiliate';
import ButtonExternal from '../../buttons/ButtonExternal';
import ButtonInternalGlobal from '../../buttons/ButtonInternalGlobal';
import ButtonInternalLocal from '../../buttons/ButtonInternalLocal';
import VerticalSpacingWrapper from '../insertable/VerticalSpacingWrapper';
import { mapMuiBtnToProps } from '../../../lib/mapToProps';

const TableTypography = styled(Typography)`
  font-size: 14px;
`;

// const NoIndentUl = styled('ul')`
//   list-style-type: disc;
//   margin-left: 1.4rem;
//   padding-left: 0;
//   margin-block-start: 0px;
//   margin-block-end: 0px;

//   & > li {
//     position: relative;
//   }
// `;

// const NoIndentOl = styled('ol')`
//   list-style-type: decimal;
//   margin-left: 1.4rem;
//   padding-left: 0;
//   margin-block-start: 0px;
//   margin-block-end: 0px;

//   & > li {
//     position: relative;
//   }
// `;

const serializers = {
  types: {
    block: {
      normal: ({ children }) => {
        return children[0] ? (
          <Typography gutterBottom variant="body1">
            {children}
          </Typography>
        ) : (
          <br />
        );
      },
    },
    illustration: ({ value }) => (
      <VerticalSpacingWrapper>
        <Illustration illustration={value} />
      </VerticalSpacingWrapper>
    ),
    clickableImage: ({ value }) => (
      <VerticalSpacingWrapper>
        <ClickableImage {...value} />
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
  // list: {
  //   bullet: ({ children }) => <NoIndentUl>{children}</NoIndentUl>,
  //   number: ({ children }) => <NoIndentOl>{children}</NoIndentOl>,
  // },
  listItem: ({ children }) => (
    <TableTypography variant="body1" component="li">
      {children}
    </TableTypography>
  ),
};

function BlockContent({ blocks }) {
  return <PortableText value={blocks} components={serializers} />;
}

export default BlockContent;
