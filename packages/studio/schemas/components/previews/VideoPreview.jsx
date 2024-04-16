/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';

function VideoPreview(props) {
  const {
    renderDefault,
    videoId,
    schemaType: { icon },
  } = props;

  const Link = (
    <a href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" rel="noreferrer">
      {videoId}
    </a>
  );

  return (
    <>
      {renderDefault({
        ...props,
        title: 'Video',
        subtitle: Link,
        media: icon,
      })}
    </>
  );
}

export default VideoPreview;
