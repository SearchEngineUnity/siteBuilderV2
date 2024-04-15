import React from 'react';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { Link } from 'gatsby';
import { deepmerge } from '@mui/utils';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function ListingPagination({ currentpage, numPages, slug, color }) {
  const componentTheme = {
    palette: {
      action: {
        selected: color
          ? `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, 0.08)`
          : 'rgba(0, 0, 0, 0.08)',
        focus: color
          ? `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, 0.12)`
          : 'rgba(0, 0, 0, 0.12)',
        hover: color
          ? `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, 0.04)`
          : 'rgba(0, 0, 0, 0.04)',
      },
      text: {
        primary: color
          ? `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`
          : 'rgba(0, 0, 0, 1)',
      },
    },
    components: {
      MuiPaginationItem: {
        styleOverrides: {
          outlined: {
            border: color
              ? `1px solid rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, 0.23)`
              : '1px solid rgba(0, 0, 0, 0.23)',
          },
        },
      },
    },
  };

  return (
    <ThemeProvider theme={(theme) => createTheme(deepmerge(theme, componentTheme))}>
      <Box sx={{ mt: 3 }}>
        <Pagination
          page={currentpage}
          count={numPages}
          variant="outlined"
          shape="rounded"
          renderItem={(item) => (
            <PaginationItem
              component={Link}
              to={`/${slug}${item.page === 1 ? '' : `/${item.page}`}`}
              {...item}
            />
          )}
        />
      </Box>
    </ThemeProvider>
  );
}

export default ListingPagination;
