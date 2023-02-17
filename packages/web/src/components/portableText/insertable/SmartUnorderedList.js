/* eslint-disable import/no-cycle */
// This code sheet has been updated to accommodate heading styles in smart list. They will all need to be moved to the new 'Heading Ordered List'

/* eslint-disable react/no-array-index-key */
// will need to set keys properly for react instead of using eslint disable

import React from 'react';
import { Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import ListContent from '../serializer/ListSerializer';

const useStyles = makeStyles()((theme, { image }) => ({
  removeStyle: {
    listStyle: image ? 'none' : 'initial',
    paddingInlineStart: image ? 'calc(40px - 1.5em)' : '40px',
    marginBlockStart: '1em',
    marginBlockEnd: '1em',
  },
  imageBullet: {
    padding: '0 0 0 1.5em',
    background: `url('${image}') no-repeat`,
    backgroundPosition: 'top 0.25em left',
    backgroundSize: '1em',
  },
}));

function SmartUnorderedList({ listItems, listStyleImage }) {
  const image = listStyleImage?.asset?.url;

  const { classes } = useStyles({ image });

  // using typography to set changable fontsize to ul and li so that we can use em to calculate things with variant so all the em units will work properly
  return (
    <Typography variant="body1" component="ul" className={classes.removeStyle}>
      {listItems.map((li) => (
        <Typography
          variant="body1"
          component="li"
          key={li._key}
          className={image && classes.imageBullet}
        >
          <ListContent blocks={li.content} />
        </Typography>
      ))}
    </Typography>
  );
}

export default SmartUnorderedList;
