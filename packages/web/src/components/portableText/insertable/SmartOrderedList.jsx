/* eslint-disable import/no-cycle */
// This code sheet has been updated to accommodate heading styles in smart list. They will all need to be moved to the new 'Heading Ordered List'

/* eslint-disable react/no-array-index-key */
// will need to set keys properly for react instead of using eslint disable

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ListContent from '../serializer/FullIndentSerializer';

function SmartOrderedList({ listItems, noIndent }) {
  const fontStyles = {
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
  };

  const selectedStyle = listItems[0].content[0].style;
  const listStyle = fontStyles[selectedStyle];

  return (
    <Box
      component="ol"
      sx={[
        { marginBlockStart: 0, marginBlockEnd: 0 },
        listStyle && {
          listStyle: 'none',
          paddingLeft: '0px',
        },
        !listStyle &&
          noIndent && {
            istStyle: 'initial',
            paddingInlineStart: '1.5em',
          },
      ]}
    >
      {listItems.map((li) => (
        <Typography variant={listStyle} component="li" key={li._key}>
          <ListContent blocks={li.content} />
        </Typography>
      ))}
    </Box>
  );
}

export default SmartOrderedList;
