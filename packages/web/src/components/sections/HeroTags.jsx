import React from 'react';
import Box from '@mui/material/Box';
import SellIcon from '@mui/icons-material/Sell';
import SubjectTagButton from '../buttons/SubjectTagButton';

function HeroTags({
  topicTags,
  primarySubcategory,
  secondarySubcategory,
  subjectListingPages,
  color,
  borderColor,
  justifyContent,
}) {
  const primarySubcategorySlugString =
    subjectListingPages.filter((x) => x?.node?.subject?.name === primarySubcategory?.name)[0]?.node
      ?.slug?.current || '';

  const primarySubcategorySlug =
    primarySubcategorySlugString === '/' ? '/' : `/${primarySubcategorySlugString}`;
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '5px',
        alignItems: 'center',
        justifyContent,
      }}
    >
      {primarySubcategory && (
        <SellIcon
          sx={{
            transform: 'rotate(100deg)',
            verticalAlign: 'middle',
            display: 'flex',
            color: color || '#535353',
            fontSize: '24px',
          }}
        />
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
    </Box>
  );
}

export default HeroTags;
