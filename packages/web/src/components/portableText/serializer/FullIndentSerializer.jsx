/* eslint-disable import/no-cycle */
import { PortableText } from '@portabletext/react';
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Video from '../insertable/Video';
import Illustration from '../insertable/Illustration';
import HighlightBox from '../insertable/HighlightBox';
import SmartTable from '../insertable/smartTable/SmartTable';
import ConditionalLink from '../../link/ConditionalLink';
import ConditionalButton from '../../buttons/ConditionalButton';
import SmartOrderedList from '../insertable/SmartOrderedList';
import SmartUnorderedList from '../insertable/SmartUnorderedList';
import ProductCard from '../insertable/productCard/ProductCard';
import ClickableImage from '../insertable/ClickableImage';
import SmartGrid from '../insertable/SmartGrid/SmartGrid';
import IndentFullWrapper from '../insertable/IndentFullWrapper';
import VerticalSpacingWrapper from '../insertable/VerticalSpacingWrapper';
import PTHeadingTypography from './PTHeadingTypography';
import { mapMuiBtnToProps, mapVideoToProps } from '../../../lib/mapToProps';

const serializers = {
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
      <PTHeadingTypography
        variant="h2"
        id={
          value.markDefs.length !== 0
            ? value.markDefs.filter((x) => x._type === 'hashId')[0]?.idTag
            : undefined
        }
      >
        {children}
      </PTHeadingTypography>
    ),
    h3: ({ value, children }) => (
      <PTHeadingTypography
        variant="h3"
        id={
          value.markDefs.length !== 0
            ? value.markDefs.filter((x) => x._type === 'hashId')[0]?.idTag
            : undefined
        }
      >
        {children}
      </PTHeadingTypography>
    ),
    h4: ({ value, children }) => (
      <PTHeadingTypography
        variant="h4"
        id={
          value.markDefs.length !== 0
            ? value.markDefs.filter((x) => x._type === 'hashId')[0]?.idTag
            : undefined
        }
      >
        {children}
      </PTHeadingTypography>
    ),
    h5: ({ value, children }) => (
      <PTHeadingTypography
        variant="h5"
        id={
          value.markDefs.length !== 0
            ? value.markDefs.filter((x) => x._type === 'hashId')[0]?.idTag
            : undefined
        }
      >
        {children}
      </PTHeadingTypography>
    ),
    h6: ({ value, children }) => (
      <PTHeadingTypography
        variant="h6"
        id={
          value.markDefs.length !== 0
            ? value.markDefs.filter((x) => x._type === 'hashId')[0]?.idTag
            : undefined
        }
      >
        {children}
      </PTHeadingTypography>
    ),
    blockquote: ({ children }) => (
      <Typography
        component="blockquote"
        variant="h3"
        gutterBottom
        sx={(theme) => ({
          fontWeight: 100,
          pl: 4,
          py: 1,
          borderLeft: `4px solid ${theme.palette.primary.main}`,
        })}
      >
        &#8220; {children} &#8221;
      </Typography>
    ),
  },
  types: {
    illustration: ({ value }) => (
      <VerticalSpacingWrapper>
        <IndentFullWrapper>
          <Illustration illustration={value} />
        </IndentFullWrapper>
      </VerticalSpacingWrapper>
    ),
    highlightBox: ({ value }) => (
      <VerticalSpacingWrapper>
        <IndentFullWrapper>
          <HighlightBox box={value} />
        </IndentFullWrapper>
      </VerticalSpacingWrapper>
    ),
    smartTable: ({ value }) => (
      <VerticalSpacingWrapper>
        <SmartTable smartTable={value} />
      </VerticalSpacingWrapper>
    ),
    video: ({ value }) => (
      <VerticalSpacingWrapper>
        <IndentFullWrapper>
          <Video {...mapVideoToProps(value)} />
        </IndentFullWrapper>
      </VerticalSpacingWrapper>
    ),
    btnBlockMui: ({ value }) => (
      <VerticalSpacingWrapper>
        <ConditionalButton {...mapMuiBtnToProps(value)} />
      </VerticalSpacingWrapper>
    ),
    smartOrderedList: ({ value }) => (
      <VerticalSpacingWrapper>
        <SmartOrderedList {...value} />
      </VerticalSpacingWrapper>
    ),
    smartUnorderedList: ({ value }) => (
      <VerticalSpacingWrapper>
        <SmartUnorderedList {...value} />
      </VerticalSpacingWrapper>
    ),
    productCard: ({ value }) => (
      <VerticalSpacingWrapper>
        <IndentFullWrapper>
          <ProductCard {...value} />
        </IndentFullWrapper>
      </VerticalSpacingWrapper>
    ),
    clickableImage: ({ value }) => (
      <VerticalSpacingWrapper>
        <IndentFullWrapper>
          <ClickableImage {...value} />
        </IndentFullWrapper>
      </VerticalSpacingWrapper>
    ),
    smartGrid: ({ value }) => (
      <VerticalSpacingWrapper>
        <SmartGrid {...value} />
      </VerticalSpacingWrapper>
    ),
  },
  marks: {
    hashId: ({ children }) => children,
    internalLocal: ({ value, children }) => {
      return (
        <ConditionalLink link={value} className="pt-link">
          {children}
        </ConditionalLink>
      );
    },
    internalGlobal: ({ value, children }) => {
      return (
        <ConditionalLink link={value} className="pt-link">
          {children}
        </ConditionalLink>
      );
    },
    externalLink: ({ value, children }) => {
      return (
        <ConditionalLink link={value} className="pt-link">
          {children}
        </ConditionalLink>
      );
    },
    affiliateLink: ({ value, children }) => {
      return (
        <ConditionalLink link={value} className="pt-link">
          {children}
        </ConditionalLink>
      );
    },
    jumpLink: ({ value, children }) => {
      return (
        <ConditionalLink link={value} className="pt-link">
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
    <Typography variant="body1" component="li">
      {children}
    </Typography>
  ),
};

function BlockContent({ blocks }) {
  return <PortableText value={blocks} components={serializers} />;
}

export default BlockContent;
