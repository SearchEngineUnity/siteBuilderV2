/* eslint-disable import/no-cycle */
// This code sheet has been updated to accommodate heading styles in smart list. They will all need to be moved to the new 'Heading Ordered List'

/* eslint-disable react/no-array-index-key */
// will need to set keys properly for react instead of using eslint disable

import React from 'react';
import Typography from '@mui/material/Typography';
import ListContent from '../serializer/TableSerializer';

function TableSmartUnorderedList({ listItems, listStyleImage }) {
  const image = listStyleImage?.asset?.url;

  // using typography to set changeable fontsize to ul and li so that we can use em to calculate things with variant so all the em units will work properly
  return (
    <Typography
      variant="body1"
      component="ul"
      sx={[
        {
          listStyle: 'initial',
          paddingInlineStart: '20px',
          marginBlockStart: '0px',
          marginBlockEnd: '0px',
        },
        image && {
          listStyle: 'none',
          paddingInlineStart: 'calc(20px - 1.5em)',
        },
      ]}
    >
      {listItems.map((li) => (
        <Typography
          variant="body1"
          component="li"
          key={li._key}
          sx={
            image && {
              padding: '0 0 0 1.5em',
              background: `url('${image}') no-repeat`,
              backgroundPosition: 'top 0.25em left',
              backgroundSize: '1em',
            }
          }
        >
          <ListContent blocks={li.content} />
        </Typography>
      ))}
    </Typography>
  );
}

export default TableSmartUnorderedList;
