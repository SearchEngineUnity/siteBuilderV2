import { PortableText } from '@portabletext/react';
import React from 'react';
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/styles';
import Illustration from '../insertable/Illustration';
import JumpLink from '../../link/JumpLink';
import ExternalLink from '../../link/LinkExternal';
import AffiliateLink from '../../link/LinkAffiliate';
import InternalGlobal from '../../link/LinkInternalGlobal';
import InternalLocal from '../../link/LinkInternalLocal';
import ButtonAffiliate from '../../buttons/ButtonAffiliate';
import ButtonExternal from '../../buttons/ButtonExternal';
import ButtonInternalGlobal from '../../buttons/ButtonInternalGlobal';
import ButtonInternalLocal from '../../buttons/ButtonInternalLocal';
import ButtonJumpLink from '../../buttons/ButtonJumpLink';
import ClickableImage from '../insertable/ClickableImage';
import IndentFullWrapper from '../insertable/IndentFullWrapper';
import VerticalSpacingWrapper from '../insertable/VerticalSpacingWrapper';
import { mapMuiBtnToProps } from '../../../lib/mapToProps';

const StyledTypography = styled(Typography)`
  margin-top: 1.35em;
`;

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
      h2: ({ value, children }) => (
        <StyledTypography
          gutterBottom
          variant="h2"
          id={
            value.markDefs.length !== 0
              ? value.markDefs.filter((x) => x._type === 'hashId')[0]?.idTag
              : undefined
          }
        >
          {children}
        </StyledTypography>
      ),
      h3: ({ value, children }) => (
        <StyledTypography
          gutterBottom
          variant="h3"
          id={
            value.markDefs.length !== 0
              ? value.markDefs.filter((x) => x._type === 'hashId')[0]?.idTag
              : undefined
          }
        >
          {children}
        </StyledTypography>
      ),
      h4: ({ value, children }) => (
        <StyledTypography
          gutterBottom
          variant="h4"
          id={
            value.markDefs.length !== 0
              ? value.markDefs.filter((x) => x._type === 'hashId')[0]?.idTag
              : undefined
          }
        >
          {children}
        </StyledTypography>
      ),
      h5: ({ value, children }) => (
        <StyledTypography
          gutterBottom
          variant="h5"
          id={
            value.markDefs.length !== 0
              ? value.markDefs.filter((x) => x._type === 'hashId')[0]?.idTag
              : undefined
          }
        >
          {children}
        </StyledTypography>
      ),
      h6: ({ value, children }) => (
        <StyledTypography
          gutterBottom
          variant="h6"
          id={
            value.markDefs.length !== 0
              ? value.markDefs.filter((x) => x._type === 'hashId')[0]?.idTag
              : undefined
          }
        >
          {children}
        </StyledTypography>
      ),
      blockquote: ({ children }) => (
        <Box
          component="blockquote"
          fontSize="h3.fontSize"
          fontWeight={100}
          borderColor="primary.main"
          pl={4}
          py={1}
          borderLeft={4}
        >
          &#8220; {children} &#8221;
        </Box>
      ),
    },
    illustration({ value }) {
      return (
        <VerticalSpacingWrapper>
          <IndentFullWrapper>
            <Illustration illustration={value} loading="eager" />
          </IndentFullWrapper>
        </VerticalSpacingWrapper>
      );
    },
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
        <IndentFullWrapper>
          <ClickableImage {...value} />
        </IndentFullWrapper>
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
  listItem: ({ children }) => (
    <Typography variant="body1" component="li">
      {children}
    </Typography>
  ),
};

function BlockContent({ blocks }) {
  return <PortableText value={blocks} components={serializers} />;
}

export default BlockContent;
