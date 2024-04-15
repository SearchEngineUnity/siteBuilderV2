/* eslint-disable import/no-cycle */
import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ThumbUpOutlined from '@mui/icons-material/ThumbUpOutlined';
import ErrorOutlineOutlined from '@mui/icons-material/ErrorOutlineOutlined';
import WarningOutlined from '@mui/icons-material/WarningOutlined';
import EmojiObjectsOutlined from '@mui/icons-material/EmojiObjectsOutlined';
import MenuBook from '@mui/icons-material/MenuBook';
import TextContent from '../serializer/HalfIndentSerializer';

const iconSelector = {
  proTip: ThumbUpOutlined,
  important: ErrorOutlineOutlined,
  warning: WarningOutlined,
  dyk: EmojiObjectsOutlined,
  definition: MenuBook,
};

const titleSelector = {
  proTip: 'Pro Tip',
  important: 'Important',
  warning: 'Warning',
  dyk: 'Did You Know',
  definition: 'Definition',
};

function HighlightBox({ box: { _key: id, type, text } }) {
  const Icon = iconSelector[type];
  const title = titleSelector[type];

  return Icon ? (
    <Box
      component={Paper}
      variant="outlined"
      key={id}
      sx={{
        p: 2,
        bgcolor: `hlBox.${type}.bgColor`,
        borderColor: `hlBox.${type}.borderColor`,
        '& .pt-link': {
          color: `hlBox.${type}.linkColor`,
          textDecorationColor: 'currentcolor',
        },
      }}
      className="hlb"
    >
      <Box sx={{ display: 'inline-flex', mb: '0.8125em' }}>
        <Icon sx={{ alignSelf: 'center', color: `hlBox.${type}.iconColor` }} />
        <Typography
          component="p"
          variant="h4"
          sx={{ color: `hlBox.${type}.textColor`, marginLeft: '8px' }}
        >
          {title}
        </Typography>
      </Box>
      <Box sx={{ color: `hlBox.${type}.textColor` }}>
        <TextContent blocks={text} />
      </Box>
    </Box>
  ) : (
    <div>Undefined Highlight Box</div>
  );
}

export default HighlightBox;
