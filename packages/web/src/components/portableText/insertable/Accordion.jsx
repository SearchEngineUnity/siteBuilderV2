import * as React from 'react';
import MuiAccordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionText from '../serializer/FullIndentSerializer';

export default function Accordion({ accordionSet }) {
  return (
    <>
      {accordionSet.map((item) => (
        <MuiAccordion
          key={item._key}
          disableGutters
          square
          sx={{
            boxShadow: 'none',
            paddingY: '1rem',
            borderBottom: (theme) => `solid 1px ${theme.palette.primary.main}`,
            '&:before': { height: '0px' },
            '&:first-of-type': {
              paddingTop: 0,
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: 'primary.main' }} />}
            aria-controls={`panel${item._key}-content`}
            id={`panel${item._key}-header`}
            sx={{ paddingX: '0px' }}
          >
            <Typography component="p" variant="h3" sx={{ color: 'primary.main' }}>
              {item.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              paddingX: '0px',
              paddingY: '12px',
            }}
          >
            <AccordionText blocks={item.text} />
          </AccordionDetails>
        </MuiAccordion>
      ))}
    </>
  );
}
