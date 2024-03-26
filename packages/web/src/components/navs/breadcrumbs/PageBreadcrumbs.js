import React from 'react';
import { Link } from 'gatsby-theme-material-ui';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function PageBreadcrumbs({ subject, subjectListingPages, isSGP }) {
  const { _type: type } = subject || {};

  const firstLevel = {};
  const secondLevel = {};

  if (type === 'subcategory') {
    firstLevel.name = subject?.category?.name;
    firstLevel.slug = subjectListingPages.filter(
      (x) => x?.node?.subject?.name === subject?.category?.name,
    )[0]?.node?.slug?.current;
  }

  if (type === 'subcategory' && isSGP) {
    secondLevel.name = subject?.name;
    secondLevel.slug = subjectListingPages.filter(
      (x) => x?.node?.subject?.name === subject?.name,
    )[0]?.node?.slug?.current;
  }

  if (type === 'topic') {
    firstLevel.name = subject?.subcategory?.category?.name;
    firstLevel.slug = subjectListingPages.filter(
      (x) => x?.node?.subject?.name === subject?.subcategory?.category?.name,
    )[0]?.node?.slug?.current;
    secondLevel.name = subject?.subcategory?.name;
    secondLevel.slug = subjectListingPages.filter(
      (x) => x?.node?.subject?.name === subject?.subcategory?.name,
    )[0]?.node?.slug?.current;
  }

  return (
    <nav aria-label="Breadcrumb">
      <Box component="ol" sx={{ margin: 0, paddingLeft: 0, listStyle: 'none' }}>
        <Typography
          component="li"
          variant="h5"
          sx={{
            display: 'inline-flex',
            verticalAlign: 'middle',
          }}
        >
          <Link
            to="/"
            underline="hover"
            style={{
              fontVariationSettings: '"FILL" 1, "wght" 400, "GRAD" 0, "opsz" 24',
            }}
          >
            <span className="material-symbols-outlined">home</span>
          </Link>
        </Typography>
        {firstLevel.name && (
          <Typography
            component="li"
            variant="h5"
            sx={{
              display: 'inline',
              fontWeight: 'normal',
              color: (theme) => theme.palette.primary.main,
              '&:before': {
                display: 'inline-block',
                content: '" > "',
                whiteSpace: 'pre',
              },
            }}
          >
            <Link to={firstLevel.slug && `/${firstLevel.slug}`} underline="hover">
              {firstLevel.name}
            </Link>
          </Typography>
        )}
        {secondLevel.name && (
          <Typography
            component="li"
            variant="h5"
            sx={{
              display: 'inline',
              fontWeight: 'normal',
              color: (theme) => theme.palette.primary.main,
              '&:before': {
                display: 'inline-block',
                content: '" > "',
                whiteSpace: 'pre',
              },
            }}
          >
            <Link to={secondLevel.slug && `/${secondLevel.slug}`} underline="hover">
              {secondLevel.name}
            </Link>
          </Typography>
        )}
      </Box>
    </nav>
  );
}

export default PageBreadcrumbs;
