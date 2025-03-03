import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
// import { useSectionsObserver } from '../hooks/useSectionsObserver';

function TableOfContent({ toc }) {
  // const { activeId } = useSectionsObserver();

  return (
    <Box
      sx={{
        display: 'block',
        position: 'sticky',
        top: 48,
        padding: 3,
      }}
    >
      <Typography
        component="p"
        variant="h5"
        gutterBottom
        sx={{ color: 'primary.main', fontWeight: 'bold' }}
      >
        IN THIS GUIDE
      </Typography>
      <nav>
        <Box component="ul" sx={{ listStyleType: 'none', padding: '0px' }}>
          {toc.map((item) => (
            <Typography
              component="li"
              key={item._key}
              variant="body2"
              sx={{
                lineHeight: 1.4,
                mb: 1.5,
              }}
            >
              <Link
                sx={[
                  // item.hashID === activeId && {
                  //   fontWeight: 'bold',
                  // },
                  { color: 'text.primary' },
                ]}
                href={`#${item.hashID}`}
                underline="hover"
                className="toc-link"
              >
                {item.title}
              </Link>
            </Typography>
          ))}
        </Box>
      </nav>
    </Box>
  );
}

export default TableOfContent;
