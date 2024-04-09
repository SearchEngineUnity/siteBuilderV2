import React from 'react';
import Box from '@mui/material/Box';
import SubjectTagButton from '../buttons/SubjectTagButton';

function HeroTags({
  topicTags,
  primarySubcategory,
  secondarySubcategory,
  subjectListingPages,
  color,
  borderColor,
}) {
  const primarySubcategorySlugString =
    subjectListingPages.filter((x) => x?.node?.subject?.name === primarySubcategory?.name)[0]?.node
      ?.slug?.current || '';

  const primarySubcategorySlug =
    primarySubcategorySlugString === '/' ? '/' : `/${primarySubcategorySlugString}`;
  return (
    <>
      {primarySubcategory && (
        <Box
          component="span"
          className="material-symbols-outlined"
          sx={{
            transform: 'rotate(17.6deg)',
            verticalAlign: 'middle',
            display: 'inline-block',
            color: color || '#535353',
            marginBottom: '4px',
          }}
        >
          shoppingmode
        </Box>
      )}
      {topicTags.map((topic) => {
        const { _id, name } = topic || {};
        const currentSlug =
          subjectListingPages.filter((x) => x?.node?.subject?.name === name)[0]?.node?.slug
            ?.current || '';

        const slug = currentSlug === '/' ? '/' : `/${currentSlug}`;
        return (
          <SubjectTagButton
            disableFocusRipple
            disableRipple
            key={_id}
            to={currentSlug && slug}
            fontSize="body1"
            variant="outlined"
            sx={{
              margin: '0px 0px 4px 4px',
              color,
              borderColor,
              '&:hover': {
                borderColor,
              },
              '&:focus': {
                borderColor,
              },
            }}
          >
            {name}
          </SubjectTagButton>
        );
      })}
      {secondarySubcategory.map((subcategory) => {
        const { _id, name } = subcategory || {};
        const currentSlug =
          subjectListingPages.filter((x) => x?.node?.subject?.name === name)[0]?.node?.slug
            ?.current || '';
        const slug = currentSlug === '/' ? '/' : `/${currentSlug}`;
        return (
          <SubjectTagButton
            disableFocusRipple
            disableRipple
            key={_id}
            to={currentSlug && slug}
            fontSize="body1"
            variant="outlined"
            sx={{
              margin: '0px 0px 4px 4px',
              color,
              borderColor,
              '&:hover': {
                borderColor,
              },
              '&:focus': {
                borderColor,
              },
            }}
          >
            {name}
          </SubjectTagButton>
        );
      })}
      {primarySubcategory && (
        <SubjectTagButton
          disableFocusRipple
          disableRipple
          to={primarySubcategorySlugString && primarySubcategorySlug}
          fontSize="body1"
          variant="outlined"
          sx={{
            margin: '0px 0px 4px 4px',
            color,
            borderColor,
            '&:hover': {
              borderColor,
            },
            '&:focus': {
              borderColor,
            },
          }}
        >
          {primarySubcategory?.name}
        </SubjectTagButton>
      )}
    </>
  );
}

export default HeroTags;
