/* eslint-disable import/no-cycle */
// This code sheet has been updated to accommodate heading styles in smart list. They will all need to be moved to the new 'Heading Ordered List'

/* eslint-disable react/no-array-index-key */
// will need to set keys properly for react instead of using eslint disable

import React from 'react';
import Typography from '@mui/material/Typography';
import ListContent from '../serializer/NoIndentSerializer';

function SmartUnorderedList({ listItems, listStyleImage, noIndent }) {
  const image = listStyleImage?.asset?.url;

  // using typography to set changable fontsize to ul and li so that we can use em to calculate things with variant so all the em units will work properly
  return (
    <Typography
      variant="body1"
      component="ul"
      sx={[
        { marginBlockStart: 0, marginBlockEnd: 0 },
        image && !noIndent
          ? { listStyle: 'none', paddingInlineStart: 'calc(40px - 1.5em)' }
          : { listStyle: 'initial', paddingInlineStart: '40px' },
        image && noIndent && { listStyle: 'none', paddingInlineStart: 'calc(20px - 1.5em)' },
        !image && noIndent && { listStyle: 'initial', paddingInlineStart: '1.5em' },
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

export default SmartUnorderedList;
