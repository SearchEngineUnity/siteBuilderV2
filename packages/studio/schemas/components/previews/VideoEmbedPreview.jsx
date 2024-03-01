/* eslint-disable jsx-a11y/iframe-has-title */
// import React from 'react';
// import getVideoId from 'get-video-id';
// import PropTypes from 'prop-types';

// const getEmbedCode = (value) => {
//   const videoId = value ? getVideoId(value) : '';

//   if (!videoId) {
//     return <span />;
//   }

//   switch (videoId.service) {
//     case 'youtube': {
//       return (
//         <iframe
//           src={`https://www.youtube.com/embed/${videoId.id}?rel=0`}
//           style={{
//             border: 'none',
//             width: '100%',
//           }}
//         />
//       );
//     }

//     case 'vimeo': {
//       return (
//         <iframe
//           src={`https://player.vimeo.com/video/${videoId.id}`}
//           style={{
//             border: 'none',
//             width: '100%',
//           }}
//         />
//       );
//     }
//     default: {
//       return <span>Unsupported video service: {videoId.service}</span>;
//     }
//   }
// };

// const YoutubeVideo = ({ url }) => <div>{getEmbedCode(url)}</div>;

// YoutubeVideo.propTypes = {
//   url: PropTypes.string.isRequired,
// };

// export default YoutubeVideo;
