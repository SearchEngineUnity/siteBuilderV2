import React from 'react';
import { Link } from 'gatsby-theme-material-ui';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';

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

  return type !== 'category' ? (
    <nav aria-label="Breadcrumb">
      <Box component="ol" sx={{ margin: 0, paddingLeft: 0, listStyle: 'none' }}>
        <Typography
          component="li"
          variant="body1"
          sx={{
            display: 'inline',
            color: 'inherit',
          }}
        >
          <Link
            aria-label="homepage"
            to="/"
            underline="hover"
            sx={{
              color: 'inherit',
              display: 'inline-flex',
              verticalAlign: 'top',
              '@media (max-width: 599px)': {
                color: 'inherit',
                '&:hover': {
                  color: 'inherit',
                },
              },
            }}
          >
            <HomeIcon sx={{ fontSize: '24px' }} />
          </Link>
        </Typography>
        {firstLevel.name && (
          <Typography
            component="li"
            variant="body1"
            sx={{
              display: 'inline',
              fontWeight: 'normal',
              color: 'inherit',
              '&:before': {
                display: 'inline-block',
                content: '" > "',
                whiteSpace: 'pre',
              },
            }}
          >
            <Link
              to={firstLevel.slug && `/${firstLevel.slug}`}
              underline="hover"
              sx={{
                color: 'inherit',
                '@media (max-width: 599px)': {
                  color: 'inherit',
                  '&:hover': {
                    color: 'inherit',
                  },
                },
              }}
            >
              {firstLevel.name}
            </Link>
          </Typography>
        )}
        {secondLevel.name && (
          <Typography
            component="li"
            variant="body1"
            sx={{
              display: 'inline',
              fontWeight: 'normal',
              color: 'inherit',
              '&:before': {
                display: 'inline-block',
                content: '" > "',
                whiteSpace: 'pre',
              },
            }}
          >
            <Link
              to={secondLevel.slug && `/${secondLevel.slug}`}
              underline="hover"
              sx={{
                color: 'inherit',
                '@media (max-width: 599px)': {
                  color: 'inherit',
                  '&:hover': {
                    color: 'inherit',
                  },
                },
              }}
            >
              {secondLevel.name}
            </Link>
          </Typography>
        )}
      </Box>
    </nav>
  ) : null;
}

export default PageBreadcrumbs;
