import { PortableText } from '@portabletext/react';
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ConditionalLink from '../../link/ConditionalLink';
import VerticalSpacingWrapper from '../insertable/VerticalSpacingWrapper';

const serializers = {
  // not sure if this container thing works anymore
  container: (props) => (
    <Box component="figcaption" sx={{ textAlign: 'center' }}>
      {props.children}
    </Box>
  ),
  block: {
    normal: ({ children }) => {
      return children[0] ? (
        <Typography gutterBottom variant="caption" component="p" className="caption-text">
          {children}
        </Typography>
      ) : (
        <br />
      );
    },
  },
  marks: {
    hashId: ({ children }) => children,
    internalLocal: ({ value, children }) => {
      return (
        <ConditionalLink link={value} className="caption-link">
          {children}
        </ConditionalLink>
      );
    },
    internalGlobal: ({ value, children }) => {
      return (
        <ConditionalLink link={value} className="caption-link">
          {children}
        </ConditionalLink>
      );
    },
    externalLink: ({ value, children }) => {
      return (
        <ConditionalLink link={value} className="caption-link">
          {children}
        </ConditionalLink>
      );
    },
    affiliateLink: ({ value, children }) => {
      return (
        <ConditionalLink link={value} className="caption-link">
          {children}
        </ConditionalLink>
      );
    },
    jumpLink: ({ value, children }) => {
      return (
        <ConditionalLink link={value} className="caption-link">
          {children}
        </ConditionalLink>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <VerticalSpacingWrapper>
        <Box component="ul" sx={{ marginBlockStart: 0, marginBlockEnd: 0 }}>
          {children}
        </Box>
      </VerticalSpacingWrapper>
    ),
    number: ({ children }) => (
      <VerticalSpacingWrapper>
        <Box component="ol" sx={{ marginBlockStart: 0, marginBlockEnd: 0 }}>
          {children}
        </Box>
      </VerticalSpacingWrapper>
    ),
  },
  listItem: ({ children }) => (
    <Typography variant="caption" component="li" className="caption-text">
      {children}
    </Typography>
  ),
};

function BlockContent({ blocks }) {
  return <PortableText value={blocks} components={serializers} renderContainerOnSingleChild />;
}

export default BlockContent;
