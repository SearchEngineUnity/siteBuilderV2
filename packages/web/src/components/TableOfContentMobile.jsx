import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Backdrop from '@mui/material/Backdrop';
import Popover from '@mui/material/Popover';

// import { useSectionsObserver } from '../hooks/useSectionsObserver';

function TableOfContentMobile({ toc }) {
  // const { activeId } = useSectionsObserver();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <Toolbar
        component="button"
        sx={{
          position: 'fixed',
          zIndex: 5,
          top: 54,
          backgroundColor: '#F8F8F8',
          color: '#939393',
          width: '100%',
          boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
          minHeight: 'unset',
          fontSize: '18px',
          fontWeight: 'bold',
          display: 'flex',
          flexDirection: 'column',
          border: 'none',
          padding: '8px 0px 4px',
          '@media (min-width: 600px)': {
            minHeight: 'unset',
            top: 62,
          },
        }}
        onClick={(e) => handleOpen(e)}
      >
        IN THIS GUIDE
      </Toolbar>
      <Backdrop open={open} onClose={handleClose} sx={{ zIndex: 5 }}>
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          marginThreshold={0}
          transitionDuration={0}
        >
          <Toolbar
            component="nav"
            sx={{
              padding: '12px 24px 24px',
              position: 'fixed',
              top: 54,
              backgroundColor: '#F8F8F8',
              color: 'common.black',
              width: '100%',
              boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
              minHeight: 'unset',
              fontSize: '18px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              '@media (min-width: 600px)': {
                top: 62,
              },
            }}
          >
            <Box component="div" sx={{ lineHeight: '24px', marginBottom: '4px' }}>
              In This Guide
              <IconButton aria-label="close" onClick={handleClose}>
                <CloseIcon sx={{ width: '24px', height: '24px', color: 'common.black' }} />
              </IconButton>
            </Box>
            <Box
              component="ul"
              sx={{
                listStyleType: 'none',
                padding: '0px',
                margin: '0px 0px 0px 4px',
                borderLeft: '1px solid #939393',
              }}
            >
              {toc.map((item) => (
                <Typography
                  key={item._key}
                  component="li"
                  variant="body1"
                  sx={{
                    py: '10px',
                    ml: '24px',
                    color: (theme) => theme.palette.text.primary,
                    lineHeight: 1,
                  }}
                >
                  <Link
                    sx={{
                      color: 'text.primary',
                      '@media (max-width: 599px)': {
                        color: 'inherit',
                        '&:hover': {
                          color: 'inherit',
                        },
                      },
                    }}
                    href={`#${item.hashID}`}
                    onClick={() => handleClose()}
                    underline="hover"
                    className="toc-link"
                  >
                    {item.title}
                  </Link>
                </Typography>
              ))}
            </Box>
          </Toolbar>
        </Popover>
      </Backdrop>
    </>
  );
}

export default TableOfContentMobile;
