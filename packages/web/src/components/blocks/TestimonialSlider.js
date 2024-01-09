import React, { useState } from 'react';
import Box from '@mui/material/Box';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Slide from '@mui/material/Slide';
import Stack from '@mui/material/Stack';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import IconButton from '@mui/material/IconButton';
import CompanyTile from '../testimonialTiles/CompanyTestimonial';
import { mapTestimonialListToProps } from '../../lib/mapToProps';

function TestimonialSlider({ testimonialList }) {
  const [currentPage, setCurrentPage] = useState(0);

  const [slideDirection, setSlideDirection] = useState('left');

  const cardsPerPage = 1;

  const maxPageIndex = Math.ceil((testimonialList.length || 0) / cardsPerPage) - 1;

  const handleNextPage = () => {
    setSlideDirection('left');
    setCurrentPage((prevPage) => {
      return prevPage === maxPageIndex ? 0 : prevPage + 1;
    });
  };

  const handlePrevPage = () => {
    setSlideDirection('right');
    setCurrentPage((prevPage) => {
      return prevPage === 0 ? maxPageIndex : prevPage - 1;
    });
  };

  return (
    <>
      {/* outer box that holds the carousel and the buttons */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          alignContent: 'center',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <IconButton onClick={handlePrevPage} sx={{ display: { xs: 'none', md: 'block' } }}>
          {/* this is the button that will go to the previous page you can change these icons to whatever you wish */}
          <NavigateBeforeIcon sx={{ width: '60px', height: '60px' }} />
        </IconButton>
        <Box sx={{ width: '100%', height: '100%' }}>
          {/* this is the box that holds the cards and the slide animation,
    in this implementation the card is already constructed but in later versions you will see how the
    items you wish to use will be dynamically created with the map method */}
          {testimonialList.map((card, index) => (
            <Box
              // need to update key info
              key="card"
              sx={{
                width: '100%',
                height: '100%',
                display: currentPage === index ? 'block' : 'none',
              }}
            >
              {/* this is the slide animation that will be used to slide the cards in and out */}
              <Slide direction={slideDirection} in={currentPage === index}>
                <Stack
                  spacing={2}
                  direction="row"
                  alignContent="center"
                  justifyContent="center"
                  sx={{ width: '100%', height: '100%' }}
                >
                  {/* this slices the cards array to only display the amount you have previously determined per page */}
                  {testimonialList
                    .slice(index * cardsPerPage, index * cardsPerPage + cardsPerPage)
                    .map((testimonial) => (
                      <CompanyTile
                        key={testimonial._key}
                        {...mapTestimonialListToProps(testimonial)}
                      />
                    ))}
                </Stack>
              </Slide>
            </Box>
          ))}
        </Box>
        <IconButton onClick={handleNextPage} sx={{ display: { xs: 'none', md: 'block' } }}>
          <NavigateNextIcon sx={{ width: '60px', height: '60px' }} />
        </IconButton>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', pt: 2 }}>
        {testimonialList.map((item, index) => {
          return (
            <IconButton key={item._key} onClick={() => setCurrentPage(index)}>
              <FiberManualRecordIcon
                size="large"
                sx={{ color: index === currentPage ? 'primary.main' : 'inherit' }}
              />
            </IconButton>
          );
        })}
      </Box>
    </>
  );
}

export default TestimonialSlider;
