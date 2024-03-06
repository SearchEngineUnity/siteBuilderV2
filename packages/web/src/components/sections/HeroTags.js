import React from 'react';
import { Button } from 'gatsby-theme-material-ui';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

function HeroTags({ topicTags, primarySubcategory, secondarySubcategory }) {
  return (
    <>
      {primarySubcategory && (
        <LocalOfferIcon sx={{ transform: 'rotate(100deg)', color: 'primary.main' }} />
      )}
      {topicTags.map((topic) => {
        const { _key, name } = topic || {};
        const currentSlug = topic?.listingPage?.slug?.current || '';

        const slug = currentSlug === '/' ? '/' : `/${currentSlug}`;
        return (
          <Button key={_key} to={slug}>
            {name}
          </Button>
        );
      })}
      {secondarySubcategory.map((subcategory) => {
        const { _key, name } = subcategory || {};
        const currentSlug = subcategory?.listingPage?.slug?.current || '';
        const slug = currentSlug === '/' ? '/' : `/${currentSlug}`;
        return (
          <Button key={_key} to={slug}>
            {name}
          </Button>
        );
      })}
      {primarySubcategory && (
        <Button to={primarySubcategory?.listingPage?.slug?.current}>
          {primarySubcategory?.name}
        </Button>
      )}
    </>
  );
}

export default HeroTags;
