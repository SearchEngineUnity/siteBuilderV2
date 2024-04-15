import React, { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import LinkIcon from '@mui/icons-material/Link';
import { CopyToClipboard } from 'react-copy-to-clipboard';

// Inherit style of Tooltip has a grey background and text is in theme.palette.primary.main
// When using a button within a tool tip, custom tooltip color styling will be inherited by the button

function CopyLink({ id }) {
  const [baseURL, setBaseURL] = useState(null);

  useEffect(() => {
    setBaseURL(window.location.href.split('#')[0]);
  }, [baseURL]);

  return id ? (
    <CopyToClipboard text={`${baseURL}#${id}`}>
      <Tooltip title="Copy link" placement="right" sx={{ color: 'common.white' }}>
        <IconButton
          sx={{ color: 'text.primary' }}
          aria-label="copy link"
          component="span"
          size="large"
        >
          <LinkIcon />
        </IconButton>
      </Tooltip>
    </CopyToClipboard>
  ) : null;
}
export default CopyLink;
