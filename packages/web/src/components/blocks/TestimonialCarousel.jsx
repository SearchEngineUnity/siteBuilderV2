import React from 'react';
import Box from '@mui/material/Box';
import Carousel from 'react-material-ui-carousel';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useTheme } from '@mui/material';
import CompanyTile from '../testimonialTiles/CompanyTestimonial';
import { mapTestimonialListToProps } from '../../lib/mapToProps';

function TestimonialCarousel({ testimonialList }) {
  const theme = useTheme();

  return (
    <Carousel
      autoplay
      animation="slide"
      indicators
      cycleNavigation
      swipe
      fullHeightHover
      interval={6000}
      indicatorIconButtonProps={{
        style: {
          padding: '8px',
          color: 'rgba(0, 0, 0, 0.54)',
        },
      }}
      activeIndicatorIconButtonProps={{
        style: {
          color: theme.palette.primary.main,
        },
      }}
      IndicatorIcon={<FiberManualRecordIcon sx={{ fontSize: '24px' }} />}
    >
      {testimonialList.map((testimonial) => (
        <Box
          key={testimonial._id}
          sx={{
            width: { xs: '100%', md: 'calc(100% - 152px)' },
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <CompanyTile {...mapTestimonialListToProps(testimonial)} />
        </Box>
      ))}
    </Carousel>
  );
}

export default TestimonialCarousel;
